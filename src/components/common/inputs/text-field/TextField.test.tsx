import { render, screen } from "@testing-library/react";
import TextField from "./TextField";

describe("Common text field renders properly", () => {
  test("text field renders properly", () => {
    render(
      <TextField
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
