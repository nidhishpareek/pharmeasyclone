import { ChevronRightIcon } from "@chakra-ui/icons";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SingleProductBreadCumb = (props) => {
  const {title} = props; 
    return (
    <Breadcrumb color="gray.600" fontSize="14px"spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
      <BreadcrumbItem>
        <Link to={"/"}>Home</Link>
      </BreadcrumbItem>
      <BreadcrumbItem >
        <Link to={"/healthcare"}>Healthcare</Link>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <Text width="150px" textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap">
        <BreadcrumbLink >{title}</BreadcrumbLink>
        </Text>
      </BreadcrumbItem>
    </Breadcrumb>
    )
}
export default SingleProductBreadCumb;