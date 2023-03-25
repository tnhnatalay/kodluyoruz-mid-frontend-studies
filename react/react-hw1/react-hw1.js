import axios from "axios";

const getData = () => {
  const getUsers = async (number) => {
    const { data: users } = await axios(
      "https://jsonplaceholder.typicode.com/users/" + number
    );

    const { data: post } = await axios(
        "https://jsonplaceholder.typicode.com/posts?userId=" + number
    )

    console.log("users", users);
    console.log("posts", post);
  };
  getUsers(3);
};

export default getData;
