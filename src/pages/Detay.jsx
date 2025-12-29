import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { getAllProducts } from '../redux/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import '../css/header.css'
import '../css/detail.css'
import { FaStar } from "react-icons/fa";
import { LuCirclePlus } from "react-icons/lu";
import { LuCircleMinus } from "react-icons/lu";
import { useEffect, useState } from 'react';
import { addToBasket } from '../redux/BasketSlice';

function Detay() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(quantity + 1);
    }
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    useEffect(() => {
        dispatch(getAllProducts());
    }, []);
    const { products } = useSelector((store) => store.products);
    const product = products.find((item) => item.id === parseInt(id));

    const {category, description ,Id, image,price, rating, title } = product || {};

    const addBasket = () => {
      const productToAdd = {
        id,
        title,
        price,
        image,
        description,
        quantity
        }
        dispatch(addToBasket(productToAdd));
    }

  return (
    <div className='flex-row'>

      <div className='flex-row product-detail'>

        <div>
          <img style={{ width: '300px', height: '400px', objectFit: 'contain' }} src={image} alt={title} />
        </div>

        <div style={{ marginLeft: '30px' }}>
          <h2 style={{color: '#0003c0ff'}}>{title}</h2>

          <div className='flex-space-between' style={{width: '600px'}}>
            <h3>Kategori: <span className='grey'>{category}</span></h3>
            <h4 className='flex-row'>
              Değerlendirme: {rating?.rate} <FaStar className='star' />
              <span className='grey'>({rating?.count} yorum)</span></h4>
          </div>

          <p className='grey'><span style={{color: 'black'}}>Açıklama:</span> {description}</p>


          <div className='flex-space-between button-group'>            
            <h2 >Fiyat: <span className='Price'>{price} $</ span></h2> 
            
            <div className='flex-row' style={{gap: '20px'}}>
              <div className='flex-row quantity-box'>
                <LuCircleMinus onClick={decrement} className='circle-icon'/>
                <span className='quantity'>{quantity}</span>
                <LuCirclePlus onClick={increment} className='circle-icon'/>
              </div>
              <div>
                <button className='SepeteEkle' onClick={addBasket}>Sepete Ekle</button>
                <button className='GeriDon' onClick={() => navigate("/")}>Geri Dön</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Detay
