import React from "react";
import FormTweet from "../FormTweet";

const FormTweets = ({ handleClick }) => {
  return (
    <section className=" flex justify-center fixed z-10 backdrop-blur-sm md:w-screen h-screen">
      <FormTweet handleClick={handleClick} />
    </section>
  );
};

export default FormTweets;
