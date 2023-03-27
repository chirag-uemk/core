import {
  LOGIN_WITH_OTP_API,
  LOGIN_WITH_PASSWORD_API,
  LOGIN_WITH_RESET_PASSWORD_API,
  LOGIN_WITH_URL_API,
} from "../../config/api";
import { HTTP_GET, MESSAGE_TYPE } from "../../config/constants";
import AppService from "../../service/AppService";
import { getForm } from "../../utils/formUtils";
import {
  CLEAR_SNACK_MESSAGE,
  PUSH_SNACK_MESSAGE,
  RESET_LOADING,
  SET_LOADING,
} from "../types/appTypes";
import {
  HTTP_NO_CONTENT,
  HTTP_UNHANDLED_ERROR_TYPE,
  HTTP_UNHANDLED_SUCCESS_TYPE,
} from "../types/commonTypes";
import {
  FORM_DATA_READ_LOADING,
  FORM_INIT_UPDATE,
  FORM_SUBMIT_ERROR,
  FORM_SUBMIT_LOADING,
  FORM_SUBMIT_SUCCESS,
} from "../types/formTypes";
import { SET_PENDING_REQUESTS } from "../types/pendingRequestTypes";

export const apiRequestAction =
  (
    method,
    endpoint,
    authRequired,
    data,
    successType,
    errorType,
    localAction = null,
    includeFile = false,
    file = null,
    formId = null,
    reload = false,
    reduxData = {},
    pushSnack = false,
    loadingType = SET_LOADING,
    resetLoadingType = RESET_LOADING
  ) =>
  (dispatch) => {
    dispatch({ type: loadingType });
    formId &&
      method !== HTTP_GET &&
      dispatch({
        type: FORM_SUBMIT_LOADING,
        payload: { formId },
      });
    formId &&
      method === HTTP_GET &&
      dispatch({
        type: FORM_DATA_READ_LOADING,
        payload: { formId },
      });
    return AppService.apiRequest(
      method,
      endpoint,
      authRequired,
      data,
      includeFile,
      file
    )
      .then(async (response) => {
        let formJson = null;
        if (formId) {
          formJson = await getForm(formId);
        }
        if (!response) throw new Error("Response is undefined");
        switch (response.status) {
          case 200:
          case 201:
            if (method !== HTTP_GET)
              dispatch({
                type: FORM_SUBMIT_SUCCESS,
                payload: { formId, data: { ...reduxData, ...response.data } },
              });
            else if (reload && method === HTTP_GET) {
              dispatch({
                type: FORM_INIT_UPDATE,
                payload: {
                  formId,
                  formJson,
                  data: { ...reduxData, ...response.data },
                },
              });
            }

            if (localAction) {
              dispatch({
                type: localAction,
                payload: { ...reduxData, ...data },
              });
            }
            if (typeof successType === "string") {
              dispatch({
                type: successType,
                payload: { ...reduxData, ...response.data },
              });
            } else if (typeof successType === "object") {
              if (Array.isArray(successType)) {
                for (var i = 0; i < successType.length; i++) {
                  dispatch({
                    type: successType[i],
                    payload: { ...reduxData, ...response.data },
                  });
                }
              } else
                dispatch({
                  type: successType[response.status],
                  payload: { ...reduxData, ...response.data },
                });
            } else {
              throw new Error("Unknown successType of this form");
            }
            break;
          case 204:
            if (reload && method === HTTP_GET) {
              dispatch({
                type: FORM_INIT_UPDATE,
                payload: {
                  formId,
                  formJson,
                  data: { ...reduxData, ...response.data },
                },
              });
            }
            dispatch({
              type: HTTP_NO_CONTENT,
              payload: { ...reduxData, ...response.data },
            });
            break;
          default:
            dispatch({
              type: HTTP_UNHANDLED_SUCCESS_TYPE,
              payload: { ...reduxData, ...response },
            });
        }
        dispatch({ type: resetLoadingType });
        if (pushSnack) {
          dispatch(
            pushSnackMessage(
              MESSAGE_TYPE.SUCCESS_MESSAGE,
              response?.data?.message
            )
          );
        }
        return Promise.resolve();
      })
      .catch((error) => {
        console.error("ERROR inaction layer", error);
        //CHECK FOR 401|403 AND SENT REQUEST TO STACK
        if (
          (error.status === 401 || error.status === 403) &&
          endpoint !== LOGIN_WITH_OTP_API &&
          endpoint !== LOGIN_WITH_PASSWORD_API &&
          endpoint !== LOGIN_WITH_URL_API &&
          endpoint !== LOGIN_WITH_RESET_PASSWORD_API
        ) {
          dispatch({
            type: SET_PENDING_REQUESTS,
            payload: {
              method,
              endpoint,
              authRequired,
              data,
              successType,
              errorType,
              localAction,
              includeFile,
              file,
              formId,
              reload,
              reduxData,
              pushSnack,
              loadingType,
              resetLoadingType,
            },
          });
        } else {
          if (formId) {
            console.log("DISPATH REDUCER FORM ERROR");
            dispatch({
              type: FORM_SUBMIT_ERROR,
              payload: { ...reduxData, formId, data: error },
            });
          }
          if (errorType) {
            if (typeof errorType === "string") {
              dispatch({
                type: errorType,
                payload: { ...reduxData, data: error },
              });
            } else if (typeof errorType === "object") {
              dispatch({
                type: errorType[error.response.status],
                payload: { ...reduxData, data: error },
              });
            }
          } else {
            dispatch({
              type: HTTP_UNHANDLED_ERROR_TYPE,
              payload: { ...reduxData, data: error },
            });
          }
          dispatch({ type: resetLoadingType });
          if (pushSnack) {
            dispatch(
              pushSnackMessage(
                MESSAGE_TYPE.ERROR_MESSAGE,
                error?.response?.data?.message
              )
            );
          }
        }

        return Promise.reject();
      });
  };

/**
 * Snack message related action
 */
export const pushSnackMessage = (type, message) => (dispatch) => {
  // enqueueSnackbar(message, { variant: type });
  dispatch({
    type: PUSH_SNACK_MESSAGE,
    payload: {
      _timestamp: new Date().getTime(),
      type: type,
      message: message || "Message not provided",
    },
  });
};
export const clearSnackMessages = () => (dispatch) => {
  // closeSnackbar();
  dispatch({
    type: CLEAR_SNACK_MESSAGE,
  });
};
