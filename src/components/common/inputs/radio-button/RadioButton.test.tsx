import { render, screen } from "@testing-library/react";
import RadioButton from "./RadioButton";

describe("Common Radio Button renders properly", () => {
  test("Radio Button renders properly", () => {
    render(
      <RadioButton
        key={"yes"}
        checked={true}
        onChange={null}
        value={"yes"}
        customClass={""}
      />
    );

    const radioLabel = screen.getByText(/yes/i);
    expect(radioLabel).toBeInTheDocument;
  });
});
