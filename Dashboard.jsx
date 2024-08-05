import React from 'react';
import ProductCard from "../container/ProductCard"
import { ProductList } from "../data/ProductList";


export default function Dashboard() {
    return (
      <div>
        <div className='d-flex flex-wrap justify-content-center p-3 gap-3'>
          {ProductList.map((product) => <ProductCard  {...product} key={product.id} /> )}
        </div>
      </div>
    );
  }
  