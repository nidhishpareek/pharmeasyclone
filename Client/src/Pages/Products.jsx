import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Checkbox,
  Divider,
  Flex,
  HStack,
  Radio,
  RadioGroup,
  Select,
  Text,
  VStack,
  Button,
  Skeleton,
  CheckboxGroup,
  Badge,
  Stack,
  filter,
} from "@chakra-ui/react";
import ProductsGrid from "../Components/Products/ProductsGrid";
import ProductsBreadCrumb from "../Components/Products/ProductsBreadCrum";
import Tabs from "../Components/Navbar/Tabs";

import { CloseIcon } from "@chakra-ui/icons";
import { getAllProductsByCategory, getAllProductsBySubCategory } from "../api/api";

function Products() {
  const getCurrPage = (value) => {
    value = Number(value);

    if (value <= 0) {
      value = 1;
    }
    if (!value) {
      value = 1;
    }

    return value;
  };
  let arr= [];
  const [totalPages, setTotalPages] = useState();
  const [loading, setLoading] = useState(false);
  const { cat } = useParams();
  const newCat = cat.split("-");
  const catSplit = newCat.join(" ");
  const [products, setProducts] = useState([]);
  const [subCat,setSubCat] = useState([]);
  const [search, setSearch] = useSearchParams();
  const [sortBy, setSortBy] = useState(search.get("sortBy") || "");
  const [value,setValue] = useState(search.get('subCat')|| '')
  const [page, setPage] = useState(getCurrPage(search.get("page")) || 1);
  const [filterArr, setFilterArr] = useState(search.getAll("brand") || []);
  const [filters, setFilters] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  // console.log(filters);
  // console.log(filterArr);
  // console.log(search);
  

  function handleCategoryChange(){
    
    getAllProductsBySubCategory(page,value,cat,filterArr,sortBy).then((res)=>{
      setProducts(res.data.products)
      setTotalProducts(res.data.totalProducts);
        setSubCat(res.data.subCategories)
        setFilters(res.data.totalBrands)
        setTotalPages(Math.ceil(res.data.totalProducts/res.data.pageSize));
    }).catch(err=>console.log(err)).finally(() => setLoading(false));
    
  }

  function handleCheckedState(el) {
    if(filterArr.includes(el)){
      setFilterArr([...filterArr.filter((e=>e!==el))]);
    }else{
      setFilterArr([...filterArr,el]);
    } 
    
  }
  // console.log(filterArr);  
  useEffect(() => {
    
    setLoading(true);
    
    if(value){
      handleCategoryChange();
    }else{
      getAllProductsByCategory(cat,page,filterArr,sortBy)
      .then((res) =>{ 
        setProducts(res.data.products)
        setTotalProducts(res.data.totalProducts);
        setSubCat(res.data.subCategories)
        setFilters(res.data.totalBrands);
        setTotalPages(Math.ceil(res.data.totalProducts/res.data.pageSize));
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
    }
    
  }, [page,filterArr,value,sortBy]);
  if (page > totalPages) {
    setPage(totalPages);
  }
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  useEffect(() => {
    let paramObj = { page };
    if (sortBy) {
      paramObj.sortBy = sortBy;
    }
    if(value){
      paramObj.subCat = value
      
    }

    if (filterArr) {
      paramObj.brand = filterArr;
    }
    
    
    setSearch(paramObj);
  }, [page,value,filterArr,sortBy]);

  for (let i = 0; i < totalPages; i++) arr[i] = i + 1;

  return (
    <>
      <Tabs />
      <Box
        w={{ base: "90%", sm: "90%", lg: "90%", xl: "80%" }}
        margin="80px auto"
        color={"rgba(0,0,0,0.7)"}
      >
        <ProductsBreadCrumb cat={catSplit} />
        <Flex mt={10} justifyContent="space-between">
          <Box display={{ base: "none", xl: "block" }} width="250px" minW={"250px"}>
            <VStack alignItems="start" width="100%">
              <Text fontSize="26px" fontWeight="600" mb="40px">
                Filter
              </Text>
              <Box width="100%">
                <Text fontSize={"16px"} fontWeight="700" mb="26px">
                  Category
                </Text>
                <HStack mb="26px" width={"100%"} justify="space-between">
                  <Text fontSize={"14px"} fontWeight="400">
                    {catSplit}
                  </Text>
                  <Radio isChecked={true} colorScheme="teal"></Radio>
                </HStack>
              </Box>

              
              {(
                <Box width="100%">
                  <Text
                    fontSize={"16px"}
                    fontWeight="700"
                    mb="20px"
                    mt={"20px"}
                  >
                    Sub Category
                  </Text>
                  <RadioGroup onChange={setValue} value={value} >
                    
                    {subCat.map(el=><HStack mb="26px" width={"100%"} justify="space-between">
                      <Text fontSize={"14px"} fontWeight="400">
                        {el}
                      </Text>
                      <Radio
                        borderColor={"grey"}
                        value={el}
                        colorScheme="teal"
                        
                      ></Radio>
                    </HStack>)}
                  </RadioGroup>
                </Box>
              )}

              <Divider />
              
              {(
                <Box width="100%">
                  <Text
                    fontSize={"16px"}
                    fontWeight="700"
                    mb="20px"
                    mt={"20px"}
                  >
                    Brand
                  </Text>

                  <VStack height={"300px"} overflow="hidden scroll" spacing={"20px"} width={"100%"}>
                    <CheckboxGroup defaultValue={filterArr}>
                      {filters.map((el) => (
                        <HStack
                          key={el}
                          width={"100%"}
                          justify="space-between"
                        >
                          <Text fontSize={"14px"} fontWeight="400">
                            {el}
                          </Text>
                          <Checkbox
                            onChange={() => handleCheckedState(el)}
                            checked={()=>{
                              if(filterArr.includes(el))return true;
                              return false;
                            }}
                            border={"grey"}
                            colorScheme="teal"
                            value={el}
                          ></Checkbox>
                        </HStack>
                      ))}
                    </CheckboxGroup>
                  </VStack>
                </Box>
              )}
            </VStack>
          </Box>
          <Box flexGrow={1} ml={{ xl: "50px" }}>
            <HStack
              flexWrap={"wrap"}
              justifyContent={{
                base: "center",
                sm: "space-between",
                lg: "space-between",
                xl: "space-between",
              }}
              alignItems={"center"}
              mb="40px"
            >
              <Box>
                <Text fontSize="26px" fontWeight="600">
                  {catSplit}   ({totalProducts})
                </Text>
              </Box>
              <HStack>
                <Text noOfLines={1}>Sort By:</Text>
                <Box>
                  <Select
                    colorScheme={"teal"}
                    value={sortBy}
                    onChange={(e) => {
                      setSortBy(e.target.value);
                    }}
                    placeholder="Popularity"
                  >
                    <option value="asc">Price low to high </option>
                    <option value="desc">Price high to low </option>
                    
                  </Select>
                </Box>
              </HStack>
            </HStack>
            {(
              <HStack flexWrap={"wrap"} gap="10px" flexDir={{base:"column",sm:"row"}} mb="20px">
                <Text fontSize={"12px"}></Text>
                {value && <Button
                        key={value}
                        
                        size={"xs"}
                        rightIcon={
                          <CloseIcon
                            onClick={() => setValue('')}
                            fontSize={"8px"}
                          />
                        }
                        variant={"outline"}
                        colorScheme={"teal"}
                      >
                        {value}
                      </Button>}
                {filterArr.map((e) => {
                  
                    return (
                      <Button
                        key={e}
                        mr={"10px"}
                        size={"xs"}
                        rightIcon={
                          <CloseIcon
                            onClick={() => handleCheckedState(e)}
                            fontSize={"8px"}
                          />
                        }
                        variant={"outline"}
                        colorScheme={"teal"}
                      >
                        {e}
                      </Button>
                    );
                 
                })}
              </HStack>
            )}
            <ProductsGrid data={products} loading={loading} />
            
            {(
              <HStack mt={"50px"} justify="center"  spacing={"5px"}>
                {arr.map((el) => {
                  if(el>+page+3 && el!==+page && el !== +totalPages){
                    return (<Text>.</Text>)
                  }
                  return (<Button
                    variant={"outline"}
                    padding="0"
                    size={"sm"}
                    colorScheme={"teal"}
                    onClick={() => setPage(el)}
                    disabled={page === el}
                    key={el}
                  >
                    {el}
                  </Button>)
                })}
              </HStack>
            )}
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Products;
