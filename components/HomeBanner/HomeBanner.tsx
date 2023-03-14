import Image from "next/image"
import { useEffect, useState } from "react";
import BannerWave from "../Waves/BannerWave";
import FooterWave from "../Waves/FooterWave";

interface Photo {
  src: string;
  alt: string;
}

const photosGallery: Photo[] = [
  {
    src: '/kids.jpg',
    alt: 'toys banner'
  },
  {
    src: '/toys.jpg',
    alt: 'kids banner'
  },
  {
    src: '/kids2.jpg',
    alt: 'kids banner'
  },
]

const photoIndexFn = (index: number): number => {
  return index < 0 ? photosGallery.length - 1 : index
}



export default function HomeBanner() {
  const [photoIndex, setPhotoIndex] = useState<number>(0)
  
  const time = 3000;

  useEffect(() => {
    const callbackFn = () => {
      if (photoIndex === (photosGallery.length - 1)) {
        return setPhotoIndex(0)
      }
      setPhotoIndex(photoIndex + 1)
    }

    const interval = setInterval(callbackFn, time)
    return () => clearInterval(interval)
  }, [photoIndex])

  return (
    <div className="home-banner">
        {photosGallery.map((photo, index) => {
          if (photoIndex === index) {
            return (
              <div key={photo.src} className="home-banner__container">
                <div className="home-banner__photo--below">
                <Image src={photosGallery[photoIndexFn(index - 1)].src} alt={photosGallery[photoIndexFn(index - 1)].alt} fill />
                </div>
                <div className="home-banner__photo--above">
                  <Image src={photo.src} alt={photo.alt} fill />
                </div>
              </div>
            )
          }
        })}
        <BannerWave />
        <div className="home-banner__main">
          <h1>Witaj na stronie Przedszkola Chatka Puchatka</h1>
          <a href="#main-title" className="home-banner__button">Zaczynamy!</a>
        </div>
    </div>
  )
}
