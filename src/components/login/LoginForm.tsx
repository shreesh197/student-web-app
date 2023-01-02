import LoginDesign from "./LoginDesign";
import { useContext, useEffect, useState } from "react";
import { getValidationErrMsg, validateEmail } from "../../helper";
import { postLoginData } from "../../services/ApiExecutor";
import { useForm } from "react-hook-form";
import { DeviceContext, RouteStrings } from "app-repo-common-pkg";
import { useRouter } from "next/router";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });
  const { isMobile, isTab }: any = useContext(DeviceContext);

  useEffect(() => {
    setError("email", {
      types: {
        required: "Email is required",
        // minLength: "This is minLength"
      },
    });
  }, [setError]);

  const loginhandler = async () => {
    let body = {
      email: email,
      password: password,
    };
    //login api
    const respone = await postLoginData(body);
    console.log(respone);
    localStorage.setItem("token", respone?.data?.access_token);
    router.push("/student-webapp/profile");
  };

  return (
    <div
      className={`${isMobile ? `${isTab ? "login-box" : ""}` : "login-box"}`}
      style={{ paddingLeft: isMobile && "30px" }}
    >
      <p className="login-head text-center">Students Login</p>
      <p className="login-welcome-text mb-4 text-center">
        Hey, Enter your detail to get signin to your account
      </p>
      <br />
      <form onSubmit={handleSubmit(loginhandler)}>
        <LoginDesign
          hasAdditionalChildren={true}
          additionalChildren={
            <img src={"/icons/email-icon.svg"} alt="email" height={20} />
          }
          children={
            <>
              <input
                type="email"
                value={email}
                className={`login-input ${
                  errors.email?.type !== "required"
                    ? `${
                        email.length > 0 && validateEmail(email)
                          ? "no-validation-error"
                          : ""
                      }`
                    : `validation-error`
                }`}
                placeholder={
                  errors.email?.type !== "required"
                    ? "Email address"
                    : getValidationErrMsg("Email")
                }
                {...register("email", { required: true })}
                onChange={(e) => setEmail(e.target.value)}
              />
            </>
          }
          margin={false}
          isMobile={isMobile}
        />

        <LoginDesign
          hasAdditionalChildren={true}
          additionalChildren={
            <img src={"/icons/password-icon.svg"} alt="password" height={20} />
          }
          children={
            <>
              <input
                type="password"
                value={password}
                className={`login-input ${
                  errors.password?.type !== "required"
                    ? `${password.length > 0 ? "no-validation-error" : ""}`
                    : "validation-error"
                }`}
                placeholder={
                  errors.password?.type !== "required"
                    ? `Password`
                    : getValidationErrMsg("Password")
                }
                {...register("password", { required: true })}
                onChange={(e) => setPassword(e.target.value)}
              />
            </>
          }
          margin={true}
          isMobile={isMobile}
        />

        <LoginDesign
          hasAdditionalChildren={false}
          additionalChildren={<></>}
          children={
            <p className="login-assist-text mb-0 text-start">
              Having trouble in Sign in?
            </p>
          }
          margin={false}
          isMobile={isMobile}
        />

        <LoginDesign
          hasAdditionalChildren={false}
          additionalChildren={<></>}
          children={
            <button type="submit" className="login-submit">
              Login
            </button>
          }
          margin={false}
          isMobile={isMobile}
        />
      </form>
    </div>
  );
};

export default LoginForm;
