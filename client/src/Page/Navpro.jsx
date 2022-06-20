// import {
//   Box,
//   Flex,
//   Text,
//   IconButton,
//   Image,
//   Input,
//   Button,
//   Stack,
//   Collapse,
//   Icon,
//   Link,
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
//   useColorModeValue,
//   useBreakpointValue,
//   useDisclosure,
// } from '@chakra-ui/react'

// import {
//   HamburgerIcon,
//   CloseIcon,
//   ChevronDownIcon,
//   ChevronRightIcon,
// } from '@chakra-ui/icons'

// import {RiShoppingCart2Line} from "react-icons/ri"
// import { AiOutlineSearch } from "react-icons/ai";

// import { FaRegUser } from "react-icons/fa";
// import "../css/navbar.css"
// import Login from '../Page/Login';
// import { useDispatch, useSelector } from "react-redux";
// import { toggledrawer } from '../Redux/Action';



// export default function Navbarbro() {
//   const drawer   = useSelector((s)=>s.drawer)
//   const dispatch = useDispatch()
//   const { isOpen, onToggle } = useDisclosure();

//   return (<>
  

//     <Box className='navprocont'>
//       <Flex
//         bg={useColorModeValue("white", "gray.800")}
//         color={useColorModeValue("gray.600", "white")}
//         minH={"60px"}
//         py={{ base: 2 }}
//         px={{ base: 4 }}
//         borderBottom={1}
//         borderStyle={"solid"}
//         borderColor={useColorModeValue("gray.200", "gray.900")}
//         align={"center"}
//         padding="0.75rem 7vw"
//       >
//         <Flex
//           flex={{ base: 1, md: "auto" }}
//           ml={{ base: -2 }}
//           display={{ base: "flex", md: "none" }}
//         >
//           <IconButton
//             onClick={onToggle}
//             icon={
//               isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
//             }
//             variant={"ghost"}
//             aria-label={"Toggle Navigation"}
//           />
//         </Flex>
//         <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
//           <Text
//             textAlign={useBreakpointValue({ base: "center", md: "left" })}
//             fontFamily={"heading"}
//             color={useColorModeValue("gray.800", "white")}
//           >
//             <Image
//               src="https://mamaearthp.imgix.net/wysiwyg/mamaearth-logo.png?auto=format&fit=scale"
//               width="140px"
//             ></Image>
//           </Text>
//           <Box display={{ base: "none", md: "flex" }} align={"left"}>
//             <input
//               type="text"
//               placeholder="Search for Products..."
//               className="navserach"
//             />
//             <button className="navsearchbutton">
//               <AiOutlineSearch className="navsearchicon" /> Search
//             </button>
//           </Box>
//         </Flex>

//         <Stack
//           flex={{ base: 1, md: 0 }}
//           justify={"flex-end"}
//           direction={"row"}
//           spacing={6}
//         >
//           <Button
//             as={"a"}
//             fontSize={"20"}
//             fontWeight={400}
//             variant={"link"}
//             href={"#"}
//             onClick={() => {
//               dispatch(toggledrawer(!drawer))
//             }}
//           >
//             <RiShoppingCart2Line
//               style={{ color: "#20B8F1", marginRight: "10px" }}
//             />

//             <Text fontSize={"0.875rem"} display={{ base: "none", md: "flex" }}>
//               Cart
//             </Text>
//           </Button>
//           <Button
//             as={"a"}
//             fontSize={"20"}
//             fontWeight={400}
//             variant={"link"}
//             href={"#"}
//           >
//             <Box className='loginbox'>
//             <Login/>
            
//             </Box>
           

//           </Button>
//         </Stack>
//       </Flex>
           
//       <Box
//         display={{ base: "none", md: "flex" }}
//         padding="0.5rem 7vw"
//         border-top="1px solid rgb(234, 234, 234)"
//         boxShadow="rgb(0 0 0 / 10%) 0px 3px 6px"
//       >
//         <Flex display={{ base: "none", md: "flex" }} align={"left"}>
//           <DesktopNav />
//         </Flex>
//       </Box>
//       <Collapse in={isOpen} animateOpacity>
//         <MobileNav />
//       </Collapse>
//     </Box>
//     </>
//   );
// }

// const DesktopNav = () => {
//   const linkColor = useColorModeValue('gray.600', 'gray.200');
//   const linkHoverColor = useColorModeValue('gray.800', 'white');
//   const popoverContentBgColor = useColorModeValue('white', 'gray.800');
 
