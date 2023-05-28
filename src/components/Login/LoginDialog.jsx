import styled from "@emotion/styled";
import { Box, Dialog, TextField, Typography, Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { UserSignUp, UserLogin } from "../../services/api";
import { DataContext } from "../../context/DataProvider";

// custom css into MUI Component
const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
`;
const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    no-repeat center 85%;
  height: 86.7%;
  width: 35%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: #fff;
    font-weight: 600;
  }
`;
const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > Button,
  & > p {
    margin-top: 20px;
  }
`;
const LoginButton = styled(Button)`
  font-weight: 600;
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;
const OTPButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 20%);
`;
const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;
const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;
const OTPButton2 = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 20%);
  font-weight: 600;
`;
const Error = styled(Typography)`
  font-size:10px;
  color:#ff6161;
  line-height:0;
  margin-top:10px;
  font-weight:600;
`
const accountView = {
  login: {
    view: `login`,
  },
  signup: {
    view: `signup`,
  },
};
const loginValue={
    userName:'',
    userPassword:''
}

function LoginDialog({ open, setOpen }) {
  const [account, changeAccount] = useState(accountView.login);
  const [signUp, setSignUp] = useState({ userNumber: "", userName:"",userPassword:"" });
  const {setAccount} = useContext(DataContext);
  const [login, setLogin] = useState(loginValue);
  const [error, setError] = useState(false);
  function toogleAccount() {
    changeAccount(accountView.signup);
  }
  function handlerClose() {
    setOpen(false);
    changeAccount(accountView.login);
    setError(false);
  }
  function onInputChange(e) {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
    console.log(signUp);
  }
  async function singUpUser() {
    let response = await UserSignUp(signUp);
    if(!response) return;
    handlerClose();
    setAccount(signUp.userName);
  }
  function onValueChange(e){
    setLogin({...login, [e.target.name]:e.target.value});
  }
  async function loginUser(){
    let res = await UserLogin(login);
    if(res.status === 200){
      handlerClose();
      setAccount(login.userName);
    }else{
      setError(true);
    }
  }
  return (
    <Dialog
      open={open}
      onClose={handlerClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          {account.view == `login` ? (
            <Image>
              <Typography variant="h5">Login</Typography>
              <Typography style={{ marginTop: 20 }}>
                Get access to your Order, Wishlist and Recommendations
              </Typography>
            </Image>
          ) : (
            <Image>
              <Typography variant="h5">Looks like you're new here!</Typography>
              <Typography style={{ marginTop: 20 }}>
                Sign up with your mobile number to get started
              </Typography>
            </Image>
          )}
          {account.view === `login` ? (
            <Wrapper>
              <TextField
                variant="standard"
                label="Enter username"
                name="userName"
                onChange={(e) => onValueChange(e)}
              />
              {error && <Error>Please enter valid username or password</Error>}
              <TextField
                variant="standard"
                type="password"
                label="Enter Password"
                name="userPassword"
                onChange={(e) => onValueChange(e)}
              />
              <Text>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Text>
              <LoginButton onClick={loginUser}>Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <OTPButton>Request OTP</OTPButton>
              <CreateAccount onClick={toogleAccount}>
                New to Flipkart? Create an account
              </CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                variant="standard"
                label="Mobile Number"
                type="tel"
                name="userNumber"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                variant="standard"
                label="User Name"
                type="text"
                name="userName"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                variant="standard"
                label="Password"
                type="password"
                name="userPassword"
                onChange={(e) => onInputChange(e)}
              />
              <Typography>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Typography>
              <LoginButton onClick={singUpUser}>Continue</LoginButton>
              <OTPButton2 onClick={() => changeAccount(accountView.login)}>
                Existing User? Log in
              </OTPButton2>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
}

export default LoginDialog;
