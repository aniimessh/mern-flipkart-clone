import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

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

const CellText = styled(TableRow)({
  verticalAlign: "baseline",

  ".MuiTableCell-root": {
    border: "none",
  },
});

const ProductDetail = ({ products }) => {
  console.log(products);
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
  return (
    <>
      <Typography>{products?.title?.longTitle}</Typography>
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
          <img src={fassured} alt="" width="77" style={{ marginLeft: 20 }} />
        </Box>
      </Typography>
      <Typography>
        <Box component="span" style={{ fontSize: "28px" }}>
          ₹{products?.price?.cost}
        </Box>
        <Box component="span" style={{ color: "#878787", marginLeft: "10px" }}>
          <strike>₹{products?.price?.mrp}</strike>
        </Box>
        <Box component="span" style={{ color: "#388e3c", marginLeft: "10px" }}>
          {products?.price?.discount}
        </Box>
      </Typography>
      <Typography>Available Offers</Typography>
      <SmallText>
        <Typography>
          <StyledBadge /> Bank Offer10% off on Bank of Baroda Credit Card and
          EMI Transactions, up to ₹1500 on orders of ₹5000 and aboveT&C
        </Typography>
        <Typography>
          {" "}
          <StyledBadge />
          Bank OfferFlat ₹1,000 off on OneCard Credit Card and Credit EMI
          Transactions on orders of ₹10,000 and aboveT&C
        </Typography>
        <Typography>
          {" "}
          <StyledBadge />
          Bank OfferExtra ₹750 off on Bank of Baroda Credit Card and EMI Txns on
          Net Cart Value of ₹24,990 and aboveT&C
        </Typography>
        <Typography>
          {" "}
          <StyledBadge />
          Buy for 100 get ₹225 off your Next BuyT&C
        </Typography>
      </SmallText>
      <Table>
        <TableBody>
          <CellText>
            <TableCell style={{ color: "#878787" }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: 600 }}>
              Delivery By {date.toDateString()} | Rs 40.
            </TableCell>
          </CellText>
          <CellText>
            <TableCell style={{ color: "#878787" }}>Warranty</TableCell>
            <TableCell style={{ fontWeight: 600 }}>No Warranty</TableCell>
          </CellText>
          <CellText>
            <TableCell style={{ color: "#878787" }}>Seller</TableCell>
            <TableCell style={{ color: "#2874f0" }}>
              <Box component="span" style={{ color: "#2874f0" }}>
                Super ComNet
              </Box>
            </TableCell>
          </CellText>
          <CellText>
            <TableCell colSpan={2}>
              <img src={adURL} alt="" style={{ width: 390 }} />
            </TableCell>
          </CellText>
          <CellText>
            <TableCell style={{ color: "#878787" }}>Description</TableCell>
            <TableCell style={{ fontWeight: 600 }}>
              {products?.description}
            </TableCell>
          </CellText>
        </TableBody>
      </Table>
    </>
  );
};

export default ProductDetail;
