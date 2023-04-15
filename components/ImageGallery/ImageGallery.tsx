import React, { useState } from 'react';
import Slider from './Slider/Slider';

type Props = {
  images: Image[]
};

export default function ImageGallery({ images }: Props) {
  const [isSliderOpen, setIsSliderOpen] = useState<boolean>(false);
  const [sliderIndex, setSliderIndex] = useState<number>(0);

  if (!images) {
    return <div>No images yet.</div>;
  }

  const setImageContainerClassName = (index: number): string => {
    switch (index) {
      case 0:
        return 'image-gallery__image-container first-row';
      case 1:
        return 'image-gallery__image-container first-row';
      default:
        return 'image-gallery__image-container second-row';
    }
  };
  const imageClickHandler = (index: number) => {
    setIsSliderOpen(true);
    setSliderIndex(index);
  };
  return (
    <div className="image-gallery">
      {images.map((image, index) => {
        if (index < 4) {
          return (
            <div key={image.sourceUrl} className={setImageContainerClassName(index)}>
              <img
                className="image-gallery__image"
                onClick={() => imageClickHandler(index)}
                onKeyDown={() => {}}
                role="presentation"
                src={image.sourceUrl}
                alt={image.title}
              />
            </div>
          );
        } if (index === 4) {
          return (
            <div key={image.sourceUrl} className={setImageContainerClassName(index)}>
              <img
                className="image-gallery__image"
                onClick={() => imageClickHandler(index)}
                onKeyDown={() => {}}
                src={image.sourceUrl}
                alt={image.title}
                role="presentation"
              />
              {
                index !== images.length - 1
                  ? (
                    <div
                      className="image-gallery__counter"
                      role="presentation"
                      onKeyDown={() => {}}
                      onClick={() => imageClickHandler(index)}
                    >
                      {`+ ${images.length - (index + 1)}`}
                    </div>
                  )
                  : null
              }
            </div>
          );
        }
        return null;
      })}
      {
        isSliderOpen
        && <Slider images={images} imageIndex={sliderIndex} closeSliderFn={setIsSliderOpen} />
       }
    </div>
  );
}
