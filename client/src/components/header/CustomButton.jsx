import { Box, Button, Typography, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React, { useContext, useState } from "react";
import LoginDialog from "../Login/LoginDialog";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";

// custom CSS on MUI Component
const Wrapper = styled(Box)(({theme}) => ({
  display: "flex",
  margin: "0 3% 0 auto",
  "& >*": {
    marginRight: "40px",
    fontSize: "16px",
    alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const Container = styled(Box)(({ theme }) => ({
  display: "flex",

  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const LoginButton = styled(Button)`
  color: #2874f0;
  background-color: #ffffff;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;
`;

function CustomButton() {
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(DataContext);

  function clickHandler() {
    setOpen(true);
  }

  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <LoginButton variant="contained" onClick={() => clickHandler()}>
          Login
        </LoginButton>
      )}

      <Typography style={{ marginTop: 3, width: 135 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>
      <Container>
        <ShoppingCartIcon />
        <Typography>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
}

export default CustomButton;
