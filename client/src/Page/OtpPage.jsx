import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
    Image,
  Box,
  Input
} from '@chakra-ui/react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { FaRegUser } from 'react-icons/fa'
import ".././css/login.css"

import OTPInput, { ResendOTP } from "otp-input-react";

import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


export const OtpPage=()=> {


  const { isOpen, onOpen, onClose } = useDisclosure()
  const mobileno = useSelector((s) => s.Logreducer.mobileno)
  const [number, setnu] = useState("")
   const [OTP, setOTP] = useState("");
 
  const navigate  = useNavigate()
  useEffect(() => {
    
    setnu(mobileno.split(""))
   
    
  }, [])

 
  
  return (

    <Box className='logincont'>
      <Button onClick={onOpen} className='singupbtn'>SIGN UP </Button>
                             
      <Modal  closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose} useInert={ true } onCloseComplete={true}  
      returnFocusOnClose={true}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className='loginheding'>Verify OTP</ModalHeader>
                
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Box className="loginimgbox">
                          <Image src='https://mamaearth.in/static/mamaearth/otp.svg'></Image>    
                      </Box>
                      <p style={{
              textAlign: "center",
              marginTop: "20px",
              fontSize: "18px",
                        fontWeight:"bold"
                         }}>sent to <span style={{
                            color:"rgb(0, 174, 239)",
              }}>xxxxxx{number[6]}{number[7]}{number[8]}{number[9]}</span></p>
                      <Box className='inputbox'>
                          <form action="" className="formlogin">
                <p>Enter OTP</p>
                <div className="outinputdiv">

                  <OTPInput inputClassName={"otpinput"} value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false} secure />
                 
                </div>
                              <p className='loginp'><span>Resend OTP</span> </p>
                              
                <Button className='logotpbtn'
                  onClick={onClose}
                >VERIFY</Button>
                <span style={{
                  fontSize: "10px",
                  marginTop:"20px",
                         }} >DO NOT SHARE THIS OTP WITH ANYONE</span>
                          </form>
                      </Box>

          </ModalBody>

          <ModalFooter>
            
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}