//   return (
//     <Stack direction={"row"} spacing={4} align={"left"} textAlign="left" >
//       {NAV_ITEMS.map((navItem) => (
//         <Box key={navItem.label}>
//           <Popover trigger={"hover"} placement={"bottom-start"}>
//             <PopoverTrigger>
//               <Link
//                 color="rgb(92, 92, 92)"
//                 p={2}
//                 href={navItem.href ?? "#"}
//                 fontSize={"0.8rem"}
//                 fontWeight={600}
//                 color={linkColor}
//                 _hover={{
//                   textDecoration: "none",
//                   color: linkHoverColor,
//                 }}
//               >
//                 {navItem.label}
//               </Link>
//             </PopoverTrigger>

//             {navItem.children && (
//               <PopoverContent
                
//                 boxShadow={"xl"}
//                 bg={popoverContentBgColor}
//                 p={4}
//                 borderTop={"2px"}
//                 borderTopStyle={"bold"}
//                 borderTopColor={"#00AFEF"}
//               >
//                 <Stack direction="flex">
//                   {navItem.children.map((child) => (
//                     <DesktopSubNav key={child.label} {...child} />
//                   ))}
//                 </Stack>
//               </PopoverContent>
//             )}
//           </Popover>
//         </Box>
//       ))}
//     </Stack>
//   );
// };

// const DesktopSubNav = (child) => {
//   const Lable = child.label
//   const array = child.children
//   // const Hef = child.href;
//   // const sublable = child.subLabel;

//   // console.log(Hef,sublable)
//      // href={e.href}
 
//      return <div  style={{
//       marginRight:"10px"
//      }} >
//     <Text fontSize={"m"}>{Lable}</Text>
// {array?.map((e) => {
//   return (
//     <Link
//       role={"group"}
//       display={"block"}
//       p={2}
//       rounded={"md"}
//       to={e.href}
//       key={e.subLabel}
//       _hover={{
//         textDecoration: "none",
//         color: "rgb(92, 92, 92)",
//       }}
//       textalign="left"
//     >
//       <Stack
//         direction={"row"}
//         align={"left"}
//         // border="2px"
//         // borderStyle="solid"
//         // borderColor="red"
//       >
//         <Box
//           _hover={{
//             textDecoration: "none",
//             color: "rgb(92, 92, 92)",
//           }}
//         >
//           {/* <Flex >
//             <Text
//               transition={"all .3s ease"}
//               _groupHover={{ color: "pink.400" }}
//               fontWeight={500}
//             >
          
//             </Text>
//           </Flex> */}
//           <Text
//             textalign="left"
//             fontSize={"0.8rem"}
//             color="rgb(152, 152, 152)"
//             _hover={{
//               textDecoration: "none",
//               color: "rgb(92, 92, 92)",
//             }}
//           >
//             {e.subLabel}
//           </Text>
//         </Box>
//         {/* <Flex
//           transition={"all .3s ease"}
//           transform={"translateX(-10px)"}
//           opacity={0}
//           _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
//           justify={"flex-end"}
//           align={"center"}
//           flex={1}
//         >
//           <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
//         </Flex> */}
//       </Stack>
//     </Link>
//   );
//   })}
//   </div>
// };

// const MobileNav = () => {
//   return (
//     <Stack
//       bg={useColorModeValue('white', 'gray.800')}
//       p={4}
//       display={{ md: 'none' }}>
//       {NAV_ITEMS.map((navItem) => (
//         <MobileNavItem key={navItem.label} {...navItem} />
//       ))}
//     </Stack>
//   );
// };

// const MobileNavItem = ({ label, children, href }: NavItem) => {
//   const { isOpen, onToggle } = useDisclosure();

//   return (
//     <Stack spacing={4} onClick={children && onToggle}>
//       <Flex
//         py={2}
//         as={Link}
//         href={href ?? '#'}
//         justify={'space-between'}
//         align={'left'}
//         _hover={{
//           textDecoration: 'none',
//         }}>
//         <Text
//           fontWeight={600}
//           color={useColorModeValue('gray.600', 'gray.200')}>
//           {label}
//         </Text>
//         {children && (
//           <Icon
//             as={ChevronDownIcon}
//             transition={'all .25s ease-in-out'}
//             transform={isOpen ? 'rotate(180deg)' : ''}
//             w={6}
//             h={6}
//           />
//         )}
//       </Flex>

