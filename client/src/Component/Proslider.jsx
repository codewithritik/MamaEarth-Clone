import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import axios from "axios";
import "../css/proslider.css";

import {React } from "react"
import {AiOutlineArrowLeft} from "react-icons/ai"
import { addsucessfun, alertboxcall, Getcartdata, toggledrawer } from "../Redux/Action";
import { useDispatch ,useSelector} from "react-redux";
import { CartDrawer } from "../Page/AddDrawer";
import { useNavigate } from 'react-router-dom';





export const Addtocard = styled.button`
      border-radius: 0px 0px 5px 5px;
    flex: 1 1 0%;
    background-color: white;
    width:100%;
    border: 0.12rem solid rgb(0, 174, 239);
    color: rgb(0, 175, 239);
    font-weight: bold;
    padding: 0.7rem 1rem;

    &:hover{
      background-color: rgb(0, 175, 239);
      color:white;
    }
`; 

 


export const ProSlider = (data) => {
  


  const drawer   = useSelector((s)=>s.drawer)
  const dispatch = useDispatch()
  const prodata = (data.data)
  const [id, setid] = useState()
   const navitgate  = useNavigate()




  const handlechange = (c) => {
    dispatch(addsucessfun(c))
    dispatch(Getcartdata(c))
    alert("Your product sucessfully add to cart") 
  }

  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 900 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 900, min: 600 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 2,
    },
  };
  
  const Handleonepro = (id) => {
    
    return navitgate(`/product/${id}`)
  
  }




  return <div >
     
     <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          keyBoardControl={true}
          customTransition="all .5"
          arrows={false}
          containerClass="carousel-container"
  
          removeArrowOnDeviceType={["mobile"]}
          itemClass="carousel-item-padding-40-px"
        >
  

          {prodata?.map((e) => {
            return <div key={e._id} className="productslidediv" >
              <div className="innerprodiv" key={e._id}>

                <img src={e.img} className="prosliderimg" onClick={() => {
              Handleonepro(e._id)
            }} />
                <span className="proslidertitle">{e.title}</span>
                <p className="proslidersub">{e.sub_title}</p>
                <div className="proreviewdiv">
                  <span className="rating">
                    <img src="https://mamaearth.in/static/mamaearth/star.svg" alt="start" />
                    &nbsp;
                    {e.rating}</span>
                  <span className="proreview">
                    <img src="https://mamaearth.in/static/mamaearth/verified.svg" alt="earth" />
                    &nbsp;
                    {e.review}</span>
                </div>
                <div className="propricediv">

                  <p className="proprice">₹{e.price}</p>
                </div>
          
                <Addtocard onClick={() => {
                  handlechange(e._id);
               
                }}>ADD TO CART</Addtocard>

                

                <div className="bestsellercont"><div>best seller</div></div>

          
              </div>
          
            </div>
          })}
   
    </Carousel>
    
         <CartDrawer/>
   
             
    </div>


};
//category: "baby"
// img: "https://honasa-mamaearth-production.imgix.net/u/b/ubtan-hair-removal-kit.jpg?auto=format&fit=crop&w=332&auto=compress"
// img2: "https://mamaearth.in/static/mamaearth/star.svg"
// img_url: "https://mamaearth.in/static/mamaearth/verified.svg"
// price: 449
// rate: "0"
// rating: "5|"
// review: "40 Reviews"
// sub_title: "Removes Hair in 8 Minutes | Delays Hair Growth"
// title: "Ubtan Nourishing Hair Removal Kit & Growth Reduction - 100g"
// _id: "62a8b7d89fac23a850e28607"
