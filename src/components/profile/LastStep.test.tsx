import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import ConsentDetails from "./LastStep";

const consentDetails = {
  consent: "",
};

const callback = (value: any) => {
  console.log(`${value}`);
};

describe("Consent details  renders properly", () => {
  test("Consent details renders properly", () => {
    render(
      <ConsentDetails
        setCurrentStep={callback}
        consentDetails={consentDetails}
        setConsentDetails={callback}
      />
    );

    const radio = screen.getAllByRole("radio");
    expect(radio).toHaveLength(2);

    const question = screen.getByText(/Do you have a laptop?/i);
    expect(question).toBeInTheDocument();

    const yes = screen.getByText(/yes/i);
    expect(yes).toBeInTheDocument();

    const no = screen.getByText(/no/i);
    expect(no).toBeInTheDocument();

    const submitbutton = screen.getByRole("button", {
      name: /submit/i,
    });
    expect(submitbutton).toBeInTheDocument();

    const backbutton = screen.getByRole("button", {
      name: /back/i,
    });
    expect(backbutton).toBeInTheDocument();

    const heading = screen.getByText(/consent/i);
    expect(heading).toBeInTheDocument();
  });

  test("Button clicks in the right manner", () => {
    render(
      <ConsentDetails
        setCurrentStep={callback}
        consentDetails={consentDetails}
        setConsentDetails={callback}
      />
    );
    const radio = screen.getAllByRole("radio");
    const submitbutton = screen.getByRole("button", {
      name: /submit/i,
    });
    user.click(radio[0]);
    expect(radio[0]).toHaveFocus();
    user.click(submitbutton);
  });

  test("Back button clicks properly", () => {
    render(
      <ConsentDetails
        setCurrentStep={callback}
        consentDetails={consentDetails}
        setConsentDetails={callback}
      />
    );
    const backbutton = screen.getByRole("button", {
      name: /back/i,
    });
    user.click(backbutton);
  });

  // test("Button clicks in the right manner with no input", () => {
  //   render(
  //     <ConsentDetails
  //       setCurrentStep={callback}
  //       consentDetails={consentDetails}
  //       setConsentDetails={callback}
  //     />
  //   );
  //   const submitbutton = screen.getByRole("button", {
  //     name: /submit/i,
  //   });
  //   user.click(submitbutton);

  // });
});
