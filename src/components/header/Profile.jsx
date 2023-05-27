import { Typography, Menu, Box, MenuItem } from "@mui/material";
import React, { useState } from "react";

function Profile({ account }) {
  const [open, setsOpen] = useState(false);
  function handlerClick(event) {
    setsOpen(event.currentTarget);
  }
  function handleClose() {
    setsOpen(false);
  }
  return (
    <>
      <Box onClick={handlerClick}>
        <Typography style={{ marginTop: 2 }}>{account}</Typography>
      </Box>
      <Menu
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
}

export default Profile;
