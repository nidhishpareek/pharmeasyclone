import axios from "."

export async function loginApi(email, password) {
    return axios.post('http://localhost:8080/user/login', {
        email, password
    })
}

// export async function loginWithGithubApi(code) {
//     return axios.get(`/user/githubSignin?code=${code}`)
// }
export async function signupApi(name, email, password) {
    return axios.post('http://localhost:8080/user/signup',{
        name, email, password
    })

}

export async function getUserApi() {
    return axios.get(`http://localhost:8080/user/loggedInUser`)
}

export async function getAllCategories(){
    return axios.get(`http://localhost:8080/products`)
}

export async function getAllProductsByCategory(category,page,filterArr,sortBy){
    let brands = '';
    filterArr.forEach((el)=>{
       brands+=`&brand=${el}`
    });
    console.log(brands);
    return axios.get(`http://localhost:8080/products/category/${category}?page=${page}${brands}&sortBy=actual_price&sortOrder=${sortBy}`)
}
export async function getAllProductsBySubCategory(page,subcategory,category,filterArr,sortBy){
    let brands = '';
    filterArr.forEach((el)=>{
        brands+=`&brand=${el}`
     });
    return axios.get(`http://localhost:8080/products/category/${category}/${subcategory}?page=${page}${brands}&sortBy=actual_price&sortOrder=${sortBy}`)
}
export async function getSingleProduct(id){
    return axios.get(`http://localhost:8080/products/single/${id}`)

}

export async function AddItemToCart(id,quantity){
    return axios.post('http://localhost:8080/cart/',{
      productId:id,
      quantity
    })
}

export async function getUserCart(){
    return axios.get('http://localhost:8080/cart/')
}

export async function updateCartItem(id,quantity){
    return axios.patch(`http://localhost:8080/cart/${id}`,{
      quantity
    })
}
export async function deleteCartItem(id){
    return axios.delete(`http://localhost:8080/cart/${id}`)
}

export async function getSearchProducts(q){
    return axios.get(`http://localhost:8080/products/search?q=${q}`)
}
export async function createOrder(){
    return axios.get(`http://localhost:8080/orders/create`)
}

export async function getOrders(){
    return axios.get(`http://localhost:8080/orders/`)
}


export const loginAPI  = 'http://localhost:8080/user/login'
export const signupAPI  = 'http://localhost:8080/user/signup'
export const checkLoggedInAPI  = 'http://localhost:8080/checkLoggedIn/'
export const GitAuthURL  = 'http://localhost:8080/user/githubsignin'
