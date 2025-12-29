import React from 'react'
import '../css/header.css'
import { useNavigate } from 'react-router-dom'

function Product({ item }) {
    const {category, description ,id, image,price, rating, title } = item;
    const Navigate = useNavigate();

  return (
    <div className='product-card'>
        <img style={{ width: '150px', height: '200px', objectFit: 'contain' }} src={image} alt={title} />
        <div>
            <h3>{title}</h3>
        </div>
        <div className='product-card-footer'>
            <h4 style={{color: '#d93d3dff', fontSize: '22px'}}>{price} $</h4>
            <button className='detail-button' onClick={() => Navigate(`/detail/${id}`)}>Detayına Git</button>
        </div>
    </div>
  )
}

export default Product
