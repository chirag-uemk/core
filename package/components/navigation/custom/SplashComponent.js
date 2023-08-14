// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeDomNavigate, nativeUseLocation } from "@wrappid/styled-components";
import { useSelector } from "react-redux";

import { urls } from "../../../config/constants";
import CoreClasses from "../../../styles/CoreClasses";
import CoreComponent from "../../CoreComponent";
import CoreTypographyBody1 from "../../dataDisplay/paragraph/CoreTypographyBody1";
import CoreBox from "../../layouts/CoreBox";
import CoreGrid from "../../layouts/CoreGrid";

export default function SplashComponent() {
  const _routes = useSelector(state => state.route.routes);
  const auth = useSelector(state => state.auth);
  let location = nativeUseLocation();

  const checkAppLoadDependencies = () => {
    if (_routes && Array.isArray(_routes) && _routes?.length > 0) {
      if (auth?.uid) {
        if (_routes.filter(route => route.authRequired)?.length > 0) {
          return { message: "Navigating...", success: true };
        } else {
          return { message: "Loading authenticated routes...", success: false };
        }
      } else return { message: "Navigating...", success: true };
    } else {
      return { message: "Loading routes...", success: false };
    }
  };

  React.useEffect(() => {
    /**
     * @todo
     *
     * must provide a delay here min 1000ms
     */
  }, []);

  if (checkAppLoadDependencies()?.success) {
    if (auth?.uid) {
      if (location?.state?.recalledPath) {
        // -- console.log("&&&&&&&&&&&&&&&&&&&\n GING TO RECALL\n&&&&&&&&&&&&&&&&&&");
        return <NativeDomNavigate to={location?.state?.recalledPath} />;
      } else {
        // -- console.log("&&&&&&&&&&&&&&&&&&&\n GING TO DASHBOARD\n&&&&&&&&&&&&&&&&&&");
        return <NativeDomNavigate to={"/" + urls.DASHBOARD} />;
      }
    } else if (
      location?.state?.sessionExpired &&
      (location.pathname !== "/" + urls.PASSWORD_ROUTE ||
        location.pathname !== "/")
    ) {
      // -- console.log("&&&&&&&&&&&&&&&&&&&\n GING TO PASSWORD\n&&&&&&&&&&&&&&&&&&");
      return <NativeDomNavigate to={"/" + urls.PASSWORD_ROUTE} />;
    } else if (
      location.pathname !== "/" + urls.LOGIN_ROUTE ||
      location.pathname !== "/"
    ) {
      // -- console.log("&&&&&&&&&&&&&&&&&&&\n GING TO CHEK USER EXIST\n&&&&&&&&&&&&&&&&&&");
      return <NativeDomNavigate to={"/" + urls.LOGIN_ROUTE} />;
    }
  }

  return (
    <CoreGrid
      styleClasses={[
        CoreClasses.HEIGHT.VH_100,
        CoreClasses.WIDTH.VW_100,
        CoreClasses.WIDTH.W_100,
        CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
        CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
      ]}>
      <CoreBox
        gridProps={{ gridSize: 6 }}
        styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>
        <CoreBox styleClasses={[CoreClasses?.MARGIN?.MB1]}>
          <CoreComponent componentName={"AppLogoGif"} />
        </CoreBox>

        <CoreTypographyBody1
          styleClasses={!auth?.uid ? [CoreClasses?.COLOR?.TEXT_WHITE] : []}>
          {checkAppLoadDependencies()?.message}
        </CoreTypographyBody1>
      </CoreBox>
    </CoreGrid>
  );
}
