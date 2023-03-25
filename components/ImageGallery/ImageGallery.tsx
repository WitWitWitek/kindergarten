import Image from "next/image"
import { useState } from "react"
import Slider from "./Slider/Slider"

type Props = {
    images: Image[]
}

export default function ImageGallery({ images }: Props) {
    const [isSliderOpen, setIsSliderOpen] = useState<boolean>(false)
    const [sliderIndex, setSliderIndex] = useState<number>(0)

    if (!images) {
        return <div>No images yet.</div>
    }

    const setImageContainerClassName = (index: number): string => {
        switch (index) {
            case 0:
                return "image-gallery__image-container first-row";
            case 1:
                return "image-gallery__image-container first-row";
            default:
                return "image-gallery__image-container second-row" ;
        }
    }
    
    return (
        <div className="image-gallery">
            {images.map((image, index) => {
                if (index < 4) {
                    return (
                        <div key={image.sourceUrl} className={setImageContainerClassName(index)}>
                            <img 
                            className='image-gallery__image'
                            onClick={() => {setIsSliderOpen(true), setSliderIndex(index)}}
                            src={image.sourceUrl} 
                            alt={image.title}
                            />
                        </div>
                        )   
                } else if (index === 4) {
                    return (
                        <div key={image.sourceUrl} className={setImageContainerClassName(index)}>
                            <img 
                            className='image-gallery__image'
                            onClick={() => {setIsSliderOpen(true), setSliderIndex(index)}}
                            src={image.sourceUrl} 
                            alt={image.title}
                            />
                            {
                                index !== images.length - 1 
                                ? <div className='image-gallery__counter' onClick={() => {setIsSliderOpen(true), setSliderIndex(index)}}>
                                    {`+ ${images.length - (index + 1)}`}
                                </div>
                                : null
                            }
                        </div>
                    )
                }
            })}
            {isSliderOpen && <Slider images={images} index={sliderIndex} closeSliderFn={setIsSliderOpen} />}
        </div>
    )
}