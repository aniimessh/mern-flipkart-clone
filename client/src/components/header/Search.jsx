import { Box, InputBase, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

// custom styles for MUI component
const SearchContainer = styled(Box)`
  background: #fff;
  width: 38%;
  border-radius: 2px;
  margin-left: 10px;
  display: flex;
`;
const InputSearch = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: unset;
`;
const SearchIconBox = styled(Box)`
    color:blue;
    padding: 5px;
    display: flex;
`

function Search() {
  return (
    <SearchContainer>
      <InputSearch placeholder="Search for products, brands and more" />
      <SearchIconBox>
        <SearchIcon />
      </SearchIconBox>
    </SearchContainer>
  );
}

export default Search;
