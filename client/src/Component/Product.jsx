import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { getprodata } from "../Redux/Action.js"
import { ButtonGroup, ProSlider } from "./Proslider";
import "../css/proslider.css";
import styled from 'styled-components';
import { Loadingfunction } from "./Loading.jsx";
import Navbarbro from "../Page/Navpro.jsx";


const Button = styled.button`
     background-color: #00afef;
  width: fit-content;
  padding: 15px 2rem;
  position: relative;
  line-height: 1rem;
  color:white;
  border-radius: 5px;
  text-align: center;
  font-size: 15px;
  transition: all 0.2s ease-in-out 0s;
@media only screen and (max-width: 768px){
position: absolute;
right: 10px;
top: 5px;
 margin-top:5px;
padding: 10px 1rem;
color: #41A8DD;
background-color: transparent;
border-radius: 25px;
border: 2px solid #41A8DD;

}
@media only screen and (max-device-width: 480px) {
    /* styles for mobile browsers smaller than 480px; (iPhone) */
padding: 5px 0.5rem;
  }
`;

const Product = (props) => {  
  const [prodata, setdata] = useState([]);
  const [loading, setlod] = useState(true)
  const url = props.prodata.url

  useEffect(() => {
    axios(`https://mamabackend.herokuapp.com/category/${url}`)
      .then((res) =>
        setdata(res.data.product))
      .catch((err) => {
      console.log(err)
      })
    
    const setime = setTimeout(() => {
      setlod(false)
    }, 3000);

    return () => clearInterval(setime)
    
  }, [url]);

 
  
  return (<div>
     
    {loading ? <Loadingfunction /> : <div className="productcont">
        <div className="producttext">
          <div>
          <h2 className="h2tagpro">{props.prodata.text}</h2>
          <p className="ptagpro">{props.prodata.para}</p>
            <Button >VIEW ALL</Button> 
          </div>
    </div>   
        <div className="sliderprodiv">
        <ProSlider data={prodata} />
        </div>
      </div> }
      </div>
    );
}
 
export default Product;