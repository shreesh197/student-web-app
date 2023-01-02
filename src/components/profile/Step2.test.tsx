import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { useState } from "react";
import { stepNumber } from "../../helper/Stepper";
import ContactDetails from "./Step2";

const contactDetails = {
  email: "",
  whatsAppNo: "",
  number: "",
  number2: "",
  altName: "",
  altnumber: "",
  altemail: "",
  relation: "",
};

const callback = (value: any) => {
  console.log(`${value}`);
};

describe("Contact details  renders properly", () => {
  test("contact details renders properly", () => {
    render(
      <ContactDetails
        setCurrentStep={callback}
        contactDetails={contactDetails}
        setContactDetails={callback}
      />
    );

    const inputfields = screen.getAllByRole("textbox");
    expect(inputfields).toHaveLength(8);

    const email = screen.getAllByText(/Email Address/i);
    expect(email).toHaveLength(2);

    const whatsAppNo = screen.getByText(/Whatsapp number/i);
    expect(whatsAppNo).toBeInTheDocument();

    const number = screen.getAllByText("+91");
    expect(number).toHaveLength(2);

    const number2 = screen.getByText("Alternate number");
    expect(number2).toBeInTheDocument();

    const altName = screen.getByText("Alternate contact name");
    expect(altName).toBeInTheDocument();

    const relation = screen.getByText("Relation with person");
    expect(relation).toBeInTheDocument();

    const heading2 = screen.getByText("Alternate contact");
    expect(heading2).toBeInTheDocument();

    const nextbutton = screen.getByRole("button", {
      name: /next/i,
    });
    expect(nextbutton).toBeInTheDocument();

    const backbutton = screen.getByRole("button", {
      name: /back/i,
    });
    expect(backbutton).toBeInTheDocument();

    const heading = screen.getByText(/contact details/i);
    expect(heading).toBeInTheDocument();
  });

  test("Fields are focussed in the right manner", () => {
    render(
      <ContactDetails
        setCurrentStep={callback}
        contactDetails={contactDetails}
        setContactDetails={callback}
      />
    );

    const inputfields = screen.getAllByRole("textbox");
    expect(inputfields).toHaveLength(8);
    const nextbutton = screen.getByRole("button", {
      name: /next/i,
    });
    const backbutton = screen.getByRole("button", {
      name: /back/i,
    });
    user.tab();
    expect(inputfields[0]).toHaveFocus();
    user.tab();
    expect(inputfields[1]).toHaveFocus();
    user.tab();
    expect(inputfields[2]).toHaveFocus();
    user.tab();
    expect(inputfields[3]).toHaveFocus();
    user.tab();
    expect(inputfields[4]).toHaveFocus();
    user.tab();
    expect(inputfields[5]).toHaveFocus();
    user.tab();
    expect(inputfields[6]).toHaveFocus();
    user.tab();
    expect(inputfields[7]).toHaveFocus();
    user.tab();
    expect(backbutton).toHaveFocus();
    user.tab();
    expect(nextbutton).toHaveFocus();
  });

  test("Button clicks in the right manner", () => {
    render(
      <ContactDetails
        setCurrentStep={callback}
        contactDetails={contactDetails}
        setContactDetails={callback}
      />
    );
    const inputfields = screen.getAllByRole("textbox");
    expect(inputfields).toHaveLength(8);
    const nextbutton = screen.getByRole("button", {
      name: /next/i,
    });
    const backbutton = screen.getByRole("button", {
      name: /back/i,
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
      <ContactDetails
        setCurrentStep={callback}
        contactDetails={contactDetails}
        setContactDetails={callback}
      />
    );
    const backbutton = screen.getByRole("button", {
      name: /back/i,
    });
    user.click(backbutton);
  });
});
