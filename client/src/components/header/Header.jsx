import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import React, { useState } from "react";
import Search from "./Search";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

// adding custom css using matrial UI styled function
const StyledHeader = styled(AppBar)`
  background: #2874f1;
  height: 55px;
`;
const Component = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  color: inherit:
`;
const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;
const PlusImage = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 4,
});
const CustomButtonWrapper = styled(Box)(({ theme }) => ({
  margin: "0 5% 0 auto",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  color: "inherit",

  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));



function Header() {
  const [open, setOpen] = useState(false);
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const list = () => {
    return (
      <Box sx={{ width: "200px" }} onClick={handleClose}>
        <List>
          <ListItem button>
            <CustomButton />
          </ListItem>
        </List>
      </Box>
    );
  };
  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 55 }}>
        <MenuButton onClick={handleOpen}>
          <MenuIcon />
        </MenuButton>
        <Drawer open={open} onClick={handleClose}>
          {list()}
        </Drawer>
        <Component to="/" style={{ textDecoration: "none" }}>
          <img src={logoURL} alt="flipkart-logo" style={{ width: 75 }} />
          <Box style={{ display: "flex" }}>
            <SubHeading>
              Explore &nbsp;
              <Box component="span" style={{ color: "#FFE500" }}>
                Plus
              </Box>
            </SubHeading>
            <PlusImage src={subURL} alt="subUrl" srcset="" />
          </Box>
        </Component>
        <Search />
        <CustomButtonWrapper>
          <CustomButton />
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
}

export default Header;
