import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../ui/Input";
import Button from "../ui/Button";
import { handleLogin } from "../../api/services/auth";

const LoginForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await handleLogin(form);

      window.localStorage.setItem("token", response.data.token);

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-5 md:p-10 rounded-3xl bg-white w-[calc(100vw-40px)] md:max-w-[500px] flex flex-col gap-2 h-fit">
      {/* TITLE PART  */}
      <h3 className=" text-xl md:-2xl font-semibold text-center md:text-left ">
        Login Yukkkk!
      </h3>

      {/* FORM PART */}
      <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
        <Input
          type="email"
          label={"Email"}
          name={"email"}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required={true}
        />
        <Input
          type="password"
          label={"Password"}
          name={"password"}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required={true}
        />

        <Button
          type={"submit"}
          variation={"secondary"}
          className={" w-full mt-2"}
        >
          Login
        </Button>

        <p className=" w-full text-center text-sm md:text-base">
          Not Registered?{" "}
          <a href="/signup" className="italic text-blue">
            Create an account
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
