import { render, screen } from "@testing-library/react";
import LoginDesign from "./LoginDesign";

describe("Login page component tests", () => {
  let container: HTMLDivElement;
  const testToken =
    "eyJraWQiOiI1bkFuelowMUpNWXF3NG1DS0lYRmM5SnUxQ1J2VVdrNHhaekk0cjhjOG5ZPSIsImFsZyI6IlJTMjU2In0";
  localStorage.setItem("access_token", testToken);
  //   let children : {}
  //   let hasAdditionalChildren: true;
  //   let additionalChildren;
  //   let margin:true;
  //   let isMobile:false;

  // beforeEach(() => {
  //   container = document.createElement("div");
  //   document.body.appendChild(container);
  //   ReactDom.render(
  //     <LoginDesign
  //       hasAdditionalChildren={true}
  //       additionalChildren={<img src={""} alt="email" height={20} />}
  //       children={<h4>Hello World</h4>}
  //       margin={false}
  //       isMobile={false}
  //     />,
  //     container
  //   );
  // });

  // afterEach(() => {
  //   document.body.removeChild(container);
  //   container.remove();
  // });

  // it("props renders properly", () => {
  //   const props = container.querySelector("h4");
  //   expect(props).toHaveLength(1);
  // });

  // it("image renders properly", () => {
  //   const image = container.querySelector("img");
  //   expect(image).toHaveLength(1);
  // });

  // it("Storage test", () => {
  //   const token = localStorage.getItem("access_token");
  //   expect(token).toBe(testToken);
  // });

  test("Login Design renders properly ", () => {
    render(
      <LoginDesign
        hasAdditionalChildren={true}
        additionalChildren={<img src={""} alt="email" height={20} />}
        children={<h4>Hello World</h4>}
        margin={false}
        isMobile={false}
      />
    );
    const image = screen.getByAltText("email");
    expect(image).toBeInTheDocument();

    const props = screen.getByRole("heading", { level: 4 });
    expect(props).toBeInTheDocument();

    const token = localStorage.getItem("access_token");
    expect(token).toBe(testToken);
  });

  test("Button renders properly ", () => {
    render(
      <LoginDesign
        hasAdditionalChildren={false}
        additionalChildren={<></>}
        children={
          <button type="submit" className="login-submit">
            Login
          </button>
        }
        margin={false}
        isMobile={false}
      />
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
