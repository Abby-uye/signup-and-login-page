import React, {useState} from "react";
import login from "../../../assets/Auth/login.png";
import FilledButton from "../../../Components/Reuseables/FilledButton";
import style from "./index.module.css"
import forgotPassword from "../../../assets/Auth/forgotPassword.png"
import {Link} from "react-router-dom";

const Login = ()=>{
    const [formData, setFormData] = useState({
        email:'',
        password:''

    });
    return(
        <div className={style.login}>
            <img src={login} alt={""}/>
            <div className={style.loginBody}>
                <p style={{paddingLeft:"90px",fontWeight:"bolder"}}>Welcome Back!</p>
                <p style={{paddingLeft:"70px",fontSize:"15px"}}>Login to your dashboard</p>
                <form>
                    <div className={style.formElements}>
                        <input
                            type="text"
                            name="email"
                            placeholder={"Email"}
                        />

                        <input style={{marginTop:"20px"}}
                               type="text"
                               name="password"
                               placeholder={"Password"}
                        />
                    </div>
                </form>

                <div>
                    <form>
                        <div style={{display:"flex"}}>
                            <div style={{display:"flex",gap:"20px"}}>
                                <input type={"checkbox"}/>
                                <p>Remember me?</p>
                            </div>
                            <div style={{display:"flex", flexDirection:"row"}}>
                                <img src={forgotPassword} alt={""} style={{width:"7px", height:"10px"}}/>
                                <p style={{paddingBottom:"20px"}}>Forgot password?</p>
                            </div>
                        </div>
                        <FilledButton text={"Login"} textColour={"white"} color={"purple"} width={"300px"}/>
                        <div style={{display:"flex" ,gap:"60px"}}>
                            <p style={{fontSize:"14px" ,color:"#C4C4C4"}}>Don't have an Account</p>
                            <Link to={"/sign-up"}>
                                <p style={{textDecoration:"underline"}}>Sign up</p>
                            </Link>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default Login