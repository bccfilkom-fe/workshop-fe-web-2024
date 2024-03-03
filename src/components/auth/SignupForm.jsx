import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../ui/Input";
import Button from "../ui/Button";
import { handleRegister } from "../../api/services/auth";

const SignupForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (form.confirmpassword !== form.password) {
        return alert("Konfirmasi password dan password tidak sama!");
      }
      const response = await handleRegister(form);

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-5 md:p-10 rounded-3xl bg-white w-[calc(100vw-40px)] max-w-[500px] flex flex-col gap-2 h-fit">
      {/* TITLE  */}
      <h3 className=" text-xl md:-2xl font-semibold text-center md:text-left ">
        Create Ur Account
      </h3>

      {/* FORM */}
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
        <Input
          type="password"
          label={"Confirm Password"}
          name={"confirmpassword"}
          onChange={(e) =>
            setForm({ ...form, confirmpassword: e.target.value })
          }
          required={true}
        />

        <Button
          type={"submit"}
          variation={"secondary"}
          className={" w-full mt-2"}
        >
          Signup
        </Button>

        <p className=" w-full text-center text-sm md:text-base">
          Already have an account?
          <a href="/login" className="italic text-blue">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
