import React from "react";
import MainLayout from "../components/layout/MainLayout";
import SignupForm from "../components/auth/SignupForm";
const SignupPage = () => {
  return (
    <MainLayout>
      <main className=" flex flex-col items-center w-full md:w-screen">
        <SignupForm />
      </main>
    </MainLayout>
  );
};

export default SignupPage;
