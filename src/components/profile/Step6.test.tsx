import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import SocialContactDetails from "./Step6";

const socialContactDetails = {
  skypeID: "",
  instagramId: "",
  zoomId: "",
  linkedinId: "",
  faceBookId: "",
  behanceId: "",
};

const callback = (value: any) => {
  console.log(`${value}`);
};

describe("Social contact details  renders properly", () => {
  test("Social contact details renders properly", () => {
    render(
      <SocialContactDetails
        setCurrentStep={callback}
        socialContactDetails={socialContactDetails}
        setSocialContactDetails={callback}
      />
    );

    const inputfields = screen.getAllByRole("textbox");
    expect(inputfields).toHaveLength(6);

    const skypeid = screen.getByText(/skype id/i);
    expect(skypeid).toBeInTheDocument();

    const instagramid = screen.getByText(/instagram id/i);
    expect(instagramid).toBeInTheDocument();

    const zoomid = screen.getByText(/zoom id/i);
    expect(zoomid).toBeInTheDocument();

    const linkdinid = screen.getByText(/linkdin id/i);
    expect(linkdinid).toBeInTheDocument();

    const facebookid = screen.getByText(/facebook id/i);
    expect(facebookid).toBeInTheDocument();

    const behanceid = screen.getByText(/behance id/i);
    expect(behanceid).toBeInTheDocument();

    const nextbutton = screen.getByRole("button", {
      name: /next/i,
    });
    expect(nextbutton).toBeInTheDocument();

    const backbutton = screen.getByRole("button", {
      name: /back/i,
    });
    expect(backbutton).toBeInTheDocument();

    const heading = screen.getByText(/social contact/i);
    expect(heading).toBeInTheDocument();
  });

  test("Button clicks in the right manner", () => {
    render(
      <SocialContactDetails
        setCurrentStep={callback}
        socialContactDetails={socialContactDetails}
        setSocialContactDetails={callback}
      />
    );
    const inputfields = screen.getAllByRole("textbox");
    expect(inputfields).toHaveLength(6);
    const nextbutton = screen.getByRole("button", {
      name: /next/i,
    });

    user.type(inputfields[0], "hemanth@kodnest.com");
    user.type(inputfields[1], "7026844002");
    user.type(inputfields[2], "7026844002");
    user.type(inputfields[3], "7026844002");
    user.type(inputfields[4], "7026844002");
    user.type(inputfields[5], "7026844002");
    user.click(nextbutton);
  });
  test("Back button clicks properly", () => {
    render(
      <SocialContactDetails
        setCurrentStep={callback}
        socialContactDetails={socialContactDetails}
        setSocialContactDetails={callback}
      />
    );
    const backbutton = screen.getByRole("button", {
      name: /back/i,
    });
    user.click(backbutton);
  });
});
