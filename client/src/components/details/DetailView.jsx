import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productAction";
import { Box, Grid, Typography, styled } from "@mui/material";
import ActionItem from "./ActionItem";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ProductDetail from "./ProductDetail";

const SmallText = styled(Box)({
  fontSize: "14px",
  verticalAlign: "baseline",

  "& > p": {
    fontSize: "14px",
    marginTop: "10px",
  },
});

const StyledBadge = styled(LocalOfferIcon)({
  marginRight: "10px",
  color: "#00cc00",
  fontSize: "15px",
});

const Component = styled(Box)({
  background: "#f2f2f2",
  marginTop: "55px",
});

const Container = styled(Grid)({
  background: "#fff",
  display: "flex",
});

const RightContainer = styled(Grid)(({ theme }) => ({
  marginTop: "50px",

  [theme.breakpoints.down('md')]:{
    margin: 0
  }
}));

export const DetailView = () => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const dispatch = useDispatch();
  const { id } = useParams();
  const { products } = useSelector((state) => state.getproductDetails);
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);
  return (
    <Component>
      {products?.productDetails && (
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={products?.productDetails} />
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}>
            <ProductDetail products={products?.productDetails} />
          </RightContainer>
        </Container>
      )}
    </Component>
  );
};
