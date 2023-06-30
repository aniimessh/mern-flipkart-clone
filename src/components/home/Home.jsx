import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";
import { getProducts } from "../../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import Slide from "./Slide";
import { ProductItem } from "./ProductItem";

const Container = styled(Box)`
  padding: 10px 100px;
  background-color: #f2f2f2;
`;

function Home() {
  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Container>
        <Banner />
        <Slide products={products} title="Top Offers" timer={true} />
        <Slide products={products} title="Today's fashion Deals"/>
        <ProductItem />
        <Slide products={products} title="Fashion Best Sellers" />
        <Slide products={products} title="Discounts for You" />
      </Container>
    </>
  );
}

export default Home;
