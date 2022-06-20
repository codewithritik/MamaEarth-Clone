import Header from "./Header";
import WithSubnavigation from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../Page/Home"
import Loading  from "./Loading";
import Login, { OtpPage } from "../Page/Login";

import { Signupform } from "../Page/Singup";
import { Drawer } from "../Page/AddDrawer";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Checkout } from "../Page/Checkout";
import { OneProduct, Product } from "../Page/OnePro";



const AllRouter = () => {

    
    return (<div>
          <Header />
        <WithSubnavigation />
      
        
    {/* <DrawerExample/> */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/product/:id" element={<OneProduct/>}/>
        </Routes>
    </div> );
}
 
export default AllRouter;
 // <Route path="/" element={<Home/>} />