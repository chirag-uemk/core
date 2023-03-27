import * as React from "react";
import { useNavigate } from "react-router-dom";
import CoreResponsiveButton from "../inputs/custom/CoreResponsiveButton";

export default function CoreTableAction(props) {
  const navigation = useNavigate();
  const { tableUUID, actions = [], rowData = {} } = props;
  return (
    <>
      {actions &&
        Array.isArray(actions) &&
        actions.length > 0 &&
        actions.map((action) =>
          action.hide && action.hide(rowData) ? null : (
            <CoreResponsiveButton
              key={`${tableUUID}-${action?.id}`}
              label={action?.label}
              icon={action?.icon}
              disabled={action.disabled}
              OnClick={() => {
                if (action?.action) action?.action(rowData); // TODO: support local action
                if (action.route) {
                  navigation(action.route, rowData);
                }
              }}
            />
          ),
        )}
    </>
  );
}
