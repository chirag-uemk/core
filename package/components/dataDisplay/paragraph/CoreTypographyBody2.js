import React from "react";
import { useState } from "react";
import CoreClasses from "../../../styles/CoreClasses";
import CoreSpan from "../../layouts/CoreSpan";
import CoreLink from "../../navigation/CoreLink";
import CoreTypography from "../CoreTypography";

export default function CoreTypographyBody2(props) {
  const { hideSeeMore = false, limitChars } = props;

  const [seeMore, setSeeMore] = useState(true);
  const toggleSeeMore = () => {
    setSeeMore(!seeMore);
  };

  return limitChars ? (
    <CoreTypography {...props} variant="body2" gutterBottom>
      <CoreSpan>
        {typeof props?.children === "string" && seeMore
          ? limitChars > props?.children?.length
            ? props?.children
            : props?.children.slice(0, limitChars) + "..."
          : props?.children}
      </CoreSpan>
      {!hideSeeMore && limitChars < props?.children?.length && (
        <CoreLink styleClasses={[CoreClasses.MARGIN.ML1]} onClick={toggleSeeMore}>
          {seeMore ? "See more" : "See less"}
        </CoreLink>
      )}
    </CoreTypography>
  ) : (
    <CoreTypography {...props} variant="body2" gutterBottom>
      {props?.children}
    </CoreTypography>
  );
}
