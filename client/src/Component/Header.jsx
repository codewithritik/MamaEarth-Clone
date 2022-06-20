import "../css/header.css"
import { TbUser } from "react-icons/tb"

const Header = () => {
    return (< div className="headerdiv">
        <div><a>Asia's 1st Brand with MADE SAFE Certified Products</a></div>
        <div><a>Orders Above 599 and Get FREE Vitamin c Day Cream Worth 599 | Use Coupon - FREECREAM | Click to shop</a></div>
        <div><a><TbUser size={16} /> </a></div>
        

        
    </div> );
}
 
export default Header;