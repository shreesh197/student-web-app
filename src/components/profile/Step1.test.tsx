import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { stepNumber } from "../../helper/Stepper";
import BasicDetails from "./Step1";

const basicDetails = {
  firstName: "",
  lastName: "",
  dob: "",
  disability: false,
  gender: "",
};

const callback = (value: any) => {
  console.log(`${value}`);
};

// const [currentStep, setCurrentStep] = useState(stepNumber.basicDeteails);
// const [basicDetails, setBasicDetails] =
//   useState<BasicDetailsInterface>(initBasicDetails);
describe("Basic details  renders properly", () => {
  test("basic details renders properly", () => {
    render(
      <BasicDetails
        setCurrentStep={callback}
        basicDetails={basicDetails}
        setBasicDetails={callback}
      />
    );

    const inputfields = screen.getAllByRole("textbox");
    expect(inputfields).toHaveLength(3);

    const firstName = screen.getByText(/first name/i);
    expect(firstName).toBeInTheDocument();

    const lastName = screen.getByText(/last name/i);
    expect(lastName).toBeInTheDocument();

    const dob = screen.getByText(/date of birth/i);
    expect(dob).toBeInTheDocument();

    const disability = screen.getByText(/disability/i);
    expect(disability).toBeInTheDocument;

    const yes = screen.getByText(/yes/i);
    expect(yes).toBeInTheDocument();

    const no = screen.getByText(/no/i);
    expect(no).toBeInTheDocument();

    const gender = screen.getByText(/gender/i);
    expect(gender).toBeInTheDocument();

    const male = screen.getByText("Male");
    expect(male).toBeInTheDocument();

    const female = screen.getByText("Female");
    expect(female).toBeInTheDocument();

    const others = screen.getByText(/others/i);
    expect(others).toBeInTheDocument();

    const nextbutton = screen.getByRole("button", {
      name: /next/i,
    });
    expect(nextbutton).toBeInTheDocument();

    const heading = screen.getByText(/your personal informations/i);
    expect(heading).toBeInTheDocument();
  });

  test("Fields are focussed in the right manner", () => {
    render(
      <BasicDetails
        setCurrentStep={stepNumber.basicDeteails}
        basicDetails={basicDetails}
        setBasicDetails={callback}
      />
    );

    const inputfields = screen.getAllByRole("textbox");
    expect(inputfields).toHaveLength(3);
    const nextbutton = screen.getByRole("button", {
      name: /next/i,
    });
    const radio = screen.getAllByRole("radio");
    expect(radio).toHaveLength(5);
    const yes = screen.getByText("Yes");
    user.tab();
    expect(inputfields[0]).toHaveFocus();
    user.tab();
    expect(inputfields[1]).toHaveFocus();
    user.tab();
    expect(inputfields[2]).toHaveFocus();
    user.tab();
    expect(radio[0]).toHaveFocus();
    user.tab();
    expect(radio[1]).toHaveFocus();
    user.tab();
    expect(radio[2]).toHaveFocus();
    user.tab();
    expect(radio[3]).toHaveFocus();
    user.tab();
    expect(radio[4]).toHaveFocus();
    user.tab();
    expect(nextbutton).toHaveFocus();
  });

  test("Button clicks in the right manner", () => {
    render(
      <BasicDetails
        setCurrentStep={stepNumber.basicDeteails}
        basicDetails={basicDetails}
        setBasicDetails={callback}
      />
    );
    const inputfields = screen.getAllByRole("textbox");
    expect(inputfields).toHaveLength(3);
    const nextbutton = screen.getByRole("button", {
      name: /next/i,
    });
    const radio = screen.getAllByRole("radio");
    const male = screen.getByText("Male");
    const female = screen.getByText("Female");
    const others = screen.getByText(/others/i);
    const gender = screen.getByText(/gender/i);

    user.type(inputfields[0], "Hemanth");
    // expect(inputfields[0]).toHaveValue("Hemanth");
    user.type(inputfields[1], "R");
    // expect(inputfields[1]).toHaveValue("R");
    user.type(inputfields[2], "25/04/1996");
    // expect(inputfields[2]).toHaveValue("25/04/1996");
    user.click(female);
    expect(radio[3]).toHaveFocus();
    user.click(male);
    expect(radio[2]).toHaveFocus();
    user.click(others);
    expect(radio[4]).toHaveFocus();
    user.click(nextbutton);
    expect(gender).toBeInTheDocument();
  });

  test("Button clicks in the right manner with empty fields", () => {
    render(
      <BasicDetails
        setCurrentStep={stepNumber.basicDeteails}
        basicDetails={basicDetails}
        setBasicDetails={callback}
      />
    );
    const inputfields = screen.getAllByRole("textbox");
    expect(inputfields).toHaveLength(3);
    const nextbutton = screen.getByRole("button", {
      name: /next/i,
    });

    user.click(nextbutton);
    // const inputerrorfields = screen.getByPlaceholderText(/required/i);
    // expect(inputerrorfields).toBeInTheDocument();
  });
});
