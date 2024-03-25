import signup from "../../../assets/Auth/signup.png"
import React, { useState } from 'react';
import style from "./index.module.css"
import FilledButton from "../../../Components/Reuseables/FilledButton";
import {Link} from "react-router-dom";
const SignUp = ()=>{

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email:'',
        password:''

    });
    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };


    return(
        <div className={style.signUpPage}>
            <img src={signup} alt={""}/>
            <div style={{paddingTop:"120px"}}>
                <p><span style={{display:"block", paddingLeft:"100px", fontWeight:"bolder"}}>Welcome!</span><span style={{display:"block"}}>Sign up by entering the information below</span></p>
                <form >
                    <div className={style.formElements}>
                        <input
                            type="text"
                            name="firstName"
                            // value={formData.firstName}
                            placeholder={"First Name"}
                        />


                        <input
                            type="text"
                            name="lastName"
                            // value={formData.lastName}
                            placeholder={"Last Name"}

                        />
                        <input
                            type="text"
                            name="email"
                            // value={formData.email}
                            placeholder={"Email"}
                        />
                        <input
                            type="password"
                            name="password"
                            // value={formData.password}
                            placeholder={"Password"}

                        />
                    </div>
                </form>
                <div style={{display:"flex", paddingTop:"10px",gap:"100px"}}>
                    <p style={{color: "#C4C4C4"}}>Already have an account?</p>
                    <Link to={"/login"}>
                        <p style={{textDecoration:"underline"}}>Login</p>
                    </Link>
                </div>
                <FilledButton text={"Sign Up"} color={"purple"} textColour={"white"} width={"350px"}/>
            </div>
        </div>
    )
}
export default SignUp