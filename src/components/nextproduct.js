import {React,useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import'./single.css'
function Nextproduct(props) {
const proid=props.id;

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataById = async (id) => {
      const response = await axios.get('https://fakestoreapi.com/products/:id'.replace(":id", id));
      setData(response.data);
    };

    fetchDataById(proid); // Fetch data by ID 
  }, [proid]);

  return (
           <>
            {data && (<>
            <Card style={{ width: '20rem' ,display:"inline-block" ,margin:"2rem"}} key={data.id}>
            <Card.Img variant="top" src={data.image} />
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>
                price: {data.price}
                </Card.Text>
                <Card.Text>
                price: {data.category}
                </Card.Text>
                <Button variant="primary" style={{ textDecoration: 'none'}}><Link to={`/singleproduct/${data.id}`}>buy now</Link></Button>
            </Card.Body>
            </Card>
            </>)}
          </>
  );
}

export default Nextproduct;
