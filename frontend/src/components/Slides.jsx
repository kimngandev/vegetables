import React, {useState} from 'react'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { RxDotFilled } from 'react-icons/rx';


//import image 
import slide1 from '../assets/slide1.png'

const Slides = () => {
 
  const slides = [
    { url: slide1 },
    { url: slide1 },
    { url: slide1 },
    
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  function Carousel({ slides }) { 
    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
      if (current === 0) setCurrent(slides.length - 1);
      else setCurrent(current - 1);
    };
  
    let nextSlide = () => {
      if (current === slides.length - 1) setCurrent(0);
      else setCurrent(current + 1);
    };
  
    return (
    <div className='overflow-hidden relative'>
          <div className="max-w-[1400px] h-[780px] w-full  py-16  relative group">
      {/* Hiển thị hình ảnh hiện tại */}
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      ></div>

      {/* Mũi tên trái */}
      <div
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        onClick={prevSlide}
      >
        <BsFillArrowLeftCircleFill size={30} />
      </div>

      {/* Mũi tên phải */}
      <div
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        onClick={nextSlide}
      >
        <BsFillArrowRightCircleFill size={30} />
      </div>

      {/* Dấu chấm chuyển slide */}
      <div className="absolute mt-[-8rem] flex justify-center gap-10 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
    </div>
  );
    
  }

  

  
  
  
  



  return (
    <div className='max-w-[1400px] h-auto w-full m-auto relative'>
      <Carousel slides={slides} />
    </div>

   
  )

}
export default Slides