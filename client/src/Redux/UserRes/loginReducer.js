
import { Logintype, sigleprotype } from "./loginaction";

const init = {
    mobileno:"9643943996",
    otp: "",
    loading: true,
    OneProduct: {"_id":"62ab4c6e9fac23a850dea4df","img":"https://honasa-mamaearth-production.imgix.net/o/n/onion-hair-shampoo-4000ml-with-ingredient_3.jpg?auto=format&fit=crop&w=683&auto=compress","rate":"0","price":449,"title":"Onion Shampoo with Onion & Plant Keratin for Hair Fall Control - 400ml","sub_title":"Reduces Hair Fall | Strengthens Hair |Softens Hair","img2":"https://mamaearth.in/static/mamaearth/star.svg","rating":"3.5","img_url":"https://mamaearth.in/static/mamaearth/verified.svg","review":"2000 Reviews","category":"baby"},
    error:false
}


const LoginReducer = (state=init,action) => {
    switch (action.type) {
      case( Logintype.Addphonenumber): {
       return { ...state, mobileno:  action.payload };
        }
        case( Logintype.Otp): {
       return { ...state, otp:  action.payload };
        }
        case( sigleprotype.SProductreq): {
       return { ...state,  loading: true, };
        }
        case( sigleprotype.SProductsucess): {
       return { ...state,  loading: false,
    OneProduct:  action.payload,
    error:false };
        }
        case( sigleprotype.SProducterror): {
       return { ...state, loading: false,
        error:true};
        }
        
            
      default:
        return state
    }
      
  


}
 
export default LoginReducer;