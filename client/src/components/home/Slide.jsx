import Carousel from "react-multi-carousel";
import { Box, Typography, Button, styled, Divider } from "@mui/material";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Component = styled(Box)`
  margin-top: 10px;
  background: #fff;
`;
const Deal = styled(Box)`
  padding: 15px 20px;
  display: flex;
  align-items: center;
`;
const Timer = styled(Box)`
  display: flex;
  align-items: center;
  margin-left: 10px;
  color: #7f7f7f;
`;
const ViewAllButton = styled(Button)`
  margin-left: auto;
  background-color: #2874f0;
  border-radius: 2px;
  font-size: 13px;
  font-weight: bold;
`;
const Image = styled("img")({
  widht: "auto",
  height: 150,
});
const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return;
  } else {
    // Render a countdown
    return (
      <span>
        {hours}:{minutes}:{seconds} Left
      </span>
    );
  }
};

function Slide({ products, title, timer }) {
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";
  return (
    <Component>
      <Deal>
        <Typography style={{ fontWeight: "bold" }}>{title}</Typography>
        {timer && (
          <Timer>
            <img src={timerURL} alt="" />
            <Countdown date={Date.now() + 50400000} renderer={renderer} />
          </Timer>
        )}

        <ViewAllButton variant="contained">View all</ViewAllButton>
      </Deal>
      <Divider />
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
      >
        {products.map((item, index) => (
          <Link to={`/product/${item.id}`} style={{ textDecoration: "none" }} key={index}>
            <Box textAlign="center" styled={{ padding: "25px 25px" }}>
              <Image src={item.url} alt=" BannerImage" />
              <Text style={{ fontWeight: "bold", color:"#000" }}>
                {item.title.shortTitle}
              </Text>
              <Text style={{ color: "#0FA047" }}>{item.discount}</Text>
              <Text style={{ color: "#7B7B7B" }}>{item.tagline}</Text>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Component>
  );
}

export default Slide;
