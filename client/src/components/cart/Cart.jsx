import { Box, Button, Grid, Typography, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";

const Container = styled(Grid)(({theme}) => ({
  padding: "30px 125px",
  [theme.breakpoints.down("md")]:{
    padding: "15px 0px"
  }
}));

const Header = styled(Box)({
  padding: "15px 24px",
  background: "#fff",
});

const ButtonWrapper = styled(Box)({
  padding: "16px 22px",
  background: "#fff",
  boxShadow: "0 -2px 10px 0 rgb(0 0 0/10%)",
  borderTop: "1px solid #f0f0f0",
});

const StyledButton = styled(Button)({
  display: "flex",
  marginLeft: "auto",
  background: "#fb641b",
  color: "#fff",
  width: "250px",
  height: "51px",
  borderRadius: "4px",
});

const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: "15px",

  [theme.breakpoints.down("sm")]:{
    marginBottom: "15px"
  }
}));

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      {cartItems.length ? (
        <Container container>
          <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography>
                My Cart ({cartItems ? cartItems.length : ""})
              </Typography>
            </Header>
            {cartItems.map((item) => (
              <CartItem item={item} />
            ))}
            <ButtonWrapper>
              <StyledButton variant="contained">Place Order</StyledButton>
            </ButtonWrapper>
          </LeftComponent>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItems={cartItems} />
          </Grid>
        </Container>
      ) : (
        <>
          <EmptyCart />
        </>
      )}
    </>
  );
};

export default Cart;
