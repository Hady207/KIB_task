import React from "react";
import Drawer from "@mui/material/Drawer";
import { useSelector, useDispatch } from "react-redux";
import { formToggled, clearSelection } from "../redux/reducers/post";

const SideDrawer = ({ children }) => {
  const { formFlag } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const handleClosingToggle = () => {
    dispatch(clearSelection());
    dispatch(formToggled({ flag: false }));
  };

  return (
    <Drawer
      anchor="right"
      open={formFlag}
      onClose={() => handleClosingToggle()}
    >
      {children}
    </Drawer>
  );
};

export default SideDrawer;
