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

    return (
        <div className="image-gallery">
            {images.map((image, index) => (
                <div key={image.sourceUrl} className="image-gallery__image-container" onClick={() => {setIsSliderOpen(true), setSliderIndex(index)}}>
                    <Image src={image.sourceUrl} alt={image.title} fill />
                </div>
            ))}
            {isSliderOpen && <Slider images={images} index={sliderIndex} closeSliderFn={setIsSliderOpen} />}
        </div>
    )
}