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
        <div className="image-slideshow lg:relative">
          <img src={images[currentImageIndex]} alt="" className="lg:h-[800px] lg:w-[449px] lg:rounded-[50px] sm:w-[780px] sm:h-[500px] sm:rounded-none sm:object-cover sm:object-top" />
    
          <div className="dots sm:relative sm:bottom-6 lg:relative lg:bottom-10">
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