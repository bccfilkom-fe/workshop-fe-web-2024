import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../ui/Input";
import  Button from "../ui/Button";

const LoginForm = () => {
    const navigate =useNavigate();
    const [form, setForm]= useState({
        email: "",
        password: ""
    })

    const handlesubmit =(e)=>{
        e.preventDefault();
        console.log(form);

        setTimeout(()=>{
            navigate("/")
        },1000)
    }

    return ( 
        <div className="p-5 md:p-10 rounded-3xl bg-white w-[calc(100vw-40px)] max-w-[500px] flex flex-col gap-2 h-fit">
            <h3 className=" text-xl md:-2xl font-semibold text-center md:text-left ">Login Yukkkk!</h3>

            <form className=" flex flex-col gap-4">
            <Input
            type="email"
            label={"Email"}
            name={"email"}
            onChange={(e)=> setForm({...form,email: e.target.value})}
            required={true}
            />
            <Input
            type="password"
            label={"Password"}
            name={"password"}
            onChange={(e)=> setForm({...form, password: e.target.value})}
            required={true}
            />

            <Button
            type={"submit"}
            variation={"secondary"}
            className={" w-full mt-2"}
            onClick={handlesubmit}
            >
                Login
            </Button>

            <p className=" w-full text-center text-sm md:text-base">Not Registered? <a href="/signup">Create an account</a></p>
            </form>

        </div>
     );
}
 
export default LoginForm;