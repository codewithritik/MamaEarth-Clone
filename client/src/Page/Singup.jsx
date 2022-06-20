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
    Input,
  Box,
  Stack
} from '@chakra-ui/react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { FaRegUser } from 'react-icons/fa'
import ".././css/signform.css"

import { Radio, RadioGroup } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import {OtpPage} from "./OtpPage.jsx"



export const  Signupform = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
const mobileno = useSelector((s) => s.Logreducer.mobileno)
  

  return (
    <Box className='logincont'>
   <Button onClick={onOpen} className='logotpbtn'>LOGIN WITH OTP </Button>
      <Modal  closeOnOverlayClick={true} onCloseComplete={true}
isOpen={isOpen} onClose={onClose}  useInert={ true }>
        <ModalOverlay />
       
        <ModalContent>
            
          <ModalHeader className='loginheding'>
           
            <AiOutlineArrowLeft color='black'  onClick={onClose} />

            Signup for the Goodness Inside</ModalHeader>
         
       
          <ModalBody pb={6}>
           
                    
                      <Box className='singInput box'>
                          <form action="" className="signform">
                              
                <div className='mobilenodiv'>{ mobileno}</div>
                <Input  placeholder='First Name' type={"text"} required focusBorderColor="#40A8DD"  />
                <Input  placeholder='Last Name' type={"text"} required  focusBorderColor="#40A8DD" />
                <Input  placeholder='Email-ID' type={"email"} required  focusBorderColor="#40A8DD" />
                <div>
                   <p>Gender</p>
{/*                 <input  type="radio" id="Male" name="fav_language" value="Male"/>
                <label htmlFor="Male">Male</label>
                <input  type="radio" id="Femail" name="fav_language" value="Female"/>
                <label htmlFor="Female">Female</label>
                <input  type="radio" id="Not Specified" name="fav_language" value="Not Specified"/>
                <label htmlFor="Not Specified">Not Specified</label> */}
              <RadioGroup >
      <Stack direction='row'>
        <Radio value='Male' colorScheme='telegram' >Male</Radio>
        <Radio value='Female' colorScheme='telegram' >Female</Radio>
        <Radio value='Not Specified' colorScheme='telegram' >Not Specified</Radio>
      </Stack>
    </RadioGroup>
                </div>
                <Input type="date"  required  focusBorderColor="#40A8DD" />
                
                  <OtpPage />
                
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

