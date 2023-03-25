import { useRef, useState, useEffect } from 'react'
import { createPortal } from 'react-dom';
import Image from 'next/image';

export default function Slider({ images , index = 0, closeSliderFn }: SliderProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [mounted, setMounted] = useState<boolean>(false)
  const [displayedIndex, setDisplayedInex] = useState<number>(index)
  
  useEffect(() => {
    ref.current = document.getElementById('slider')! as HTMLDivElement
    setMounted(true)
  }, [])
  
  const displayNextImageCb = (value: number) => (value + 1) <= images.length - 1 ? value + 1 : 0
  const displayPrevImageCb = (value: number) => (value - 1) > 0 ? value - 1 : images.length - 1

  const sliderListStyles = {
    width: `${100 * images.length}px`,
    transform: `translateX(-${displayedIndex * 100}px)`
  }

  const sliderStructure = (
    <div className='slider'>
        <div className="slider__main-image">
          <img
            src={images[displayedIndex].sourceUrl} 
            alt={images[displayedIndex].title} 
            loading="lazy"
          />
          <button 
            className="slider__button slider__button--next"
            onClick={() => setDisplayedInex(displayNextImageCb)}
            >›</button>
          <button 
            className="slider__button slider__button--prev"
            onClick={() => setDisplayedInex(displayPrevImageCb)}
          >‹</button>
        </div>
        <div className="slider__container">
          <ul className='slider__list' style={sliderListStyles}>
            {images.map((image, index) => (
              <li key={image.sourceUrl} className={`slider__list-item ${displayedIndex === index ? 'active' : ''}`} onClick={() => setDisplayedInex(index)}>
                <Image src={image.sourceUrl} alt={image.title} fill />
              </li>
            ))}
          </ul>
        </div>
        <button className='slider__button slider__button--close' onClick={() => closeSliderFn(false)}>X</button>
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