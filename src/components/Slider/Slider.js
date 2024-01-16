import React, { useEffect, useState } from 'react'
// import styles from './slide.scss'
import './Slider.scss'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'
import { sliderData } from './slider-data'
import { useNavigate } from 'react-router-dom'



const Slider = () => {
    const navigate = useNavigate()
    const [currentSlide, setCurrentSlide] = useState(0)
    const slideLength = sliderData.length
    const autoScroll = true
    let slideInterval;
    const intervalTime = 5000;






    const prevSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
    }
    useEffect(() => {
        setCurrentSlide(0)
    }, [])
    useEffect(() => {
        if (autoScroll) {
            const auto = () => {
                slideInterval = setInterval(nextSlide, intervalTime)
            }
            auto()
        }
        return () => clearInterval(slideInterval)
    }, [currentSlide, intervalTime, autoScroll])


    return (
        <div className='slider'>
            <BsArrowLeftCircle
                onClick={prevSlide}
                size={30}
                className='arrow pre'
            />
            <BsArrowRightCircle
                onClick={nextSlide}
                size={30}
                className='arrow next'
            />
            {
                sliderData.map((slide, index) => {
                    const { image, heading, dec } = slide

                    return (
                        <div key={index} className={index == currentSlide ? "slideCurrent" : "slide"} style={{ width: "90%", height: "90%" }}>
                            {
                                index === currentSlide && (
                                    <>
                                        <img src={slide.image} alt="slide" />
                                        <div className='content'>
                                            <span className='span1'>Hello</span>
                                            <span className='span2'>How Are</span>
                                            <span className='span3'></span>
                                            <span className='span4'></span>
                                            <h2>{slide.heading}</h2>
                                            <p>{slide.desc}</p>
                                            <hr />
                                            <button type="" className='--btn --btn-primary'
                                                onClick={() => navigate('/shop')}
                                            >
                                                Shop Now
                                            </button>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    )

                })
            }
        </div>
    )
}

export default Slider
