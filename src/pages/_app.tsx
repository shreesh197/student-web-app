"use client";

import { DeviceProvider } from "app-repo-common-pkg";
import React, { useEffect, useState } from "react";

//styles
import "../styles/globals.css";
import "./student-webapp/login/index.css";
import "./student-webapp/profile/index.css";
import "./student-webapp/assessment/index.css";
import { Provider } from "react-redux";
import { store } from "../redux/Store";

export default function MyApp({ Component, pageProps }: any) {
  const [isDomRendered, setIsDomRendered] = useState(false);
  useEffect(() => {
    setIsDomRendered(true);
  }, []);

  if (!isDomRendered) {
    return "Loading....";
  }

  return typeof window !== "undefined" ? (
    <Provider store={store}>
      <DeviceProvider>
        <Component {...pageProps} />
      </DeviceProvider>
    </Provider>
  ) : (
    "Loading...."
  );
}
