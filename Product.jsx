import React, { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { ProductList } from '../data/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cart';

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(false);

  const props = ProductList.find(element => element.id === parseInt(id));

  if (!props) {
    return <div>Product not found</div>;
  }

  const list = useSelector(state => state.cart.list);
  const element = list.find(item => item.id === props.id);

  const addToCart = () => {
    setAlert(true);
    setTimeout(() => setAlert(false), 3000);
    dispatch(addItem(props));
  };

  return (
    <div className='card m-2'>
      {alert && <span className='alert alert-success'>Item added to Cart</span>}
      <div className='mt-2'>
        <img 
          src={props.thumbnail} 
          width={350} 
          height={350} 
          alt={props.title} 
          className='border-radius-9' 
        />
      </div>
      <div className='mt-3 card-body'>
        <h5 className='card-title'>{props.title}</h5>
        <h6 className='mt-2'>Price:{props.price}</h6>
        <h6 className='mt-2'>Discount: {props.discountPercentage}%</h6>
        <h6 className='mt-2'>Rating: {props.rating}</h6>
        <div className='mt-4'>
          {props.stock > 0 ? (
            <>
              <button 
                className='btn btn-success' 
                onClick={() => navigate(`/Checkout/${props.id}`)}
              >
                Buy Now
              </button>
              {element?.count > 0 ? (
                <button 
                  className='ms-3 btn btn-outline-warning' 
                  onClick={() => navigate('/cart')}
                >
                  Go to Cart
                </button>
              ) : (
                <button 
                  className='ms-3 btn btn-success' 
                  onClick={addToCart}
                >
                  Add to Cart
                </button>
              )}
            </>
          ) : (
            <button className='btn btn-outline-danger'>Out of Stock</button>
          )}
        </div>
      </div>
    </div>
  );
}