import { AppDesign } from "app-repo-common-pkg";
import Login from "../../../components/login";

const LoginPage = () => {
  return (
    <div className="position-relative height-100-percent width-100-percent">
      <div className="container-fluid main m-0 p-0">
        {/* <AppDesign> */}
        <Login />
        {/* </AppDesign> */}
      </div>
    </div>
  );
};
export default LoginPage;