//       <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
//         <Stack
//           mt={2}
//           pl={4}
//           borderLeft={1}
//           borderStyle={'solid'}
//           borderColor={useColorModeValue('gray.200', 'gray.700')}
//           align={'start'}>
//           {children &&
//             children.map((child) => (
//               <Link key={child.label} py={2} href={child.href}>
//                 {child.label}
//               </Link>
//             ))}
//         </Stack>
//       </Collapse>
//     </Stack>
//   );
// };

// interface NavItem {
//   label: string;
//   subLabel?: string;
//   children?: Array<NavItem>;
//   href?: string;
// }

// const NAV_ITEMS: Array<NavItem> = [
//   {
//     label: "Home",
//     href: "#",
//   },
//   {
//     label: "BABY",
//     children: [
//       {
//         label: "Explore",
//         children: [
//           {
//             subLabel: "New Launches",
//             href: "#",
//           },
//           {
//             subLabel: "Best Sellers",
//             href: "#",
//           },
//           {
//             subLabel: "Combos",
//             href: "#",
//           },
//           {
//             subLabel: "Gift Packs",
//             href: "#",
//           },
//         ],
//       },
//       {
//         label: "Baby",
//         children: [
//           {
//             subLabel: "Baby Shampoo",
//             href: "#",
//           },
//           {
//             subLabel: "Baby Oralcare",
//             href: "#",
//           },
//           {
//             subLabel: "Baby oil",
//             href: "#",
//           },
//           {
//             subLabel: "Baby Skin",
//             href: "#",
//           },

//           {
//             subLabel: "Baby Bath",
//             href: "#",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     label: "HAIR",
//     children: [
//       {
//         label: "Explore",
//         children: [
//           {
//             subLabel: "New Launches",
//             href: "#",
//           },
//           {
//             subLabel: "Best Sellers",
//             href: "#",
//           },
//           {
//             subLabel: "Combos",
//             href: "#",
//           },
//           {
//             subLabel: "Gift Packs",
//             href: "#",
//           },
//         ],
//       },
//       {
//         label: "Hair",
//         children: [
//           {
//             subLabel: "Shampoo",
//             href: "#",
//           },
//           {
//             subLabel: "Conditioner",
//             href: "#",
//           },
//           {
//             subLabel: "Hair oil",
//             href: "#",
//           },
//           {
//             subLabel: "Hair Mask",
//             href: "#",
//           },

//           {
//             subLabel: "Hair Serum",
//             href: "#",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     label: "FACE",
//     children: [
//       {
//         label: "Explore",
//         children: [
//           {
//             subLabel: "New Launches",
//             href: "#",
//           },
//           {
//             subLabel: "Best Sellers",
//             href: "#",
//           },
//           {
//             subLabel: "Combos",
//             href: "#",
//           },
//           {
//             subLabel: "Gift Packs",
//             href: "#",
//           },
//         ],
//       },
//       {
//         label: "Face",
//         children: [
//           {
//             subLabel: "Face Wash",
//             href: "#",
//           },
//           {
//             subLabel: "Face Cream",
//             href: "#",
//           },
//           {
//             subLabel: "Face Serum",
//             href: "#",
//           },
//           {
//             subLabel: "Face Scrub",
//             href: "#",
//           },

//           {
//             subLabel: "Face Toner",
//             href: "#",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     label: "BODY",
//     children: [
//       {
//         label: "Explore",
//         children: [
//           {
//             subLabel: "New Launches",
//             href: "#",
//           },
//           {
//             subLabel: "Best Sellers",
//             href: "#",
//           },
//           {
//             subLabel: "Combos",
//             href: "#",
//           },
//           {
//             subLabel: "Gift Packs",
//             href: "#",
//           },
//         ],
//       },
//       {
//         label: "Body",
//         children: [
//           {
//             subLabel: "Body Wash",
//             href: "#",
//           },
//           {
//             subLabel: "Hand Cream",
//             href: "#",
//           },
//           {
//             subLabel: "Body Lotion",
//             href: "#",
//           },
//           {
//             subLabel: "Body Scrub",
//             href: "#",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     label: "GIFT PACKS",
//     href: "#",
//   },
//   {
//     label: "ALL PRODUCTS",
//     href: "#",
//   },
//   {
//     label: "BLOG",
//     href: "#",
//   },
//   {
//     label: "PLANT GOODNESS",
//     href: "#",
//   },
//   {
//     label: "STORE LOCATOR",
//     href: "#",
//   }
// ];


//   // subLabel: "Best Sellers",
//         // href: "#",
//         // subLabel: "Combos",
//         // href: "#",
//         // subLabel: "Gift Packs",
//         // href: "#",