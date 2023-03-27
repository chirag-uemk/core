import React from "react";
import CoreFormControlLabel from "../../forms/CoreFormGroupLabel";
import CoreCheckbox from "../CoreCheckbox";

export default function CoreFormLabelCheckbox(props) {
  console.log("props", props);
  return (
    <CoreFormControlLabel
      id={props.id}
      checked={props?.formik?.values[props?.id]}
      control={
        <CoreCheckbox
          id={props.id}
          checked={props?.formik?.values[props?.id]}
          styleClasses={[...(props?.styleClasses || [])]}
          formik={props?.formik}
        />
      }
      label={props.label}
      labelPlacement={props.labelPlacement}
    />
  );
}
