import { useEffect, useState } from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const CakeCarousel = () => {
  const [slider, setSlider] = useState<Slider | null>(null);
  const cards = [
    "https://scontent.fcrk1-5.fna.fbcdn.net/v/t39.30808-6/316176703_601990148279925_4393692677306225527_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeEDPjiHhu9f0FRVjbjKAfzt9RZIgpmj5T31FkiCmaPlPa8CPKZ5P3v1eUqxL258FwwdaU_On5FUMaVS8LTrOM74&_nc_ohc=Sjq8hCIjxRUAX8OJHPs&_nc_ht=scontent.fcrk1-5.fna&oh=00_AfA5adY78YS0DlJf0JY41b2_K8mHR6LLBa8Y6oIu11cf3g&oe=644A203C",
    "https://scontent.fcrk1-5.fna.fbcdn.net/v/t39.30808-6/219696633_291770972635179_9059821622491358644_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeENGKHYltBeygB2SlityOtfEe2xp9HUsLYR7bGn0dSwtkEG1bu2yG5kwEPBYFnDDy_z45m9MscpTewgZBfk2JB0&_nc_ohc=_mGU5jkcJlAAX95nf5f&_nc_ht=scontent.fcrk1-5.fna&oh=00_AfBCUTXnYNY_nYJePJfcbNcwrrXSc2Bs__fYjOQiOWuH4Q&oe=644BA62A",
  ];

  useEffect(() => {
    document.title = "Baked Goodies by H";
  }, []);

  return (
    <Box
      display={{ base: "block", lg: "block" }}
      position="relative"
      h={{ base: 600, md: 580, lg: 650 }}
      width="100%"
      maxWidth={{
        "1sm": 280,
        sm: 380,
        md: 704,
        lg: 960,
        xl: 1376,
        "2xl": 1800,
      }}
      overflow="hidden"
      transform="auto"
      borderRadius="30px"
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
        left={{ base: "30%", md: "40px" }}
        top={{ base: "90%", md: "50%" }}
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
        right={{ base: "30%", md: "40px" }}
        top={{ base: "90%", md: "50%" }}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      <Slider ref={(slider) => setSlider(slider)} {...settings}>
        {cards.map((url, index) => (
          <Box
            key={index}
            h="2xl"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default CakeCarousel;
