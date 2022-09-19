import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { useDispatch } from "react-redux";
import { formToggled } from "../redux/reducers/post";

const ButtonAppBar = () => {
  const dispatch = useDispatch();
  const handleIconClick = () => {
    dispatch(formToggled({ flag: true }));
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Social Feed
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleIconClick}
          >
            <RateReviewIcon />
          </IconButton>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ButtonAppBar;
