import React from 'react'
import '../css/basket.css'
import '../css/header.css'
import { IoClose } from "react-icons/io5";
import { deletefromBasket,incrementQuantity, decrementQuantity } from '../redux/BasketSlice';
import { useDispatch } from 'react-redux';
import { LuCirclePlus } from "react-icons/lu";
import { LuCircleMinus } from "react-icons/lu";

function BasketProduct({ item }) {

    const {id, title, price, image, description, quantity} = item;
    const dispatch = useDispatch();

    const handleDeleteFromBasket = () => {
        dispatch(deletefromBasket({id}));
    }
    const handleIncrementQuantity = () => {
        dispatch(incrementQuantity({id}));
    }
    const handleDecrementQuantity = () => {
        dispatch(decrementQuantity({id}));
    }

  return (
    <div className='basket-product'>

        <div className='basket-product-card'>
            <IoClose className='Close' onClick={handleDeleteFromBasket}></IoClose>
            <img style={
                { width: '90px', height: '140px', objectFit: 'contain',
                 margin: '10px 40px 10px 10px' }} 
                 src={image} alt={title} />
            <div>
                <h4>{title}</h4>
                {/* <p>{description}</p> */}
                <div className='flex-space-between' style={{width: '300px', marginTop: '20px'}}>

                    <h5>Fiyat: {price} $</h5>
                    <div className='flex-row'>
                        <LuCircleMinus  className='circle-icon' style={{fontSize: '25px',backgroundColor: '#d93d3dff', color: 'white'}}
                        onClick={handleDecrementQuantity}/>
                        <h5>{quantity}</h5>
                        <LuCirclePlus  className='circle-icon' style={{fontSize: '25px', backgroundColor: '#d93d3dff', color: 'white'}}
                        onClick={handleIncrementQuantity}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BasketProduct
