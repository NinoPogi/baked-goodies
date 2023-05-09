import { useState, useEffect } from "react";
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
  autoplaySpeed: 90000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const CakeCarousel = () => {
  const [slider, setSlider] = useState<Slider | null>(null);
  const [windowSize, setWindowSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight / 1.3,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box
      borderRadius="20px"
      role="group"
      position="relative"
      width="full"
      height="full"
      maxHeight={windowSize.height - 50}
      maxWidth={windowSize.width - 50}
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
        left={{ base: "30%", xl: "20px" }}
        top={{ base: "90%", xl: "50%" }}
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
        right={{ base: "30%", xl: "20px" }}
        top={{ base: "90%", xl: "50%" }}
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
            position="relative"
            borderRadius="20px"
            overflow="hidden"
            paddingTop="20px"
            _after={{
              content: '""',
              position: "absolute",
              top: 10,
              left: 5,
              right: 5,
              bottom: 0,
              zIndex: -1,
              filter: "blur(10px)",
              backgroundImage: `url(${banner})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              opacity: 0.8,
              boxShadow: "0 0 15px 5px #fff, 0 0 20px 10px #fff",
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Box
              borderRadius="20px"
              key={index}
              h="2xl"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={banner}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CakeCarousel;
