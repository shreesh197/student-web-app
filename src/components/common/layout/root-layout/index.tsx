import { Drawer } from "antd";
import { useState } from "react";
import AppFooter from "../footer";
import AppHeader from "../header";
import SideDrawer from "../side-navigation";

const RootLayout = (props: any) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppHeader setOpen={setOpen} />
      {props.children}
      <AppFooter />
      <SideDrawer open={open} setOpen={setOpen}>
        <p>Some contents...</p>
      </SideDrawer>
    </>
  );
};

export default RootLayout;
