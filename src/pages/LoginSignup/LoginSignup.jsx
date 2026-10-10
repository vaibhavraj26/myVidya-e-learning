import { useState } from "react";
import "./LoginSignup.css";

import auth1 from "@assets/auth/auth1.jpeg";
import auth2 from "@assets/auth/auth2.jpeg";
import auth3 from "@assets/auth/auth3.jpeg";
import auth4 from "@assets/auth/auth4.jpeg";
import auth5 from "@assets/auth/auth5.jpeg";
import LoginSignupForm from "./LoginSignupForm";


export default function LoginSignup() {
  

    return (
        <div className="auth-wrapper">

            {/* LEFT SIDE IMAGE */}
            <div className="auth-left">
                <div className="carousel">
                    <div className="carousel-track">
                        <img src={auth1} alt="" />
                        <img src={auth2} alt="" />
                        <img src={auth3} alt="" />
                        <img src={auth4} alt="" />
                        <img src={auth5} alt="" />

                        {/* duplicate for infinite loop */}
                        <img src={auth1} alt="" />
                        <img src={auth2} alt="" />
                        <img src={auth3} alt="" />
                        <img src={auth4} alt="" />
                        <img src={auth5} alt="" />
                    </div>
                </div>
            </div>


            {/* RIGHT SIDE FORM */}
            
            <LoginSignupForm />
    

        </div>
    );
}
