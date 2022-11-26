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