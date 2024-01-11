import { useEffect, useState } from "react"
import { ImageSlideshowProps } from "../interfaces/ImageSlideshowProps"

export const ImageSlideshow = ( { images, interval = 5000 }: ImageSlideshowProps) => {
    const [ currentImageIndex, setCurrentImageIndex ] = useState(0);

    useEffect(() => {
        const intervalId  = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1 ) % images.length);
        }, interval);
        return () => clearInterval(intervalId);
    }, [images, interval])

    const handleDotClick = (index: number) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="image-slideshow relative">
        <img src={images[currentImageIndex]} alt="" className="clip-img h-[819px] w-[449px] border rounded-[50px] border-solid" />
  
        <div className="dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`${index === currentImageIndex ? 'active' : ''} dot-button`}
              onClick={() => handleDotClick(index)}
            >
              
            </button>
          ))}
        </div>
      </div>
    )

}