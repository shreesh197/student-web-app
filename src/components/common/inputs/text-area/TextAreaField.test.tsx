import { render, screen } from "@testing-library/react";
import TextAreaField from "./TextAreaField";
import TextField from "../text-field/TextField";

describe("Common text area field renders properly", () => {
  test("text area field renders properly", () => {
    render(
      <TextAreaField
        value={""}
        labelText="First Name"
        placeholder={""}
        additionalClassName={""}
        onChange={null}
      />
    );

    const labeltext = screen.getByText(/first name/i);
    expect(labeltext).toBeInTheDocument;

    const inputfield = screen.getByRole("textbox");
    expect(inputfield).toBeInTheDocument;
  });
});
