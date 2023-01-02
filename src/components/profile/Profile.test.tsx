import { screen, render } from "@testing-library/react";
import Profile from ".";

describe("Profile renders properly", () => {
  test("Profile page renders properly", () => {
    render(<Profile />);
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

    const step1 = screen.getByText(/step 1/i);
    expect(step1).toBeInTheDocument();

    const helpertext = screen.getByText(/enter your basic details/i);
    expect(helpertext).toBeInTheDocument();

    const basicdetails = screen.getByText(/basic details/i);
    expect(basicdetails).toBeInTheDocument();

    const contactDetails = screen.getByText(/contact details/i);
    expect(contactDetails).toBeInTheDocument();

    const address = screen.getByText(/address/i);
    expect(address).toBeInTheDocument();

    const academicDetails = screen.getByText(/academicDetails/i);
    expect(academicDetails).toBeInTheDocument();

    const experience = screen.getByText(/experience/i);
    expect(experience).toBeInTheDocument();

    const socialContact = screen.getByText(/social contact/i);
    expect(socialContact).toBeInTheDocument();

    const consent = screen.getByText(/consent/i);
    expect(consent).toBeInTheDocument();
  });
});
