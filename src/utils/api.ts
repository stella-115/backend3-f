import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    headers:{
        "Content-Type" : "application/json"
    }

})

export const loginUser = async (email: string, password: string) => {
    const response = await api.post ("/user/signin",{
        email, password
    });

    return response.data 
    console.log("login-response", response)

}

export const url = import.meta.env.VITE_APP_API_URL


export const signupUser = async (email: string, password: string, termsAndCondition: boolean,
    role: string) => {
    const response = await api.post ("/user/signup",{
        email, password, termsAndCondition, role
    });

    return response.data 
    console.log("login-response", response)

}

export const url1 = import.meta.env.VITE_APP_API_URL

export const verifyOtp = async (email: string, otp: string) =>{
    const response = await api.post ("/user/verify",{
        email, otp
    });

    return response.data 
    console.log("login-response", response)

}

export const url2 = import.meta.env.VITE_APP_API_URL

