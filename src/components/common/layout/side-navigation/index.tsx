import { Drawer } from "antd";

const SideDrawer = (props) => {
  return (
    <Drawer
      // title="Basic Drawer"
      placement="left"
      closable={false}
      onClose={() => props.setOpen(false)}
      open={props.open}
      getContainer={false}
    >
      {props.children}
    </Drawer>
  );
};

export default SideDrawer;
