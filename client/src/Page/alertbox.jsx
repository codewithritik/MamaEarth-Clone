import { useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { alertboxcall } from "../Redux/Action";
export const Alertbox = () => {
    const showAlert = useSelector((s) => s.Alert)
    const dispatch = useDispatch()
    useEffect(() => {
    setInterval(() => {
      dispatch(alertboxcall(false))
    }, 3000);
  },[showAlert])
 

    return <>
        <div className={showAlert ? "showalert" : "hidealert"}>riitk</div>
    </>
}