import React from "react";
// icons
import { IoPersonCircle } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import Button from "../ui/Button";

const UserTweet = ({ data }) => {
  const { title, description, id } = data;

  return (
    <div className="p-4 md:p-6 rounded-3xl bg-white w-[calc(100vw-40px)] max-w-[700px] flex gap-3">
      <IoPersonCircle size={44} />

      <div className="flex flex-col gap-4 w-full">
        {/* TEXT PART  */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">{title}</h3>
          <p>{description}</p>
        </div>

        {/* BUTTON PART  */}
        <div className="flex gap-3 justify-end">
          <Button
            className="flex gap-2 items-center py-2 px-3 font-medium rounded-lg"
            variation={"tertiary-blue"}
          >
            <CiEdit size={20} /> Edit
          </Button>{" "}
          <Button
            variation={"tertiary-red"}
            className="flex gap-2 items-center  py-2 px-3 font-medium rounded-lg"
          >
            <MdDelete size={20} />
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserTweet;
