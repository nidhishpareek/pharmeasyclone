import { Box, Button, Flex, Heading, Image, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Hide } from '@chakra-ui/react'
import React from 'react';
import { useSelector } from 'react-redux';
import { Order } from './Order';


export const Payment = () => {
    const { totalAmount,totalOriginalAmount } = useSelector((state) => state.cart);
    
  return (
    <Box display="flex" w={{base: "90%", sm:"90%", md:"90%", lg:"90%", xl:"70%"}} m="auto" justifyContent="space-between"  mt="30px" mb="30px" flexDirection={{xl: "row", xs:"column", sm:"column", md:"column", lg:"row"}}>
    {/* Left */}
        <Box  w={{base: "90%", sm:"90%", md:"90%", lg:"90%", xl:"60%"}}>
            {/* Offers */}
            <Box>
                <Heading w='100%'  p="10px" color="#4f585e" fontSize="x-large">Offers</Heading>
               
                    <Flex flexDirection="row" p={3}>
                        <Box>
                            <Image mt="20px" mr="20px" w="60px" p="5px" src="https://cdn.pharmeasy.in/payments/wallet_icons/paytm.png" alt="logo"/>
                        </Box>
                        <Accordion w="100%" allowToggle >
                            <AccordionItem border="1px solid white" borderBottom="1px solid #a7bdd3">
                                <h2>
                                <AccordionButton  _hover={{bg:"white"}} >
                                    <Box flex='1' textAlign='left' color="#4f585e" fontSize="xl" fontWeight="bold">
                                    Paytm Wallet <br/>
                                    <Text fontSize="small" color="#8897a2" fontWeight="normal" mt="10px">Upto Rs.500 cashback on a minimum transaction of Rs.299. Valid once per user.</Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Order />
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Flex>
                    <Flex flexDirection="row" p={3}>
                        <Box>
                            <Image w="60px" mr="20px" p="5px" src="https://cdn.pharmeasy.in/payments/wallet_icons/mobikwik.png" alt="logo"/>
                        </Box>
                        <Accordion w="100%" allowToggle >
                            <AccordionItem border="1px solid white" borderBottom="1px solid #a7bdd3">
                                <h2>
                                <AccordionButton  _hover={{bg:"white"}} >
                                    <Box flex='1' textAlign='left' color="#4f585e" fontSize="xl" fontWeight="bold">
                                    MobiKwik | ZIP (Pay Later) <br/>
                                    <Text fontSize="small" color="#8897a2" fontWeight="normal" mt="10px">Upto Rs.500 cashback on a minimum transaction of Rs.299. Valid once per user.</Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                <Order />
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Flex>
                    <Flex flexDirection="row" p={3}>
                        <Box>
                            <Image w="60px" mr="20px" p="5px" src="https://cdn.pharmeasy.in/payments/amazonpay_new.png" alt="logo"/>
                        </Box>
                        <Accordion w="100%" allowToggle >
                            <AccordionItem border="1px solid white" borderBottom="1px solid #a7bdd3">
                                <h2>
                                <AccordionButton  _hover={{bg:"white"}} >
                                    <Box flex='1' textAlign='left' color="#4f585e" fontSize="xl" fontWeight="bold">
                                    Amazon Pay <br/>
                                    <Text fontSize="small" color="#8897a2" fontWeight="normal" mt="10px">Upto Rs.500 cashback on a minimum transaction of Rs.299. Valid once per user.</Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Order />
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Flex>
            </Box>
                    
            {/* Other Options */}
            <Box>
                <Heading w='100%'  p="10px" color="#4f585e" fontSize="x-large" >Other Options</Heading>

                <Flex flexDirection="row" p={3}>
                    <Box>
                        <Image w="60px" mr="20px" p="5px" src="https://cdn.pharmeasy.in/payments/upi.png" alt="logo"/>
                    </Box>
                    <Accordion w="100%" allowToggle >
                        <AccordionItem border="1px solid white" borderBottom="1px solid #a7bdd3">
                            <h2>
                            <AccordionButton  _hover={{bg:"white"}} >
                                <Box flex='1' textAlign='left' color="#4f585e" fontSize="large" fontWeight="bold">
                                UPI <br/>
                                <Hide below="sm">
                                    <Flex>
                                        <Image w="50px" mr="10px" mt="10px"src="https://consumer-app-images.pharmeasy.in/payment-icons/phonepeWallet.png" alt="logo"/>
                                        <Image w="50px" h="40px" mr="10px" mt="15px"src="https://consumer-app-images.pharmeasy.in/payment-icons/amazonpay.png" alt="logo"/>
                                        <Image w="50px" mr="10px" mt="10px"src="https://consumer-app-images.pharmeasy.in/payment-icons/gpay.png" alt="logo"/>
                                        <Image w="50px" mr="10px" mt="10px"src="https://consumer-app-images.pharmeasy.in/payment-icons/bhim.png" alt="logo"/>
                                        <Image w="50px" mr="10px" mt="10px"src="https://consumer-app-images.pharmeasy.in/payment-icons/paytmUpi.png" alt="logo"/>
                                    </Flex>
                                </Hide>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                
                            <Order />
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Flex>
                <Flex flexDirection="row" p={3}>
                    <Box>
                        <Image w="60px" mr="20px" p="5px" src="https://cdn.pharmeasy.in/payments/wallet.png" alt="logo"/>
                    </Box>
                    <Accordion w="100%" allowToggle >
                        <AccordionItem border="1px solid white" borderBottom="1px solid #a7bdd3">
                            <h2>
                            <AccordionButton  _hover={{bg:"white"}} >
                                <Box flex='1' textAlign='left' color="#4f585e" fontSize="large" fontWeight="bold">
                                Wallets <br/>
                                <Hide below="sm">
                                <Flex>
                                    <Image w="40px" h="40px" mr="10px" mt="15px"src="https://consumer-app-images.pharmeasy.in/payment-icons/freecharge-wallet.png" alt="logo"/>
                                    <Image w="50px" mr="10px" mt="10px"src="https://consumer-app-images.pharmeasy.in/payment-icons/paytmUpi.png" alt="logo"/>
                                    <Image w="50px" mr="10px" mt="10px"src="https://consumer-app-images.pharmeasy.in/payment-icons/phonepeWallet.png" alt="logo"/>
                                    <Image w="50px" h="40px" mr="10px" mt="15px"src="https://consumer-app-images.pharmeasy.in/payment-icons/amazonpay.png" alt="logo"/>
                                </Flex>
                                </Hide>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                            <Button  bg="#10847e" color="white" fontSize='xl' p="25px" _hover={{ border: "1px solid #159a94" }} > Place Order</Button>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Flex>
                <Flex flexDirection="row" p={3}>
                    <Box>
                        <Image w="60px" mr="20px" p="5px" src="https://cdn.pharmeasy.in/payments/card.png" alt="logo"/>
                    </Box>
                    <Accordion w="100%" allowToggle >
                        <AccordionItem border="1px solid white" borderBottom="1px solid #a7bdd3">
                            <h2>
                            <AccordionButton  _hover={{bg:"white"}} >
                                <Box flex='1' textAlign='left' color="#4f585e" fontSize="large" fontWeight="bold">
                                Credit/Debit Card <br/>
                                <Text fontSize="small" color="#8897a2" fontWeight="normal" mt="10px">Flat Rs.200 off on HSBC Credit Cards. Valid once per user & on orders above Rs. 1500</Text>
                                <Hide below="sm">
                                    <Flex>
                                        <Image w="50px" mr="10px" mt="10px"src="https://consumer-app-images.pharmeasy.in/payment-icons/mastercard-logo.png" alt="logo"/>
                                        <Image w="50px" h="40px" mr="10px" mt="15px"src="https://consumer-app-images.pharmeasy.in/payment-icons/rupay.png" alt="logo"/>
                                        <Image w="50px" mr="10px" mt="10px"src="https://consumer-app-images.pharmeasy.in/payment-icons/maestro-logo.png" alt="logo"/>
                                        <Image w="50px" mr="10px" mt="10px"src="https://consumer-app-images.pharmeasy.in/payment-icons/dinerCard.png" alt="logo"/>
                                        <Image w="50px" mr="10px" mt="10px"src="https://consumer-app-images.pharmeasy.in/payment-icons/visa.png" alt="logo"/>
                                    </Flex>
                                </Hide>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Order />
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Flex>
                <Flex flexDirection="row" p={3}>
                    <Box>
                        <Image mr="20px" w="60px" p="5px" src="https://cdn.pharmeasy.in/payments/netbanking.png" alt="logo"/>
                    </Box>
                    <Accordion w="100%" allowToggle >
                        <AccordionItem border="1px solid white" borderBottom="1px solid #a7bdd3">
                            <h2>
                            <AccordionButton  _hover={{bg:"white"}} >
                                <Box flex='1' textAlign='left' color="#4f585e" fontSize="xl" fontWeight="bold">
                                Net Banking <br/>
                                <Text fontSize="small" color="#8897a2" fontWeight="normal" mt="10px">We support over 100 banks</Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Order />
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Flex>
                <Flex flexDirection="row" p={3}>
                    <Box>
                        <Image mr="20px" w="60px" p="5px" src="https://consumer-app-images.pharmeasy.in/payment-icons/cod.png" alt="logo"/>
                    </Box>
                    <Accordion w="100%" allowToggle >
                        <AccordionItem border="1px solid white" borderBottom="1px solid #a7bdd3">
                            <h2>
                            <AccordionButton  _hover={{bg:"white"}} >
                                <Box flex='1' textAlign='left' color="#4f585e" fontSize="xl" fontWeight="bold">
                                Cash on Delivery <br/>
                                <Text fontSize="small" color="#8897a2" fontWeight="normal" mt="10px">Pay via Cash/UPI at the time of delivery</Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Order />
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Flex>
            </Box>
        </Box>
    {/* Right */}
    <Hide below="lg">
        <Box w="400px" display={{xl:"block",xs:"none", sm:"none", md:"none", lg:"none"}} >
           <Heading w='100%' fontSize='xl' p="10px" color="#8897a2" > Price Breakdown </Heading>
            <Box >
            <Flex justifyContent="space-between" p="10px">
                    <Text fontSize='l' color="#4f585e">Cart Value</Text>
                    <Flex>
                        <Heading fontSize='l' as="s" color="#8897a2" mr="5px">₹{totalOriginalAmount}</Heading>
                        <Heading fontSize='l' color="#4f585e">₹{totalAmount}</Heading> 
                    </Flex>
                </Flex>
                <Flex justifyContent="space-between" p="10px">
                    <Text fontSize='l' color="#4f585e">Delivery charges</Text>
                    <Flex>
                        <Heading fontSize='l' as="s" color="#8897a2" mr="5px">₹99.00</Heading>
                        <Heading fontSize='l' color="#4f585e">₹75.00 </Heading> 
                    </Flex>
                </Flex>
                <Flex justifyContent="space-between" p="10px" borderTop="2px dotted #e4e7ea" borderBottom="2px dotted #e4e7ea">
                    <Text fontSize='l' color="#4f585e">Cart Value</Text>
                    <Heading fontSize='l' color="#4f585e">₹{totalAmount+75} </Heading> 
                    
                </Flex>   
                <Accordion defaultIndex={[0]} allowMultiple border="2px dotted #3bb896" borderRadius="7px" bg="#f2fff8" p={2} mt="20px">
                    <AccordionItem border="1px solid #f2fff8">
                        <h2>
                        <AccordionButton _hover={{ bg:"#f2fff8" }}>
                            <Box flex='1' textAlign='left' justifyContent="space-around" w="100%">
                                <Flex justifyContent="space-between" color="#3bb896">
                                    <Image w="20px" pr={1} src="https://cdn-icons-png.flaticon.com/512/1490/1490817.png" alt="icon" />
                                    Total savings of <Text fontWeight="bold" mr="5px" ml="5px"> ₹{totalOriginalAmount-totalAmount} </Text> on this order         
                                </Flex>
                            </Box>
                            <AccordionIcon color="#3bb896" />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Flex justifyContent="space-between" color="#3bb896">
                                <Text fontSize='xs'> MRP. Discount 17.00%</Text>
                                <Text fontSize='xs'>₹79.5</Text>
                            </Flex>
                            <Flex justifyContent="space-between" color="#3bb896">
                                    <Text fontSize='xs'> Delivery Charges Waiver</Text>
                                    <Text fontSize='xs'>₹24.00</Text>
                            </Flex>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
            
        </Box>
    </Hide>
        
    </Box>
  )
}
