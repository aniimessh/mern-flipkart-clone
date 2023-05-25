import { AppBar, Toolbar, styled, Box, Typography } from "@mui/material";
import React from "react";
// import image of flipkart logo

// adding custom css using matrial UI styled component
const StyledHeader = styled(AppBar)`
  background: #2874f1;
  height: 55px;
`;
const Component = styled(Box)`
  margin-left: 12%;
  line-height: 0;
`;
const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;
const PlusImage = styled('img')({
    width:10,
    height: 10,
    marginLeft: 4
})

function Header() {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
  return (
    <StyledHeader>
      <Toolbar>
        <Component>
          <img src={logoURL} alt="flipkart-logo" style={{ width: 75 }} />
          <Box style={{display:'flex'}}>
            <SubHeading>
              Explore &nbsp;
              <Box component="span" style={{ color: "#FFE500" }}>
                Plus
              </Box>
            </SubHeading>
              <PlusImage src={subURL} alt="subUrl" srcset="" />
          </Box>
        </Component>
      </Toolbar>
    </StyledHeader>
  );
}

export default Header;
