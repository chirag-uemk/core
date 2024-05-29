// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { WrappidDataContext } from "@wrappid/styles";

import CoreIconButton from "./CoreIconButton";
import CoreOutlinedButton from "./CoreOutlinedButton";
import CoreClasses from "../../styles/CoreClasses";
import { isJson } from "../../utils/stringUtils";
import { APP_PLATFORM } from "../../utils/themeUtil";
import CoreIcon from "../dataDisplay/CoreIcon";

export default function CoreResponsiveButton(props) {
  let { config } = React.useContext(WrappidDataContext);

  return (
    <>
      {config?.platform !== APP_PLATFORM && (
        <CoreOutlinedButton
          {...props}
          styleClasses={[CoreClasses.DISPLAY.NONE, CoreClasses.DISPLAY.SM.BLOCK]}
        />
      )}

      <CoreIconButton
        styleClasses={[CoreClasses.DISPLAY.BLOCK, CoreClasses.DISPLAY.SM.NONE]}
        title={props?.label || props?.title}
        onClick={props?.onClick || props?.onClick}
      >
        <CoreIcon
          options={
            typeof props?.icon === "object"
              ? props?.icon
              : typeof props?.icon === "string" && isJson(props?.icon)
                ? JSON.parse(props?.icon)
                : { icon: props?.icon }
          }
        />
      </CoreIconButton>
    </>
  );
}
