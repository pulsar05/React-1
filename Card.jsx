import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductListitem from '../components/ProductListitem'
import { modifyItem, removeItem } from "../redux/cart"
import { useNavigate } from 'react-router-dom'

export default function cart() {
    const list = useSelector((state) => state.cart.list)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const incrementItem = (item ) => {
     dispatch(modifyItem({...item, count: item.count + 1 }));
   }
   const decrementItem = (item ) => {
    if(item.count === 1){
      dispatch(removeItem(item))
    }else{
      dispatch(modifyItem({...item, count: item.count - 1 }));
    }
  }
   const removeItemFromCart = (item) =>{
      dispatch(removeItem(item))
   };
  return (
      <>
       {list.length > 0 ? (
      <>
       {list.map((item) => (
        <ProductListitem 
         {...item}  
         key={item.id} 
         incrementItem = {() => incrementItem(item) }  
         decrementItem = {() => decrementItem(item) } 
         removeItem = {() => removeItemFromCart(item) } 
         />
  ))}  
      <button className="btn btn-success"  onClick={() => navigate('/checkout')}> Go to Checkout</button> 
      </>
 )  : (
  <h2>No Items In The Cart</h2> 
   )}
   </>
  )
}