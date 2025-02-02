import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../app/features/ShopCart/productSlice';
import { addtoCart } from '../app/features/ShopCart/cartSlice';

function ProductList() {
  const { items: products, status } = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]); // Added dispatch to the dependency array

  if (status === 'loading') return <p>Loading Products...</p>;
  if (status === 'failed') return <p>Failed to load products...</p>;

  return (
    <>
      <Navbar />
      <div className='product-list'>
        {products.map((product) => (
          <div className='product-card' key={product.id}>
            <img src={product.image} alt={product.title} /> {/* Removed redundant alt */}
            <h2>{product.title.length > 20 ? `${product.title.slice(0, 25)}...` : product.title}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={() => dispatch(addtoCart(product))}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;
