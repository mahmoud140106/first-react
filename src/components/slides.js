import{React,useEffect,useState} from 'react'
import axios from 'axios';
import'./product.css'

import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';
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
  // const swiper=useSwiper()
  const SwiperButtonNext = () => {
    const swiper = useSwiper();
    // return <button className='slide' title='slide' onClick={() => swiper.slideNext()}><i className="fa-solid fa-chevron-right"></i></button>;
    return <div className='slide' title='slide' onClick={() => swiper.slideNext()}><i className="fa-solid fa-chevron-right"></i></div>;

  };
  const SwiperButtonPrev = () => {
    const swiper = useSwiper();
    // return <button className='slide' title='slide' onClick={() => swiper.slidePrev()}><i className="fa-solid fa-chevron-left"></i></button>;
    return <div className='slide' title='slide' onClick={() => swiper.slidePrev()}><i className="fa-solid fa-chevron-left"></i></div>;
  };

  return (
           <>
          
          <Swiper 
          modules={[Autoplay,Navigation, Pagination]}  
          spaceBetween={40} 
          // slidesPerView={4} 
          breakpoints = {{
            1024: {
                slidesPerView: 4,
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

          // navigation 
          // pagination={{ clickable: true }} 
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)} 
          autoplay={{delay: 5000, disableOnInteraction: false, }}
          
          >
            {products.map((product)=>(
                    <SwiperSlide key={product.id}>
                        <img src={product.image} alt=""/>
                        <h1>{product.title}</h1>
                        <div className='content'>
                        <p>price: {product.price}</p>
                        <p>{product.category}</p>
                        </div>
                        <Link className='buy' to={`/singleproduct/${product.id}`}><button>buy now</button></Link>
                    </SwiperSlide>
                ))} 
          <div className='slide-container'>
          <SwiperButtonPrev/>  
          <SwiperButtonNext/>
          </div>  
          </Swiper>
          </>
  );
}

export default Slides;