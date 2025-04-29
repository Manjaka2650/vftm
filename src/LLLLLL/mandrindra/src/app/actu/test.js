"use client";
import React from "react";
import Img1 from "./img/img13.png";
import Img2 from "./img/sary5.jpg";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

const images = [
  { src: Img1, alt: "image1" },
  { src: Img2, alt: "image2" },
];

const SlideShow = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-full">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000`}
        >
          {index === currentIndex && (
            <Image src={image.src} alt={image.alt} layout="responsive" />
          )}
        </div>
      ))}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <Button color="blue" variant="filled" onClick={prevSlide}>
          Prev
        </Button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <Button color="blue" variant="outlined" onClick={nextSlide}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default SlideShow;
