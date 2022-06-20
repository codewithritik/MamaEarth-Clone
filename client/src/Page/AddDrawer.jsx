import { useSelector,useDispatch } from "react-redux"
import "../css/drawer.css"
import {AiOutlineArrowLeft} from "react-icons/ai"
import { Getcartdata, toggledrawer } from "../Redux/Action"
import { useEffect, useState } from "react"
import { TbDiscount2 } from "react-icons/tb"
import { useNavigate } from "react-router-dom"

export const CartDrawer = () => {
    const drawer = useSelector((s) => s.product.drawer)
    
    

    const navigate =  useNavigate()
    const dispatch = useDispatch()
    const id = useSelector((e) => e.product.Id)


    const cartData = useSelector((e) => e.product.Cartdata)
    const [price,setprice] = useState(0)
    
  
 
  
    useEffect(() => {  
        if (cartData) {
         {cartData?.map((e) =>
                setprice(price+(e.price))
            )
        }
        }
       
    }, [cartData])
   
  return (
    <>
    
    <div className={drawer ? "hidedrawer" : "drawer"}>
          <div className="drawercontdiv">
      <div className="draheader">
          <div>
          <AiOutlineArrowLeft onClick={() => {
            dispatch(toggledrawer(!drawer))
        }}/>
        </div>
        <div> My Cart</div>
        </div>

        <div className="ordersumdiv">
          <h1>Order Summery</h1>
          <div className="cartprodiv">
                          {cartData?.map((e) => {
                        
                           
                              return <div className="cartcont" key={e._id}>
                                  <div className="cartimg">
                                      <img src={e.img}  />
                                  </div>
                                   
                                  <div className="cartext">
                                      <h3>{e.title}</h3>
                                      <div className="cartprdiv">
                                          <div className="cartprice">₹ {e.price}</div>
                                          
                                          <div className="cartstock" >
                                              <button>-</button>
                                                <button>1</button>
                                              <button>+</button>
                                          </div>
                                      </div>
                                  </div>
                                
                            </div>
                              
                          })}

          </div>
                           
            <div className="cartempty" ></div>
                      <div className="applyoff"><TbDiscount2 style={{
                              fontSize:"23px"
                          }}/> &nbsp; Apply Offers</div>
                      <div className="cartempty" ></div>
                      <div className="pricesum">Price Summary</div>
                      <div className="orderdiv"> <span>Order Total</span> <span>₹{ price }</span></div>
                      <div className="orderdiv"> <span>5% online payment discount</span> <span style={{
                          color: "green"
                      }}>-₹0</span></div>
                                            <div className="orderdiv"> <span>Shipping</span> <span style={{
                          color: "green"
                      }}>Free</span></div>
                     <div className="orderdiv"> <span>Grand Total</span> <span style={{
                          fontSize: "21px",
                          fontWeight: "bold",
                         }}>Free</span></div>
                  </div>  
                  <div className="cartfotter">
                      <div className="cartft">
                          <div>
                              <h1>₹{ price }</h1>
                              <h2>View Details</h2>
                          </div>
                          <div><button className="cartbtn" onClick={() => {
                              dispatch(toggledrawer(!drawer));
                              navigate("/checkout")

                          }}>Continue</button></div>
                      </div>
                  </div>
    </div>
    </div>
    <div className={drawer?"hidedrawer":"overlay"} >

      </div>
    </>
  )
}
//   category: "baby"
// img: "https://honasa-mamaearth-production.imgix.net/v/i/vitamin-c-oil-moisturizer-with-box-_-ingredients-copy.jpg?auto=format&fit=crop&w=683&auto=compress"
// img2: "https://mamaearth.in/static/mamaearth/star.svg"
// img_url: "https://mamaearth.in/static/mamaearth/verified.svg"
// price: 399
// rate: "0"
// rating: "4.5"
// review: "42 Reviews"
// sub_title: "Non-Sticky Moisturization | Restores Radiance"
// title: "Vitamin C Oil-Free Moisturizer For Face with Vitamin C and Gotu Kola for Skin Illumination - 80 ml"
// _id: "62ab4c6e9fac23a850dea4e1"