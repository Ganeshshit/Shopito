import React from 'react'
import Carrousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";


import { responsive } from './data'


const ProductCarousel = ({products}) => {
    
    return (
        <div>
            <Carrousel
            showDots={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            customTransition='all 500ms ease'
            transitionDuration={100}
            
            >
                {products}

            </Carrousel>
        </div>
    )
}

export default ProductCarousel
