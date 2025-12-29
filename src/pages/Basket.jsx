import React from 'react'
import { useSelector } from 'react-redux';
import BasketProduct from '../components/BasketProduct';
import '../css/header.css'
import '../css/basket.css'
import { useNavigate } from 'react-router-dom';

function Basket() {
  const navigate = useNavigate();
  const { products } = useSelector((store) => store.basket);

  return (
    <div className='flex-space-between basket-page'>
      <div>
        {
          products.map((item) => (
            <div key={item.id}>
              <BasketProduct item={item} />
            </div>
          ))
        }
      </div>
      <div className='FiyatBilgisi'>
        <h2>Toplam Fiyat: {(products.reduce((total, product) => total + product.price * product.quantity, 0)).toFixed(2)} $</h2>
        <button className='Odeme'>Ödeme Yap</button>
        <button className='GeriDon' 
        style={{padding: '12px 20px', width: '100%'}}
        onClick={() => navigate("/")}>       
          Geri Dön</button>
      </div>
    </div>
  )
}

export default Basket
