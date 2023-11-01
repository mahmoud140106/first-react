import {React,useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import'./single.css'

const API_ENDPOINT = "https://fakestoreapi.com/products/:id";

function Single() {
  
  const params=useParams();
  const proid=params.id

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataById = async (id) => {
      const response = await axios.get(API_ENDPOINT.replace(":id", id));
      setData(response.data);
    };

    fetchDataById(proid); // Fetch data by ID 
  }, [proid]);
  return (
    <>
    <div>
      {data && (
       <>
        <section className="item">
            <div className="left"><img  src={data.image} alt=""/></div>
            <div className="right">
                <h2>{data.title}</h2>
                <p>price :<span>  {data.price}</span></p>
                <p>category :<span>  {data.category}</span></p>
                {/* <p>availibility :<span>in stock</span></p> */}
                <p className="paragraph">{data.description}</p>
                <div className="range">
                    <div>
                        <label htmlFor="quantity">quantity: </label>
                        <input type="number" name="" id="quantity"/>
                    </div>
                    <div className="arrow">
                        <div><i className="fa-solid fa-chevron-up"></i></div>
                        <div><i className="fa-solid fa-chevron-down"></i></div>
                    </div>
                    <button className="btn">add to chart</button>
                </div>
                <div className="icon"><i className="fa-regular fa-gem"></i></div>
                <div className="icon"><i className="fa-regular fa-heart"></i></div>
            </div>
        </section>
       </>
      )}
    </div>
    </>
  );
}
export default Single;
