"use client";
import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";

const Gallery = ({ images }) => {
  const [open, setOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleOpen = (index) => {
    setOpen(true);
    setCurrentIndex(index);
  };

  const srcData = images.map((item) => {
    return {
      src: item.image,
      width: 900,
      height: 900,
    };
  });

  return (
    <>
      <div className="grid grid-cols-4 mt-3 gap-2">
        {images.map((image, index) => (
          <div className="md:col-span-1 col-span-4" key={image.id}>
            <Image
              onClick={() => handleOpen(index)}
              src={image.image}
              alt={image.id}
              width={300}
              height={300}
              className="w-full cursor-pointer"
            />
          </div>
        ))}
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={srcData}
        index={currentIndex}
      />
    </>
  );
};

export default Gallery;
