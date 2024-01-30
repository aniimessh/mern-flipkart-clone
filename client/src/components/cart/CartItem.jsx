import { Box, Button, Typography, styled } from "@mui/material";
import { addEllipsis } from "../../utils/common";
import GroupButton from "./ButtonGroup";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartACtion";

const Component = styled(Box)({
  borderTop: "1px solid #f0f0f0",
  display: "flex",
  background: "#fff",
});

const LeftComponent = styled(Box)({
  margin: "20px",
  display: "flex",
  flexDirection: "column",
});
const SmallText = styled(Typography)({
  color: "#878787",
  fontSize: "14px",
  marginTop: "10px",
});

const RemoveButton = styled(Button)({
  marginTop: "20px",
  color: "#000",
  fontWeight: "600",
});

const CartItem = ({ item }) => {
  const { productDetails } = item;
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const dispatch = useDispatch();

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <Component>
      <LeftComponent>
        <img
          src={productDetails?.url}
          alt=""
          style={{ height: "110px", width: "110px" }}
        />
        <GroupButton />
      </LeftComponent>
      <Box style={{ margin: "20px" }}>
        <Typography>{addEllipsis(productDetails?.title?.longTitle)}</Typography>
        <SmallText>
          Seller: RetailNet
          <Box component="span">
            <img
              src={fassured}
              alt="assured-img"
              style={{ width: "50px", marginLeft: "20px" }}
            />
          </Box>
        </SmallText>
        <Typography style={{ marginTop: "20px 0" }}>
          <Box component="span" style={{ fontWeight: "600" }}>
            ₹{productDetails?.price?.cost}
          </Box>
          <Box
            component="span"
            style={{ color: "#878787", marginLeft: "10px" }}
          >
            <strike>₹{productDetails?.price?.mrp}</strike>
          </Box>
          <Box
            component="span"
            style={{ color: "#388e3c", marginLeft: "10px" }}
          >
            {productDetails?.price?.discount}
          </Box>
        </Typography>
        <RemoveButton onClick={() => removeItemFromCart(productDetails?.id)}>
          Remove
        </RemoveButton>
      </Box>
    </Component>
  );
};

export default CartItem;
