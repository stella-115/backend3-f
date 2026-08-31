import { toast } from "react-toastify";
import { login } from "../../global/reduxSlice";
// import { verifyOtp } from "../../utils/api"; // 👈 you'll need to create this API function
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { verifyOtp } from "../../utils/api";

const Otp = () => {
   const navigate = useNavigate ()
  
      const dispatch = useDispatch ()
      
      const [email, setEmail] = useState("")
  
      const [otp, setOtp] = useState("")
  
      const [loading, setLoading] = useState(false)
  
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
            if (otp.length !== 6 || !/^\d{6}$/.test(otp)) {
      toast.error("Please enter a valid 6-digit OTP.");
      return;
    }
          
          try{
              setLoading(true)
  
              const data = await verifyOtp( email, otp);
  
              dispatch(
                  login({
                      user: data.user,
                      accessToken: data.accessToken,
                  })
              )
  
  
              toast.success ("Verification successful!")
  
              console.log("data", data)
  
              navigate("/signin")
          }
          catch (error: any) {
              // console.error(error)
              toast.error("Verification Failed")
          }
          finally {
              setLoading (false)
          }
      }
  return (
    <div className="w-full h-screen bg-[url('/img/reall.jpg')] bg-center bg-cover flex justify-center">
      <div className="md:w-[90%] w-[95%] flex flex-col justify-center">
        <h1 className="md:text-[35px] text-[23px] font-extrabold font-serif text-red-700">
          Welcome to Jay's Real-Estate
        </h1>
        <div>
          <form
            onSubmit={handleSubmit}
            className="md:w-130 w-full min-h-130 border border-white bg-[#0e121e79] rounded-2xl p-5 md:mt-2 mt-10"
          >
            <h1 className="text-white font-bold md:text-[35px] text-[30px] text-center">
              Verify Your Account
            </h1>
            <h1 className="font-bold md:text-red-700 text-white md:text-[12px] text-[11px] text-center">
              Enter the 6-digit code sent to your email to complete verification.
            </h1>

            {/* Email Input */}
            <div>
              <h1 className="text-white md:text-[20px] mt-5">Email Address</h1>
              <div className="w-full h-10 rounded-[7px] border border-white mt-5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                  className="text-white p-3 outline-none w-full rounded-[7px] bg-transparent"
                />
              </div>
            </div>

            {/* OTP Input */}
            <div>
              <h1 className="text-white md:text-[20px] mt-5">6-Digit OTP</h1>
              <div className="w-full h-10 rounded-[7px] border border-white mt-5">
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, "").slice(0, 6);
                    setOtp(val);
                  }}
                  required
                  placeholder="e.g. 123456"
                  className="text-white p-3 outline-none w-full rounded-[7px] bg-transparent"
                />
              </div>
            </div>

            <button
              type="submit"
              className="text-white text-[20px] font-bold w-full h-12 bg-red-700 rounded-[10px] mt-8 hover:bg-red-950 hover:border hover:border-white"
              disabled={loading}
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Otp;