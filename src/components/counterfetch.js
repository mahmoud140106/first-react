import {React ,useEffect,useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

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
const handleincrement=()=>{
  if(count<20){
    setCount(count+1)
  }
}
const handldecrement=()=>{
  if(count>1){
    setCount(count-1)
  }
}
  return (
           <>
            <div className='btn-container'>
            <button className='btn' onClick={handleincrement}>plus product</button>
            <button className='btn' onClick={handldecrement}>minus product</button>
            </div>
            <div className="counter-container">
            {firstProduct.map((product)=>(
                <div key={product.id} className='counter'>
                    <img src={product.image} alt=""/>
                    <h3>{product.title}</h3>
                    <p>price: ${product.price}</p>
                    <p>{product.category}</p>
                    <Link to={`/singleproduct/${product.id}`}><button>buy now</button></Link>
                </div>
            ))}      
            </div>
          </>
  );
}

export default Counterfetch;
