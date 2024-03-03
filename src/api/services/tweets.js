import { axiosInstance } from "../coreApi";

const getAllTweets = async () => {
  const token = window.localStorage.getItem("token");

  try {
    const response = await axiosInstance.get("tweet/get", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

const createTweets = async (body) => {
  const token = window.localStorage.getItem("token");
  try {
    const response = await axiosInstance.post(
      "tweet/create",
      {
        title: body.title,
        description: body.description,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const EditTweets = async (body) => {
  const token = window.localStorage.getItem("token");
  try {
    const response = await axiosInstance.put(
      "tweet/update",
      {
        title: body.title,
        description: body.description,
        id: body.id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const DeleteTweets = async (id) => {
  const token = window.localStorage.getItem("token");

  try {
    const response = await axiosInstance.delete("tweet/delete", {
      data: {
        id,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export { getAllTweets, createTweets, EditTweets, DeleteTweets };
