import React, { useState } from "react";
import CoreAppDiv from "./components/layouts/CoreAppDiv";
import AppContainer from "./layout/AppContainer";
import CoreNavigation from "./components/navigation/CoreNavigation";
import CoreProvider from "./store/CoreProvider";
import CoreRoutes from "./CoreRoutes";
import {
  ComponentRegistryContext,
  CoreApplicationContext,
  // CoreDialogContext,
  CoreMenuContext,
  CoreResourceContext,
} from "./config/contextHandler";
import ComponentRegistry from "./config/ComponentRegistry";
// import CoreDialog from "./components/feedback/CoreDialog";

export default function CoreApp({
  reducers,
  storage,
  componentRegistry,
  appStyles,
  customIcons,
  menuRegistry,
  applicationRegistry,
  resourceRegistry,
}) {
  // const [dialog, setDialog] = useState({});
  // const value = { dialog, setDialog };
  return (
    <CoreProvider
      appReducer={reducers}
      storage={storage}
      appStyles={appStyles}
      customIcons={customIcons}
    >
      <CoreApplicationContext.Provider value={applicationRegistry}>
      <ComponentRegistryContext.Provider
        value={{ ...componentRegistry, ...ComponentRegistry }}
      >
        <React.StrictMode>
          <CoreResourceContext.Provider value={resourceRegistry}>
          <CoreMenuContext.Provider  value={menuRegistry}>
            <CoreAppDiv>
              {/* <CoreDialogContext.Provider value={value}> */}
                <CoreNavigation>
                  <AppContainer>
                    <CoreRoutes />
                  </AppContainer>
                </CoreNavigation>
                {/* <CoreDialog /> */}
              {/* </CoreDialogContext.Provider> */}
            </CoreAppDiv>
          </CoreMenuContext.Provider>
          </CoreResourceContext.Provider>
        </React.StrictMode>
      </ComponentRegistryContext.Provider>
      </CoreApplicationContext.Provider>
    </CoreProvider>
  );
}
