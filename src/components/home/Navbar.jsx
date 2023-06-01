import { Box, Typography } from "@mui/material";
import React from "react";
import { navData } from "../../constants/data";
import styled from "@emotion/styled";

const WrapperBox = styled(Box)`
    display: flex;
    margin: 55px 130px 0px 130px;
    justify-content: center;
    gap: 3%;
`
const Component = styled(Box)`
    padding: 12px 8px; 
    text-align: center;
`
const Text = styled(Typography)`
    font-size: 14px;
`

function Navbar() {
  return (
    <WrapperBox>
      {navData.map((item, id) => {
        return (
          <Component>
            <img src={item.url} alt="itemImage" style={{width: 64}} key={item.id}/>
            <Text>{item.text}</Text>
          </Component>
        );
      })}
    </WrapperBox>
  );
}

export default Navbar;
