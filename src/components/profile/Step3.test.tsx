import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { useState } from "react";
import { stepNumber } from "../../helper/Stepper";
import AddressDetails from "./Step3";

const addressDetails = {
  city: "",
  state: "",
  country: "",
  pinCode: "",
  permanentAddress: "",
};

const callback = (value: any) => {
  console.log(`${value}`);
};

describe("Address details  renders properly", () => {
  test("Address details renders properly", () => {
    render(
      <AddressDetails
        setCurrentStep={callback}
        addressDetails={addressDetails}
        setAddressDetails={callback}
      />
    );
    const inputfields = screen.getAllByRole("textbox");
    expect(inputfields).toHaveLength(5);

    const textareafield = screen.getByText(/permanent address/i);
    expect(textareafield).toBeInTheDocument();

    const city = screen.getByText(/city/i);
    expect(city).toBeInTheDocument();

    const state = screen.getByText(/state/i);
    expect(state).toBeInTheDocument();

    const country = screen.getByText(/country/i);
    expect(country).toBeInTheDocument();

    const pincode = screen.getByText(/pincode/i);
    expect(pincode).toBeInTheDocument();

    const nextbutton = screen.getByRole("button", {
      name: /next/i,
    });
    expect(nextbutton).toBeInTheDocument();

    const backbutton = screen.getByRole("button", {
      name: /back/i,
    });
    expect(backbutton).toBeInTheDocument();

    const heading = screen.getByText(/address details/i);
    expect(heading).toBeInTheDocument();
  });

  // test("Fields are focussed in the right manner", () => {
  //   render(
  //     <AddressDetails
  //       setCurrentStep={stepNumber.address}
  //       addressDetails={addressDetails}
  //       setAddressDetails={callback}
  //     />
  //   );

  //   const inputfields = screen.getAllByRole("textbox");
  //   expect(inputfields).toHaveLength(5);
  //   const nextbutton = screen.getByRole("button", {
  //     name: /next/i,
  //   });
  //   const backbutton = screen.getByRole("button", {
  //     name: /back/i,
  //   });

  //   user.tab();
  //   expect(inputfields[0]).toHaveFocus();
  //   user.tab();
  //   expect(inputfields[1]).toHaveFocus();
  //   user.tab();
  //   expect(inputfields[2]).toHaveFocus();
  //   user.tab();
  //   expect(inputfields[3]).toHaveFocus();
  //   user.tab();
  //   expect(inputfields[4]).toHaveFocus();
  //   user.tab();
  //   expect(backbutton).toHaveFocus();
  //   user.tab();
  //   expect(nextbutton).toHaveFocus();
  // });

  test("Button clicks in the right manner", () => {
    render(
      <AddressDetails
        setCurrentStep={callback}
        addressDetails={addressDetails}
        setAddressDetails={callback}
      />
    );
    const inputfields = screen.getAllByRole("textbox");
    expect(inputfields).toHaveLength(5);
    const nextbutton = screen.getByRole("button", {
      name: /next/i,
    });
    const backbutton = screen.getByRole("button", {
      name: /back/i,
    });

    user.type(inputfields[0], "Bengaluru");
    user.type(inputfields[1], "Karnataka");
    user.type(inputfields[2], "India");
    user.type(inputfields[3], "561203");
    user.type(inputfields[4], "DBpur court road");
    user.click(nextbutton);
  });

  test("Back button clicks properlu", () => {
    render(
      <AddressDetails
        setCurrentStep={callback}
        addressDetails={addressDetails}
        setAddressDetails={callback}
      />
    );
    const backbutton = screen.getByRole("button", {
      name: /back/i,
    });
    user.click(backbutton);
  });
});
