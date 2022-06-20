import React from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import {IoIosArrowBack,IoIosArrowForward} from "react-icons/io"
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
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

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(<Slider/>||(null));

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    'https://images.ctfassets.net/66mrrren2unf/6oAa5bsnAGGk5tRaxJ26d/8237f11747bf8fea4aa0028e4eb35446/Desktop.jpg?q=40',
"https://images.ctfassets.net/66mrrren2unf/3sQE1O24Tz2h2g1EeAvGy1/d38d3bffc0dca32cb964ab13b091e32c/Desktop.jpg?q=40",
      "https://images.ctfassets.net/66mrrren2unf/4et41Lx3HedqD73AhlTlX9/0381416caf03713af523dfe5ce8ea3c0/Desktop.jpg?q=40",
      "https://images.ctfassets.net/66mrrren2unf/OoKYuxKNlL96p4n6uytiG/02aecfff5b2170bf9fab1c1be850e17c/Desktop_Without_CTA.jpg?q=40",
    
  ];

  return (
    <Box
      position={'relative'}
      height={'auto'}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
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
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="transparent"
        borderRadius="full"
              
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <IoIosArrowBack style={{
            fontSize:"50px"
        }} />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="transparent"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <IoIosArrowForward style={{
            fontSize:"50px"
        }} />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <div key={index} className="corseolbox">
            <img src={url}  />
          </div>
        ))}
      </Slider>
    </Box>
  );
}