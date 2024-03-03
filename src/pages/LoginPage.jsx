import React from "react";
import MainLayout from "../components/layout/MainLayout";
import LoginForm from "../components/auth/LoginForm";
const LoginPage = () => {
  return (
    <MainLayout>
      <main className=" flex flex-col items-center w-full md:w-screen">
        <LoginForm />
      </main>
    </MainLayout>
  );
};

export default LoginPage;
