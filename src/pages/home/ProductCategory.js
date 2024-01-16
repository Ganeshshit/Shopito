import React from 'react'


import './ProductCategory.scss'
import { Navigate, useNavigate } from 'react-router-dom';

const categories = [
    {
        id: 1,
        title: "Gadgets",
        image: "https://i.ibb.co/5GVkd3m/c1.jpg",
    },
    {
        id: 2,
        title: "Womens Fashion",
        image: "https://i.ibb.co/nQKLjrW/c2.jpg",
    },
    {
        id: 3,
        title: "Sport Sneakers",
        image: "https://i.ibb.co/fNkBYgr/c3.jpg",
    },
];

const Category = ({ title, image }) => {
    const navigate = useNavigate()
    return (
        <div className='category'>
            <h3>{title}</h3>
            <img src={image} alt="" />
            <button type="" className='--btn'
                onClick={() => navigate('/shop')}
            >{"Shop Now>>"}</button>
        </div>
    )

}
const ProductCategory = () => {
    return (
        <div className='categories'>
            {categories.map((cart) => {
                return (
                    <div className='--flex-center' key={cart.id} >
                        
                        <Category
                            title={cart.title}
                            image={cart.image}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default ProductCategory
