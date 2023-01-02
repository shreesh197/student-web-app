import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { useState } from "react";
import { stepNumber } from "../../helper/Stepper";
import AcademicDetails from "./Step4";

const academicDetails = {
  academicLevel: "",
  percentage: "",
  collegeName: "",
  CGPA: "",
  rollNo: "",
  passOutYear: "",
  course: "",
  collegeLocation: "",
};

const callback = (value: any) => {
  console.log(`${value}`);
};

describe("Academic details  renders properly", () => {
  test("Academic details renders properly", () => {
    render(
      <AcademicDetails
        setCurrentStep={callback}
        academicDetails={academicDetails}
        setAcademicDetails={callback}
      />
    );
    const inputfields = screen.getAllByRole("textbox");
    expect(inputfields).toHaveLength(8);

    const academiclevel = screen.getByText(/academic level/i);
    expect(academiclevel).toBeInTheDocument();

    const percentage = screen.getByText(/percentage/i);
    expect(percentage).toBeInTheDocument();

    const collegename = screen.getByText("College name");
    expect(collegename).toBeInTheDocument();

    const cgpa = screen.getByText(/cgpa/i);
    expect(cgpa).toBeInTheDocument();

    const rollno = screen.getByText(/roll no/i);
    expect(rollno).toBeInTheDocument();

    const passoutyear = screen.getByText(/passout year/i);
    expect(passoutyear).toBeInTheDocument();

    const course = screen.getByText(/course/i);
    expect(course).toBeInTheDocument();

    const colleglocation = screen.getByText("College location");
    expect(colleglocation).toBeInTheDocument();

    const nextbutton = screen.getByRole("button", {
      name: /next/i,
    });
    expect(nextbutton).toBeInTheDocument();

    const backbutton = screen.getByRole("button", {
      name: /back/i,
    });
    expect(backbutton).toBeInTheDocument();

    const heading = screen.getByText(/academic details/i);
    expect(heading).toBeInTheDocument();
  });

  //   test("Fields are focussed in the right manner", () => {
  //     render(
  //       <ContactDetails
  //         setCurrentStep={setCurrentStep}
  //         contactDetails={contactDetails}
  //         setContactDetails={setcontactDetails}
  //       />
  //     );

  //     const inputfields = screen.getAllByRole("textfield");
  //     expect(inputfields).toHaveLength(3);
  //     const nextbutton = screen.getByRole("button", {
  //       name: /next/i,
  //     });
  //     user.tab();
  //     expect(inputfields[0]).toHaveFocus();
  //     user.tab();
  //     expect(inputfields[1]).toHaveFocus();
  //     user.tab();
  //     expect(inputfields[2]).toHaveFocus();
  //     user.tab();
  //     expect(nextbutton).toHaveFocus();
  //   });

  test("Button clicks in the right manner", () => {
    render(
      <AcademicDetails
        setCurrentStep={callback}
        academicDetails={academicDetails}
        setAcademicDetails={callback}
      />
    );
    const inputfields = screen.getAllByRole("textbox");
    expect(inputfields).toHaveLength(8);
    const nextbutton = screen.getByRole("button", {
      name: /next/i,
    });

    user.type(inputfields[0], "hemanth@kodnest.com");
    user.type(inputfields[1], "7026844002");
    user.type(inputfields[2], "7026844002");
    user.type(inputfields[3], "7026844002");
    user.type(inputfields[4], "Hemanth");
    user.type(inputfields[5], "7026844002");
    user.type(inputfields[6], "hemanth@kodnest.com");
    user.type(inputfields[7], "Friend");
    user.click(nextbutton);
  });

  test("Back button clicks properlu", () => {
    render(
      <AcademicDetails
        setCurrentStep={callback}
        academicDetails={academicDetails}
        setAcademicDetails={callback}
      />
    );
    const backbutton = screen.getByRole("button", {
      name: /back/i,
    });
    user.click(backbutton);
  });
});
