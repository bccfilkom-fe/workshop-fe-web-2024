import React, { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import TextArea from "../ui/TextArea";
import { IoMdClose } from "react-icons/io";
import { createTweets } from "../../api/services/tweets";

const FormTweet = ({ handleClick }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createTweets(form);

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-5 md:p-10 rounded-3xl bg-white w-[calc(100vw-40px)] max-w-[500px] flex flex-col gap-2 h-fit">
      <button onClick={() => handleClick()} className="flex justify-end">
        <IoMdClose size={24} />
      </button>

      {/* TITLE  */}
      <h3 className="text-xl md:text-2xl font-semibold md:text-left text-center">
        Give me your best tweet!{" "}
      </h3>

      {/* FORM  */}
      <form
        className="flex flex-col items-end gap-3"
        onSubmit={(e) => handleSubmit(e)}
      >
        <Input
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          label={"Title"}
          name={"title"}
          required={true}
        />

        <TextArea
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          label={"Description"}
          name={"description"}
          required={true}
        />

        <Button type={"submit"} variation={"secondary"} className={"w-fit"}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default FormTweet;
