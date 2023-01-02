import React, { useContext } from "react";
import LoginHeader from "./LoginHeader";
import LoginForm from "./LoginForm";
// import kodlogo from "../../assets/logos/kodnest-logo.png";
import { DeviceContext } from "app-repo-common-pkg";

const Login = () => {
  const { isMobile, isTab, screenWidth }: any = useContext(DeviceContext);
  console.log(`isMobile ====> ${isMobile}, ${screenWidth}`);
  return (
    <div className="row Login-area1 m-0 p-0">
      {!isMobile && <LoginHeader />}
      <div className="col-12 Login-main-area1 m-0">
        <div className={`row customRow`}>
          {!isMobile && <div className="col-4"></div>}
          {(isMobile || isTab) && (
            <div className="row col-12 custom-logo-row">
              <img
                className="kodLogo mobile-logo"
                src={""}
                alt="appLogo"
                style={{ width: isTab ? "35%" : "50%" }}
              />
            </div>
          )}
          <div
            className={`${isMobile ? "row col-12" : "col-4 my-auto"}`}
            style={isMobile ? { paddingRight: 0, width: "100%" } : {}}
          >
            <LoginForm />
          </div>
          {!isMobile && <div className="col-4"></div>}
        </div>
      </div>
    </div>
  );
};

export default Login;
