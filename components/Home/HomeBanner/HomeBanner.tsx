import React, { useEffect, useState } from 'react';
import BannerWave from '../../Waves/BannerWave';

interface Photo {
  src: string;
  alt: string;
}

const photosGallery: Photo[] = [
  {
    src: '/numbers.jpg',
    alt: 'numbers banner',
  },
  {
    src: '/toys.jpg',
    alt: 'toys banner',
  },
  {
    src: '/pencils.jpg',
    alt: 'pencils banner',
  },
];

const photoIndexFn = (index: number): number => (index < 0 ? photosGallery.length - 1 : index);

export default function HomeBanner() {
  const [photoIndex, setPhotoIndex] = useState<number>(1);

  const time = 3000;

  useEffect(() => {
    const callbackFn = () => {
      if (photoIndex === (photosGallery.length - 1)) {
        return setPhotoIndex((prevPhotoIndex) => 0);
      }
      return setPhotoIndex((prevPhotoIndex) => prevPhotoIndex + 1);
    };

    const interval = setInterval(callbackFn, time);
    return () => clearInterval(interval);
  }, [photoIndex]);

  return (
    <div className="home-banner">
      {photosGallery.map((photo, index) => {
        if (photoIndex === index) {
          return (
            <div key={photo.src} className="home-banner__container">
              <img className="home-banner__photo--below" src={photosGallery[photoIndexFn(index - 1)].src} alt={photosGallery[photoIndexFn(index - 1)].alt} />
              <img className="home-banner__photo--above" src={photo.src} alt={photo.alt} />
            </div>
          );
        }
        return null;
      })}
      <BannerWave />
      <div className="home-banner__main">
        <h1>Witaj na stronie Przedszkola Chatka Puchatka</h1>
        <a href="#main-title" className="home-banner__button">Zaczynamy!</a>
      </div>
    </div>
  );
}
