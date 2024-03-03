import React, { useEffect, useState } from "react";
import { getAllTweets } from "../../../api/services/tweets";
import UserTweet from "../UserTweet";

const UserTweets = () => {
  const [Tweets, setTweets] = useState([]);

  const getTweets = async () => {
    try {
      const response = await getAllTweets();
      setTweets(response.data);
    } catch (error) {
      if (error.response.data.error === "tweet not found") {
        setTweets([]);
      }
    }
  };

  useEffect(() => {
    getTweets();
  }, []);

  return (
    <section className=" flex justify-center flex-col gap-5">
      {Tweets.length > 0 ? (
        Tweets.map((tweet, index) => {
          return <UserTweet data={tweet} key={index} />;
        })
      ) : (
        <p>Tidak ada Tweets</p>
      )}
    </section>
  );
};

export default UserTweets;
