import React from "react";
import Carousel from "react-multi-carousel";
import { bannerData } from "../../constants/data";
import styled from "@emotion/styled";
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

// custom css
const Image = styled('img')({
    width: '100%',
    height: 320,
})

function Banner() {
  return <Carousel responsive={responsive} swipeable={false}
  draggable={false} infinite={true} autoPlay={true} autoPlaySpeed={4000}
  containerClass="carousel-container" dotListClass="custom-dot-list-style">
    {
        bannerData.map((item) => (
            <Image src={item.url} alt="BannerImage"/>
        ))
    }
  </Carousel>;
}

export default Banner;
