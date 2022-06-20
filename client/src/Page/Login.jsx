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
import { useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { FaRegUser } from 'react-icons/fa'
import ".././css/login.css"
import { useDispatch, useSelector } from 'react-redux'
import { Signupform } from './Singup'
import { Userphone } from '../Redux/UserRes/loginaction'
// import { Postmobile, Userphone } from '../../UserRes/loginaction'

function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()
  
  
  
  const [input,setinput ] =useState("9643943996")
  const Handlechange = (e) => {
    setinput(e.target.value)
  }
  

  return (
    <Box className='logincont'>
      <Button onClick={onOpen} className="loginbtn" > <FaRegUser style={{ color: "#20B8F1", marginRight: "10px" }} /> <Text fontSize={"0.875rem"} display={{ base: "none", md: "flex" }}>
              Login
            </Text>  </Button>

      <Modal useInert={ true } closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose} useInert={true} closeOnOverlayClick={true} onCloseComplete={true}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className='loginheding'>Log in to get started</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Box className="loginimgbox">
                          <Image src='https://mamaearth.in/static/mamaearth/login.svg'></Image>              
                          <span>Get access to your orders, track previous order & Redeem Mama Cash</span>
                      </Box>
                      <Box className='inputbox'>
                          <form action="" className="formlogin">
                              
                <Input placeholder='Phone number' onChange={Handlechange}  required type={"text"} errorBorderColor="red.500" htmlSize="10"  focusBorderColor="#40A8DD" />
                              
                <p className='loginp'>By Continuing, you agree to Mamaearth's <span>Terms and conditions</span> and <span>Privacy policy</span></p>
                <div onClick={() => {
                  dispatch(Userphone(input))
                }}> 
                 

                <Signupform />
            
                </div>  
                              <button className='logguestbtn'>CONTINUE AS GUEST</button>
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
export default Login






