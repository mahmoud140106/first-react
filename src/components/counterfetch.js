import {React ,useEffect,useState } from 'react'
import axios from 'axios';
function Counterfetch() {
const[products,setProduct]=useState([]);
const[count,setCount]=useState(1);
useEffect(()=>{
axios.get('https://fakestoreapi.com/products')
.then((response)=>{
  setProduct(response.data)
})
.catch((error)=>{
  console.log(error)
})
})
const firstProduct = products.slice(0, count);

  return (
           <>
            <div className='btn-container'>
            <button className='btn' onClick={()=>setCount(count+1)}>plus product</button>
            <button className='btn' onClick={()=>setCount(count-1)}>minus product</button>
            </div>
            <div className='mycard-container'>
            {firstProduct.map((product)=>(
                <div key={product.id} className='mycard'>
                    <img src={product.image} alt=""/>
                    <h1>{product.title}</h1>
                    <div className='content'>
                    <p>price: {product.price}</p>
                    <p>{product.category}</p>
                    </div>
                </div>
            ))}      
            </div>
          </>
  );
}

export default Counterfetch;
