import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { useState } from "react";
import { stepNumber } from "../../helper/Stepper";
import ExperienceDetails from "./Step5";

const experienceDetails = {
  companyName: "",
  designation: "",
  startDate: "",
  endDate: "",
};

const callback = (value: any) => {
  console.log(`${value}`);
};

describe("Experience details  renders properly", () => {
  test("Experience details renders properly", () => {
    render(
      <ExperienceDetails
        setCurrentStep={callback}
        experienceDetails={experienceDetails}
        setExperienceDetails={callback}
      />
    );

    const inputfields = screen.getAllByRole("textbox");
    expect(inputfields).toHaveLength(4);

    const companyname = screen.getByText(/company name/i);
    expect(companyname).toBeInTheDocument();

    const designation = screen.getByText(/designation/i);
    expect(designation).toBeInTheDocument();

    const startdate = screen.getByText("Start date");
    expect(startdate).toBeInTheDocument();

    const enddate = screen.getByText("End date");
    expect(enddate).toBeInTheDocument();

    const nextbutton = screen.getByRole("button", {
      name: /next/i,
    });
    expect(nextbutton).toBeInTheDocument();

    const backbutton = screen.getByRole("button", {
      name: /back/i,
    });
    expect(backbutton).toBeInTheDocument();

    const heading = screen.getByText(/experience/i);
    expect(heading).toBeInTheDocument();
  });

  test("Button clicks in the right manner", () => {
    render(
      <ExperienceDetails
        setCurrentStep={callback}
        experienceDetails={experienceDetails}
        setExperienceDetails={callback}
      />
    );
    const inputfields = screen.getAllByRole("textbox");
    expect(inputfields).toHaveLength(4);
    const nextbutton = screen.getByRole("button", {
      name: /next/i,
    });

    user.type(inputfields[0], "hemanth@kodnest.com");
    user.type(inputfields[1], "7026844002");
    user.type(inputfields[2], "7026844002");
    user.type(inputfields[3], "7026844002");
    user.click(nextbutton);
  });
  test("Back button clicks properlu", () => {
    render(
      <ExperienceDetails
        setCurrentStep={callback}
        experienceDetails={experienceDetails}
        setExperienceDetails={callback}
      />
    );
    const backbutton = screen.getByRole("button", {
      name: /back/i,
    });
    user.click(backbutton);
  });
});
