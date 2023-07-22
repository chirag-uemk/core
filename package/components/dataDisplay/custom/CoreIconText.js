import React from "react";
import CoreClasses from "../../../styles/CoreClasses";
import CoreIcon from "../CoreIcon";
import CoreTypographyCaption from "../paragraph/CoreTypographyCaption";
import CoreBox from "../../layouts/CoreBox";
import CoreLink from "../../navigation/CoreLink";

export default function CoreIconText(props) {
  const { icon, text, type, link = false, href } = props;

  return (
    (link === true)
    ?
      <CoreBox styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_START]}>
        <CoreIcon styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY]} type={type}>{icon}</CoreIcon>

        {/* @todo need to change the "style" below */}
        <CoreLink href={href || "#"} style={{ fontSize: 12 }} styleClasses={[CoreClasses.MARGIN.ML1]}>{text}</CoreLink>
      </CoreBox>
    :
    <CoreTypographyCaption styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_START]}>
      <CoreIcon styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY]} type={type}>{icon}</CoreIcon>
      
      <CoreTypographyCaption styleClasses={[CoreClasses.MARGIN.ML1, CoreClasses.COLOR.TEXT_SECONDARY_DARK]}>{text}</CoreTypographyCaption>
    </CoreTypographyCaption>
  );
}