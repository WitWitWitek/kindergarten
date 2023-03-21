import { useRef, useState, useEffect } from 'react'
import { createPortal } from 'react-dom';
import Image from 'next/image';


export default function Slider({ images , index = 0, closeSliderFn }: SliderProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [mounted, setMounted] = useState(false)
  const [displayedIndex, setDisplayedInex] = useState<number>(index)

  useEffect(() => {
    ref.current = document.getElementById('slider')! as HTMLDivElement
    setMounted(true)
  }, [])
  
  const sliderStructure = (
    <div className='slider'>
        <div className="slider__main-image">
          <Image src={images[displayedIndex].sourceUrl} alt={images[displayedIndex].title} fill />
        </div>
        <hr />
        <ul className='slider__list'>
          {images.map((image, index) => (
            <li key={image.sourceUrl} className='slider__list-item' onClick={() => setDisplayedInex(index)}>
              <Image src={image.sourceUrl} alt={image.title} fill />
            </li>
          ))}
        </ul>
        <button className='slider__close-button' onClick={() => closeSliderFn(false)}>X</button>
    </div>
  )

  return (
    <>
      {
        mounted && ref.current 
        ? createPortal(sliderStructure, ref.current) 
        : null
      }
    </>
  )
}