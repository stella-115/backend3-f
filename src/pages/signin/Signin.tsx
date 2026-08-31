import { toast } from "react-toastify"
import { login } from "../../global/reduxSlice"
import { loginUser } from "../../utils/api"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const Signin = () => {

   const navigate = useNavigate ()

    const dispatch = useDispatch ()
    
    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try{
            setLoading(true)

            const data = await loginUser( email, password);

            dispatch(
                login({
                    user: data.login,
                    accessToken: data.accessToken,
                })
            )

            console.log("Dispatching data:", {
                user: data.login,
                accessToken: data.acessToken
            })
            toast.success ("Sign in successful")

            console.log("data", data)

            navigate("/home")
        }
        catch (error: any) {
            // console.error(error)
            toast.error("signin Failed")
        }
        finally {
            setLoading (false)
        }
    }
  return (
    <div className="w-full h-screen bg-[url('/img/reall.jpg')] bg-center bg-cover flex justify-center">
        <div className="md:w-[90%] w-[95%] flex flex-col justify-center ">
            <h1 className="md:text-[35px] text-[23px] font-extrabold font-serif text-red-700 "> Welcome to Jay's Real-Estate</h1>
            <div className=" ">
                <form onSubmit={handleSubmit} className="md:w-130 w-full min-h-130 border border-white bg-[#0e121e79] rounded-2xl p-5 md:mt-2 mt-10">

                    <h1 className="text-white font-bold md:text-[35px] text-[30px] text-center">
                        Create Your Account
                    </h1>
                    <h1 className="font-bold md:text-red-700 text-white md:text-[12px] text-[11px] text-center">
                        Set up Your Account to get started. Enter your details below to create a personalized experience as a landlord or tenant
                    </h1>

                     <div>
              <h1  className=" text-white md:text-[20px] mt-5 ">
                Email Address
              </h1>
              <h1 className="w-full h-10 rounded-[7px] border border-white mt-5">
                <input type="text" 
                 value={email}
                 onChange={(e) =>
                        setEmail(e.target.value)      
                 }  

                 required placeholder="email" className="text-white p-3 outline-none w-full rounded-[7px] "/>
              </h1>
            </div>

            <div>
              <h1  className=" text-white md:text-[20px] mt-5">
                Password
              </h1>
              <h1 className="w-full h-10 rounded-[7px] border border-white mt-5">
                <input type="password"
                 value={password}
                 onChange={(e) =>
                        setPassword(e.target.value)      
                 }  
                placeholder="password"
                 required className="text-white p-3 outline-none rounded-[7px] w-full"/>
              </h1>
            </div>

             

            <button
             type="submit"
            className="text-white text-[20px] font-bold  w-full h-12 bg-red-700 rounded-[10px] mt-8 hover:bg-red-950 hover:border hover:border-white" disabled={loading}>
                   {
                loading ? "signing in" : "signin"}
            </button>

           

                </form>
            </div>

        </div>

    </div>
  )
}

export default Signin