import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from 'react-router-dom';
import { GetproId } from "../Redux/UserRes/loginaction";
import ".././css/oneproduct.css"
import { Input } from "@chakra-ui/react";

export const OneProduct = () => {
    
    
    const param = useParams()
    const onedata = useSelector((s) => s.Logreducer)
    
    const sindata = (onedata.OneProduct)

  const navitgate  = useNavigate()
    const dispatch = useDispatch()

     useEffect(() => {
        if (param) {
            dispatch(GetproId(param))
        }

     }, [param, dispatch])
    console.log(sindata)
    
    
    return (
        <div className="oneprocont">
            <div className="singproductdata">
                <div className="singimg">
                        <img src={sindata?.img} alt="product" />
                </div>
                <div className="singdes">
                    <h1>{sindata?.title}</h1>
                    <h2>{sindata?.sub_title}</h2>
                    <h6>Price</h6>
                    <h4>₹{sindata?.price}</h4>
                    <p>Inclusive of all Taxes</p>
                    <p style={{
                        color:"red"
                    }}>Currently in 117 carts</p>
                    <p>Check for Delivery Date</p> 
                   <Input  placeholder= 'Enter PIN Code' type={"text"} required focusBorderColor="#40A8DD"  />
                    <img src="https://mamaearthp.imgix.net/wysiwyg/goodness-icons.png" alt="" />
                </div>
               
            </div>

        </div>
    )
    
}