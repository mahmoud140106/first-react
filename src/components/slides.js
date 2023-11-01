import{React,useEffect,useState} from 'react'
import axios from 'axios';
import'./product.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Navigation, Pagination} from 'swiper/modules';
import'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Link} from 'react-router-dom';


function Slides() {
    const[products,setProduct]=useState([]);
    useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then((response)=>{
      setProduct(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })

  return (
           <>
          <Swiper 
          modules={[Autoplay,Navigation, Pagination]}  
          spaceBetween={75} 
          // slidesPerView={4} 
          breakpoints = {{
            1024: {
                slidesPerView: 3,
                // spaceBetweenSlides: 75
            },
            768: {
                slidesPerView: 2,
                // spaceBetweenSlides: 75
            },
            450: {
                slidesPerView: 1,
                // spaceBetweenSlides: 100
            }
          }}

          navigation pagination={{ clickable: true }} 
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)} 
          autoplay={{delay: 4000, disableOnInteraction: false, }
        }>
            {products.map((product)=>(
                    <SwiperSlide key={product.id}>
                        <img src={product.image} alt=""/>
                        <h1>{product.title}</h1>
                        <div className='content'>
                        <p>price: {product.price}</p>
                        <p>{product.category}</p>
                        </div>
                        <Link className='buy' to={`/singleproduct/${product.id}`}>buy now</Link>
                    </SwiperSlide>
                ))}      
          </Swiper>
          </>
  );
}

export default Slides;