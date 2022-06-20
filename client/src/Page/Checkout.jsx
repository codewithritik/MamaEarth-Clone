import { Button, Drawer, Input, Stack, Text } from '@chakra-ui/react'
import ".././css/checkout.css"
import { Radio, RadioGroup } from '@chakra-ui/react'
import { Newbtn, Viewallbtn } from '../Component/Button'
import { CartDrawer } from './AddDrawer'
import { useEffect, useState } from 'react'
import { useSelector,useDispatch } from "react-redux"
import { TbDiscount2 } from "react-icons/tb"

export const Checkout = () => {
   
    


    
    const cartData = useSelector((e) => e.product.Cartdata)
    
    const [price, setprice] = useState(0)
    
    useEffect(() => {  
        if (cartData) {
         {cartData?.map((e) =>
                setprice(price+(e.price))
            )
        }
        }
       
    }, [cartData])
    
    return (<div className="checkoutcont">
        <div className="checkinput">
            <div className  = "checkheding" >
            <h2>Login to see your existing offers</h2><button > Login</button>
            </div>
                <h3>Delivery Address All fields are mandatory</h3>
            <div className="inputdiv">
                <form action="" className='checkoutform'>
                    <div className='checkadress'>
                <Input placeholder='First Name' required/>
                    <Input placeholder='Last Name'required />

                    </div>
                   <div className='checkadress'>
                <Input placeholder='Email ID' type={"email"} required/>
                    <Input placeholder='Phone Number' required  type={"tel"}/>

                    </div>
                    <div className='checkadress'>
                    <Input placeholder='PIN Code' required  type={"tel"} />
                    <Input placeholder='City' required  />
                    <Input placeholder='State' required  />
                    </div>
                    <Input placeholder='Address(House No, Bulding, Street)'  required/>
                </form>
                <span class="addresstype">Select the type of the Address</span>
                <div class="addressflex">
                    <p class="addresshome">Home</p>
                    <p class="addresslabel">Work</p>
                    <p class="addresslabel">Other</p></div>
            </div>   
            <Text fontSize={"1.1rem"} fontWeight="600" margin={"20px 0px 15px"}>Choose payment method</Text>
            <div className='paymentdiv'>
           

              
                    
                <div className='paymethod'>
   
    <RadioGroup defaultValue='2'>
  <Stack spacing={4} direction='column' className='radio'>
    <Radio value='1'  >
      UPI
    </Radio>
         <Radio value='2'  >
         Credit/Debit Card</Radio>
    <Radio value='3'>Net Banking</Radio>
     <Radio value='4' >Wallets    </Radio>
    <Radio value='5'  >Cash On Delivery</Radio>
    
  </Stack>
</RadioGroup>
                    </div>
                     
                <div className='paymentsucess'>
                    <div className='paymenthead'>

                        <div>
                    Pay Using Credit Or Debit Cards
                        </div>
                        <div className='discunt'>
                    Applied : Extra 5% Off with Your Order
                        </div>    
                    </div>
                    <div className='cardform'>
                        <Input placeholder='Card Number' type={"tel"}/>
                        <div className='cardcvv'>
                            <div>
                                <Input placeholder='MM/YY' type={"tel"}/>
                                
                            </div>
                            <div >
                             <Input placeholder='CVV'  type={"tel"}/>
                                <img src="https://mamaearthp.imgix.net/wysiwyg/creditCardImage.png?auto=format" style={{
                                width:"42px"
                            }} />
                            </div>

                        </div>
                            <Input placeholder='Name on the card' />

                        <Button className='placeorder'>PLACE ORDER</Button>
                        
                        <p>100% Payment Protection, Easy Return Policy</p>

                    </div>
                  <div class="PaymentStrip"><div class="lazyload-wrapper "><img loading="lazy" src="https://mamaearthp.imgix.net/wysiwyg/visa2x.png?auto=format" alt="" class="payment-card-img" /></div><div class="lazyload-wrapper "><img loading="lazy" src="https://mamaearthp.imgix.net/wysiwyg/master_card2x.png?auto=format" alt="" class="payment-card-img" /></div><div class="lazyload-wrapper "><img loading="lazy" src="https://mamaearthp.imgix.net/wysiwyg/american_express2x.png?auto=format" alt="" class="payment-card-img" /></div><div class="lazyload-wrapper "><img loading="lazy" src="https://mamaearthp.imgix.net/wysiwyg/rupay2x.png?auto=format" alt="" class="payment-card-img" /></div><div class="lazyload-wrapper "><img loading="lazy" src="https://mamaearthp.imgix.net/wysiwyg/net_banking2x.png?auto=format" alt="" class="payment-card-img" /></div></div>
                </div>
            </div>
        </div>


        {/* Product mapp data */}

        <div className="checkprodiv">
        <div className="cartdrawer">
          <div className="cartdrawdiv">
      {/* <div className="draheader">
          <div>
          <AiOutlineArrowLeft onClick={() => {
            dispatch(toggledrawer(!drawer))
        }}/>
        </div>
       
        </div> */}

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
                                          
                                          <div className="checkstock" >
                                              Qty:1
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
              
    </div>
    </div>


        </div>

        
        </div>)
}