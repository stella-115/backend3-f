import { createBrowserRouter } from "react-router-dom";
import SignupLayout from "../layout/SignupLayout";
import Signup from "../pages/signup/Signup";
import OtpLayout from "../layout/OtpLayout";
import Otp from "../pages/otp/Otp";
import SigninLayout from "../layout/SigninLayout";
import Signin from "../pages/signin/Signin";
import HomeLayout from "../layout/HomeLayout";
import Dashboard from "../pages/home/Dashboard";

export const element = createBrowserRouter ([
    {
        path: "/",
        element: <SignupLayout/>,
        children:[{
            index: true,
            element:<Signup/>
        }]
    },
      {
        path: "/otp",
        element: <OtpLayout/>,
        children:[{
            index: true,
            element:<Otp/>
        }]
    },
      {
        path: "/signin",
        element: <SigninLayout/>,
        children:[{
            index: true,
            element:<Signin/>
        }]
    },
      {
        path: "/home",
        element: <HomeLayout/>,
        children:[{
            index: true,
            element:<Dashboard/>
        }]
    },
])