import React from "react";
import CoreFormHelperText from "./CoreFormHelperText";

export default function CoreFormErrorText (props) {
  return (
    <CoreFormHelperText error {...props}>
      {props.children}
    </CoreFormHelperText>
  );
};
