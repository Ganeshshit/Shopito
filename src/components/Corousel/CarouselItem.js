import React from 'react'
import './Carousel.scss'
import { Link } from 'react-router-dom'

import { shortendText } from '../../utils'


const CarouselItem = ({ url, name, price, description }) => {
    return (
        <div className='carouselItem'>
            <Link to='/product-details'>
                <img src={url} alt="Product image"
                    className='product--image'
                />
                <p className='price'>{`${price}`}</p>
                <h4>{shortendText(name,15)}</h4>
                <p className='--mb'>{shortendText(description,18)}</p>

            </Link>
            <button type="" className='--btn --btn-primary --btn-block'>
                ADD to Cart
            </button>


        </div>
    )
}

export default CarouselItem
