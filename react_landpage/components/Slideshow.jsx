import React, { useState } from "react";

const images = [
 "./src/assets/img/img-1.jpg",
"./src/assets/img/img-2.jpg",
"./src/assets/img/img-3.jpg",
"./src/assets/img/img-4.jpg",
"./src/assets/img/img-5.jpg",
"./src/assets/img/img-6.jpg",
];

export default function Slider() {
  const [currentImage, setCurrentImage] = useState(0);
  const [zoomImage, setZoomImage] = useState(false);

  const Previous = () => {
    setCurrentImage((image) => (image == 0 ? (images.length - 1) : (image - 1)));
  };

  const Next = () => {
    setCurrentImage((image) => (image == (images.length - 1) ? 0 : (image + 1)));
  };

  return (
    <>
    <div className="slide-container">
      <img
      className="img-slider"
        src={images[currentImage]}
        alt={`Slide ${currentImage + 1}`}
        onClick={() => setZoomImage(true)}
      />
      <button
        onClick={Previous}
        className=" slide-buttons"
      >
        {"<"}
      </button>
      <button
        onClick={Next}
        className="slide-buttons next"
      >
        {">"}
      </button>
    </div>
    <div className="gallery-miniature flex w-full gap-2 mt-4">
      {images.map((image, index)=> 
        <img
        key={index}
       className="image-miniatura"
        src={image}
        alt={`Miniatura ${index + 1}`}
         onClick={() => {
      setCurrentImage(index);
      setZoomImage(true);
    }}
      />
    )}
    </div>
    {zoomImage && (
        <div
          className="background-zoom w-full h-screen flex items-center justify-center"
          onClick={() => setZoomImage(false)}
        >
          <img
            src={images[currentImage]}
            alt={`Slide ${currentImage + 1}`}
            className="background-zoom-image object-contain"
          />
        </div>
      )}
      </>
  );
}