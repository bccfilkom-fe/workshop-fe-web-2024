import React, { useState } from "react";
import Layout from "../components/layout/MainLayout";
import FormTweet from "../components/home/FormTweet";
import UserTweet from "../components/home/UserTweet";
import Button from "../components/ui/Button";

import dummy from "../utils/dummy.json";
import UserTweets from "../components/home/section/UserTweets";
import FormTweets from "../components/home/section/FormTweets";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleclick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Layout>
      <main className="flex flex-col gap-3 items-center w-full">
        <div className=" bg-gray-200 w-[calc(100vw-40px)] md:w-[400px] flex justify-between items-center rounded-xl px-4 py-2">
          <h2>What's on your mind?</h2>
          <Button
            variation={"tertiary-blue"}
            className={"text-sm  md:py-1.5 md:px-3"}
            onClick={handleclick}
          >
            Tweets!
          </Button>
        </div>
        {isOpen && <FormTweets handleClick={handleclick} />}

        {/* SECTION 2 - USER TWEETS  */}
        <UserTweets />
      </main>
    </Layout>
  );
};

export default Home;
