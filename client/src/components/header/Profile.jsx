import styled from "@emotion/styled";
import { Typography, Menu, Box, MenuItem } from "@mui/material";
import React, { useState } from "react";

const Component = styled(Menu)`
  margin-top:5px;
`

function Profile({ account,setAccount }) {
  const [open, setsOpen] = useState(false);
  function handlerClick(event) {
    setsOpen(event.currentTarget);
  }
  function handleClose() {
    setsOpen(false);
  }
  function logout(){
    setAccount('');
  }
  return (
    <>
      <Box onClick={handlerClick}>
        <Typography style={{ marginTop: 2 }}>{account}</Typography>
      </Box>
      <Component
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={() => {handleClose(); logout();}}>Logout</MenuItem>
      </Component>
    </>
  );
}

export default Profile;
