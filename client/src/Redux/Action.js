import axios from 'axios';
import { useSelector } from 'react-redux';

export const productType = {
    proreq:"productloadding",
    prosucess:"productsucess",
    proerror:"producterror"
}


const proreqfun  = () => { 
    return{
        type:productType.proreq
    }
}

const prosucessfun =(data)=>{
     return {
       type: productType.prosucess,
        payload:data
     };
}

const proerrorfun = (data) => {
  return {
    type: productType.proerror,
      payload:data
  };
};


export const getprodata = ()=>(dispatch)=>{
  dispatch(proreqfun())
return axios.get("https://mamabackend.herokuapp.com/data")
  .then((res) => dispatch(prosucessfun(res.data)))
  .catch((e) => {
    
    dispatch(proerrorfun(e))
  });
}


export const cartId = {
    Addtooreq:"aaddtocartoadding",
    Addtosucess:"addtocarttsucess",
    Addtoerror:"addtocarterror"
}


      

const addreqfun  = () => { 
    return{
        type:productType.proreq
    }
}

export const addsucessfun =(data)=>{
     return {
       type: cartId.Addtosucess,
        payload:data
     };
}


export const drawervalue = {
  drawer:"drawervalue"
}

export const toggledrawer = (data) => {
  
  return {
    type: drawervalue.drawer,
    payload:data
  }
}

export const CartDataType = {
  cartsucess: "sucessadddata",
  alertbox:"alertbox"
}

const Addsucess = (data) => {
  return {
    type: CartDataType.cartsucess,
    payload:data
    
  }
}

export const alertboxcall = (data) => {
  return {
    type: CartDataType.alertbox,
    payload:data
  }
}


export const Getcartdata = (Id) => (dispatch)=>{
  
  return (
    axios.get(`https://mamabackend.herokuapp.com/data/${Id}`)
      .then((res) => {

           dispatch(Addsucess(res.data))
      
      })
      .catch((e) => {
      console.log(e)
    })
  )


}
