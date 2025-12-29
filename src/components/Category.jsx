import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../css/category.css'
import { filterCategory } from '../redux/ProductSlice.jsx'

function Category() {
    const dispatch = useDispatch();
    const { products } = useSelector((store) => store.products);
    const [activeCategory, setActiveCategory] = useState("All");

    const tempCategories = products && products.map((item) => (
            item.category
    ));
    const categories = ["All", ...new Set(tempCategories)];

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        dispatch(filterCategory(category));
    }

  return (
    <div>
        <ul className="category-list">
          {
            categories && categories.map((category) => (
              <li className={`category-item ${activeCategory === category ? 'active' : ''}`} 
                onClick={() => handleCategoryClick(category)}>{category}</li>
            ))
          }
        </ul>
    </div>
  )
}

export default Category
