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
        <div className="lg:relative">
          <img src={images[currentImageIndex]} alt="" className="lg:h-[750px] lg:w-[449px] lg:rounded-[50px] md:w-[100%] sm:w-[100%] sm:h-[500px] sm:rounded-none sm:object-cover sm:object-top xsm:w-[100%] xsm:h-[500px] xsm:rounded-none xsm:object-cover xsm:object-top" />
    
        <div className="dots sm:relative sm:bottom-6 xsm:relative xsm:bottom-6 lg:relative lg:bottom-10">
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