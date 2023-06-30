import React from "react";
import Product1 from "../../assets/Products Image/Product1.jpg";
import Product2 from "../../assets/Products Image/Product2.jpg";
import Product3 from "../../assets/Products Image/Product3.jpg";
import Product4 from "../../assets/Products Image/Product4.jpg";
import Product5 from "../../assets/Products Image/Product5.jpg";
import Product6 from "../../assets/Products Image/Product6.jpg";
import Product7 from "../../assets/Products Image/Product7.jpg";
import Product8 from "../../assets/Products Image/Product8.jpg";
import Product9 from "../../assets/Products Image/Product9.jpg";
import { Box, Link, styled } from "@mui/material";

const ProductCard = [
  Product1,
  Product2,
  Product3,
  Product4,
  Product5,
  Product6,
  Product7,
  Product8,
  Product9,
];

const ImageBox = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ProductItem = () => {
  return (
    <ImageBox>
      {ProductCard.map((item) => {
        return (
          <Box style={{ marginTop: "10px" }}>
            <Link href="#"> <img src={item} alt="" style={{ height: 300 }} /></Link>
          </Box>
        );
      })}
    </ImageBox>
  );
};
