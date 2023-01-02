import React from "react";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Login from "../../../components/login";

test("App renders properly", () => {
  render(<Login />);
  const kodlogo = screen.getAllByAltText("appLogo");
  expect(kodlogo).toHaveLength(1);

  const loginheading = screen.getByText("Students Login");
  expect(loginheading).toBeInTheDocument();

  const welcometext = screen.getByText(
    "Hey, Enter your detail to get signin to your account"
  );
  expect(welcometext).toBeInTheDocument();

  const imageEmail = screen.getByAltText("email");
  expect(imageEmail).toBeInTheDocument();

  const emailfield = screen.getByPlaceholderText("Email address");
  expect(emailfield).toBeInTheDocument();

  const imagePassword = screen.getByAltText("password");
  expect(imagePassword).toBeInTheDocument();

  const passwordfield = screen.getByPlaceholderText("Password");
  expect(passwordfield).toBeInTheDocument();

  const helpertext = screen.getByText("Having trouble in Sign in?");
  expect(helpertext).toBeInTheDocument();

  const button = screen.getByRole("button", { name: "Login" });
  expect(button).toBeInTheDocument();
});

test("button click renders properly", () => {
  render(<Login />);
  const emailfield = screen.getByPlaceholderText("Email address");
  const passwordfield = screen.getByPlaceholderText("Password");
  const button = screen.getByRole("button", { name: "Login" });
  user.type(emailfield, "hemanth+4@kodnest.com");
  user.type(passwordfield, "hemanth00&");
  user.click(button);
});

test("elements are focussed in the right manner", () => {
  render(<Login />);
  const emailfield = screen.getByPlaceholderText("Email address");
  const passwordfield = screen.getByPlaceholderText("Password");
  const button = screen.getByRole("button", { name: "Login" });
  user.tab();
  expect(emailfield).toHaveFocus();
  user.tab();
  expect(passwordfield).toHaveFocus();
  user.tab();
  expect(button).toHaveFocus();
});
