import '../css/header.css'
import { FaBasketShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import Badge from '@mui/material/Badge';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { filterProducts } from '../redux/ProductSlice';
import { useState } from 'react';

function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.basket);
  const mainProducts = useSelector((store) => store.products.products);
  console.log(mainProducts);

  const handleSearch = () => {
    dispatch(filterProducts(search));
    setSearch("");
    navigate("/");
  }
  const handleEnter = (e) => {
    if(e.key === "Enter"){
      handleSearch();
    }
  }
  
  const totalQuantity = products.reduce((acc, item) => acc + item.quantity, 0);
// reduce fonksiyonu, bir diziyi tek bir değere (toplama) indirgemek için kullanılan en profesyonel JavaScript metodudur.

// acc: Toplayıcı (Accumulator) - Başlangıçta 0'dır.

// item: O anki ürün.

// Döngü her döndüğünde acc değerine item.quantity eklenir.

  return (
    <div className='navbar flex-space-between'>
      <div>
        <a className='flex-row linkoflogo' href="/">
            <img className="logo" src="../src/images/Logo.png" alt="" />
            <h2>For Everyone</h2>
            </a>
      </div>

      <div className='flex-row search-container'>
        <input className="search-input" type="text" placeholder='Search products...'
          value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={handleEnter}/>

        {search && (
          <div className="search-results">
            {
              mainProducts.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())).slice(0, 5).map((item) => (
                <div key={item.id} className='search-item' onClick={() => {
                  navigate(`/detail/${item.id}`);
                  setSearch("");
                }}>
                  <img className='search-item-image' src={item.image} alt={item.title} />
                  <span className='search-item-title'>{item.title}</span>

                </div>
              ))
            }
          </div>
        )
      }
      
           
        <button className='search-button' onClick={handleSearch}>
          <FaSearch className='search-icon'/>
        </button>
        <Badge badgeContent={totalQuantity} color="error">
          <FaBasketShopping className='basket-icon' onClick={() => navigate('/basket')} />
        </Badge>
      </div>
    </div>
  )
}

export default Header
