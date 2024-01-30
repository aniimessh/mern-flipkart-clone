import { Box, Typography,styled } from "@mui/material";
import React from "react";
import { navData } from "../../constants/data";

const WrapperBox = styled(Box)`
  display: flex;
  margin: 55px 130px 0px 130px;
  justify-content: center;
  gap: 3%;
`;
const Component = styled(Box)(({ theme }) => ({
  padding: "12px 8px",
  textAlign: "center",
  [theme.breakpoints.down('md')]:{
    display:'none',
  }
}));
const Text = styled(Typography)`
  font-size: 14px;
`;

function Navbar() {
  return (
    <Box sx={{background: "#fff"}}>
    <WrapperBox>
      {navData.map((item, id) => {
        return (
          <Component key={id}>
            <img src={item.url} alt="itemImage" style={{ width: 64 }} />
            <Text>{item.text}</Text>
          </Component>
        );
      })}
    </WrapperBox>
    </Box>
  );
}

export default Navbar;
