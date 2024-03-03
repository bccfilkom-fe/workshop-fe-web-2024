import React, { useState } from "react";
// icons
import { IoPersonCircle } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import Button from "../ui/Button";
import { DeleteTweets, EditTweets } from "../../api/services/tweets";
import Input from "../ui/Input";
import TextArea from "../ui/TextArea";

const UserTweet = ({ data }) => {
  const { title, description, id } = data;
  const [isEdit, setisEdit] = useState(false);

  const [form, setForm] = useState({
    title,
    description,
    id,
  });

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await EditTweets(form);

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await DeleteTweets(id);

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4 md:p-6 rounded-3xl bg-white w-[calc(100vw-40px)] max-w-[700px] flex gap-3">
      <IoPersonCircle size={44} />

      <div className="flex flex-col gap-4 w-full">
        {isEdit ? (
          <form
            className="flex flex-col items-end gap-3"
            onSubmit={(e) => handleEdit(e)}
          >
            {/* FORM PART */}
            <Input
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              label={"Title"}
              name={"title"}
              required={true}
              value={form.title}
            />

            <TextArea
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              value={form.description}
              label={"Description"}
              name={"description"}
              required={true}
            />

            <Button
              type={"submit"}
              onClick={() => console.log("submitted!")}
              variation={"secondary"}
              className={"w-fit"}
            >
              Submit
            </Button>
          </form>
        ) : (
          <>
            <div className="flex flex-col gap-2">
              {/* TEXT PART  */}
              <h3 className="font-semibold">{title}</h3>
              <p>{description}</p>
            </div>

            {/* BUTTON PART  */}
            <div className="flex gap-3 justify-end">
              <Button
                className="flex gap-2 items-center py-2 px-3 font-medium rounded-lg"
                variation={"tertiary-blue"}
                onClick={() => setisEdit(true)}
              >
                <CiEdit size={20} /> Edit
              </Button>{" "}
              <Button
                onClick={(e) => handleDelete(e)}
                variation={"tertiary-red"}
                className="flex gap-2 items-center  py-2 px-3 font-medium rounded-lg"
              >
                <MdDelete size={20} />
                Delete
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserTweet;
