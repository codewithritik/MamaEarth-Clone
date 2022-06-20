import {cartId, drawervalue, productType,CartDataType} from "./Action"

const init  ={
  Loading:false,
  prodata:[],
  error: "",
  Id: ["62ab4c6e9fac23a850dea4df","62ab4c6e9fac23a850dea4e3"],
  drawer: true,
  Cartdata: [],
  Alert:false
    
}

const Redux = (state=init,action) => {
    switch (action.type) {
      case( productType.proreq): {
        return {
          ...state,
          Loading: true,
        };
      }
      case (productType.prosucess): {
        return {
          ...state,
          Loading: false,
          prodata:action.payload
        };
      }
      case (productType.proerror): {
        return {
          ...state,
          Loading: false,
          error: action.payload,
        };
      }
      case (cartId.Addtosucess): {
        return {...state, Id:[...state.Id, action.payload]};
      }
      case (drawervalue.drawer): {
        return {
          ...state, 
          drawer:action.payload
      }}
      case (CartDataType.cartsucess): {
        return { ...state, Cartdata: [...state.Cartdata, action.payload] };
      }
      case (CartDataType.alertbox): {
        return {
          ...state,
          Alert: action.payload
          
        }
      }
      default:
        return state
    }
      
  


}
 
export default Redux;