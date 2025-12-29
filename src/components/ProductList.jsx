import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllProducts } from '../redux/ProductSlice.jsx'
import Product from './Product.jsx'
import '../css/product.css'
import Category from './Category.jsx'

function ProductList() {
    const dispatch = useDispatch()
    const { products, displayProducts } = useSelector((store) => store.products);

    useEffect(() => {
      if (products && products.length === 0)
          dispatch(getAllProducts());
    }, []);
    const tempcategories = products && products.map((item) => (
            item.category
    ));
    const categories = [...new Set(tempcategories)];
    console.log(categories);

  return (
    <div>
      <Category />
      <div className='product-list'>
        {
          displayProducts ? displayProducts.map((item) => (
              <div key={item.id}>
                  <Product item={item} />
              </div>
          ))
          : null
        }
      </div>
    </div>
  )
}

export default ProductList
