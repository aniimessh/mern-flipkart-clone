import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";
import {getProducts} from "../../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import Slide from './Slide';

const Container = styled(Box)`
  padding: 10px 100px;
  background-color: #f2f2f2;
`;

function Home() {
  const { products } = useSelector(state => state.getProducts)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  },[dispatch])
  return (
    <>
      <Navbar />
      <Container>
        <Banner/>
        <Slide products={products}/>
      </Container>
    </>
  );
}

export default Home;
