import { useState } from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import banners from "../../data/banners";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 30000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const CakeCarousel = () => {
  const [slider, setSlider] = useState<Slider | null>(null);

  return (
    <Box
      display={{ base: "block", lg: "block" }}
      position="relative"
      h={{ base: 500, lg: 600 }}
      width="100%"
      maxWidth={{
        sm: 280,
        md: 380,
        lg: 704,
        xl: 960,
        "2xl": 1376,
        "3xl": 1800,
      }}
      overflow="hidden"
      transform="auto"
    >
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={{ base: "30%", lg: "20px" }}
        top={{ base: "90%", lg: "50%" }}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={{ base: "30%", lg: "20px" }}
        top={{ base: "90%", lg: "50%" }}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      <Slider ref={(slider) => setSlider(slider)} {...settings}>
        {banners.map((banner, index) => (
          <Box
            key={index}
            h="2xl"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={banner}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default CakeCarousel;
