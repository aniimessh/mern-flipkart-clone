import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productAction";
import { Box, Grid, Typography, styled } from "@mui/material";
import ActionItem from "./ActionItem";

const Component = styled(Box)({
  background: "#f2f2f2",
  marginTop: "55px",
});

const Container = styled(Grid)({
  background: "#fff",
  display: "flex",
});

const RightContainer = styled(Grid)({
  marginTop: "50px",
});

export const DetailView = () => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const dispatch = useDispatch();
  const { id } = useParams();
  const { products } = useSelector((state) => state.getproductDetails);
  console.log(products?.productDetails);

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
            <Typography>
              {products?.productDetails?.title?.longTitle}
            </Typography>
            <Typography
              style={{
                marginTop: "5px",
                color: "#878787",
                fontSize: "14px",
                display: "flex",
              }}
            >
              8 Rating &amp; 1 Review
              <Box component="span">
                <img
                  src={fassured}
                  alt=""
                  width="77"
                  style={{ marginLeft: 20 }}
                />
              </Box>
            </Typography>
            <Typography>
              <Box
                component="span"
                style={{ fontSize: "28px", marginLeft: "10px" }}
              >
                ₹{products?.productDetails?.price?.cost}
              </Box>
              <Box component="span" style={{ color: "#878787", marginLeft: "10px"}}>
                <strike>{products?.productDetails?.price?.mrp}</strike>
              </Box>
              <Box
                component="span"
                style={{ color: "#388e3c", marginLeft: "10px" }}
              >
                {products?.productDetails?.price?.discount}
              </Box>
            </Typography>
          </RightContainer>
        </Container>
      )}
    </Component>
  );
};
