import { Box, Typography, styled } from "@mui/material";
import { useEffect, useState } from "react";

const Header = styled(Box)({
  padding: "15px 22px",
  background: "#fff",
  borderBottom: "1px solid #f0f0f0",
});

const Heading = styled(Typography)({
  color: "#878787",
});

const Container = styled(Box)({
  padding: "15px 24px",
  background: "#fff",

  "& > p": {
    marginBottom: "20px",
    fontSize: "14px",
  },
});

const StylePrice = styled(Box)({
  float: "right",
});

const Discount = styled(Typography)({
  color: "green",
});

const TotalView = (cartItems) => {
  const [price, setprice] = useState(0);
  const [discount, setDiscount] = useState(0);

  const totalAmount = () => {
    let price = 0,
    discount = 0;
    cartItems.cartItems.map((item) => {
      price += item.productDetails.price.mrp;
      discount += item.productDetails.price.mrp - item.productDetails.price.cost;
    });
    setprice(price);
    setDiscount(discount);
  };

  useEffect(() => {
    totalAmount();
  }, [cartItems.cartItems])
  return (
    <Box>
      <Header>
        <Heading>Price Details</Heading>
      </Header>
      <Container>
        <Typography>
          Price: ({cartItems?.cartItems?.length}) item
          <StylePrice component="span">{price}</StylePrice>
        </Typography>
        <Typography>
          Discount
          <StylePrice component="span">-{discount}</StylePrice>
        </Typography>
        <Typography>
          Delivery Charges: <StylePrice component="span">40</StylePrice>
        </Typography>
        <Typography>
          Total Amount <StylePrice component="span">{price - discount + 40}</StylePrice>
        </Typography>
        <Discount>You will save Rs {discount - 40} on this order</Discount>
      </Container>
    </Box>
  );
};

export default TotalView;
