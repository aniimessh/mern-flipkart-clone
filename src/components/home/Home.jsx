import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";
import { getProducts } from "../../redux/actions/productAction";
import { useDispatch } from "react-redux";

const Container = styled(Box)`
  padding: 10px 100px;
  background-color: #f2f2f2;
`;

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  },[dispatch])
  return (
    <>
      <Navbar />
      <Container>
        <Banner />
      </Container>
    </>
  );
}

export default Home;
