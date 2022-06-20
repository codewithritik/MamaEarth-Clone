import axios from "axios"
export const Logintype = {
    Addphonenumber: "addphonenumber",
    Otp: "otpnoumber",
    SProductreq : "signleloading",
    SProductsucess: "signlesucess",
    SProducterror : "signleerror"
}

export const Userphone = (data) => {
    return {
        type: Logintype.Addphonenumber,
        payload:data
    }
}
export const Otpno = (data) => {
    return {
        type: Logintype.Otp,
        payload:data
    }
}





export const Postmobile = (data) => (dispatch) => {
    console.log(data)
    return (
        axios.post("https://beautibebo.herokuapp.com/users", {
            "first_name": "adarsha",
            "second_name": "khatua",
            "email": "awgadjb@.com",
            "phone": 96436,
            "password": "54346546"
        })
        .then((res) => {
                console.log(res)
        })
        .catch((r) => {
            console.log(r)
        })
    )
}




export const sigleprotype = {
   
    SProductreq : "signleloading",
    SProductsucess: "signlesucess",
    SProducterror : "signleerror"
}




export const SProductrequest = () => {
 return {
        type:Logintype.SProductreq
    }
}

export const SProductsucess = (data) => {
    return {
        type: Logintype.SProductsucess,
        payload:data
    }
}

export const SProducterror = () => {
     return {
        type:Logintype.SProducterror
    }
}


export const GetproId = (id) => (dispatch) => {
   
    dispatch(SProductrequest()
    )
    axios.get(`https://mamabackend.herokuapp.com/data/${id.id}`)
        .then((res) => {
           
            const sucess = SProductsucess(res.data)
            dispatch(sucess)
        })
        .catch((err)=>{
            
           dispatch(SProducterror())
    })
}
