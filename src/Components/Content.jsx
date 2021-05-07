import Grid from "@material-ui/core/Grid";
import React, { useState, useEffect, useRef } from "react";
import Post from "./Post";
import TextBox from "./TextBox";
import axios from "axios";

const TestApi = (props) => {
  // State
  const [State, setState] = useState([
    {
      userId: "",
      id: "",
      title: "Loading...",
      body: "",
    },
  ]);

  //Posting text post.
  const post = useRef({
    userId: "",
    title: "Loading...",
    body: "",
  });

  // Getting Data from API
  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    axios
      .get(apiUrl)
      .then((response) => response.data)
      .then((data) => {
        setState(data);
        console.log(data);
      });
  }, []);

  //New Post Text box change handling
  const handleChange = (e) => {
    const type = e.target.id;
    const value = e.target.value;
    type === "title"
      ? (post.current.title = value)
      : type === "user"
      ? (post.current.userId = value)
      : type === "body"
      ? (post.current.body = value)
      : console.error("not a valid type");
  };
  //Posting
  const handlePost = () => {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    axios
      .post(apiUrl, {
        userId: post.current.userId,
        title: post.current.title,
        body: post.current.body,
      })
      .then((response) => response.data)
      .then((data) => {
        const newState = [...State];
        newState.unshift(data);
        setState(newState);
      });
  };

  // Delete Post
  const handleDelete = (i) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${State[i].id}`)
      .then((response) => response.status)
      .then((status) => {
        const oldState = [...State];
        status === 200
          ? setState(oldState.filter((e) => e !== oldState[i]))
          : console.error("error");
      });
  };

  // Edit Post
  const handleEdit = (i) => {
    if (State[i].id !== 101) {
      console.log(State[i].id);
      axios
        .put(`https://jsonplaceholder.typicode.com/posts/${State[i].id}`, {
          userId: State[i].userId,
          id: State[i].id,
          title: post.current.title,
          body: post.current.body,
        })
        .then((res) => res.data)
        .then((data) => {
          const newState = [...State];
          const filter = newState.filter((e) => e.id === State[i].id);
          const index = newState.indexOf(filter[0]);
          newState[index] = data;
          setState(newState);
        });
    } else {
      // this conditional is to handle the use of a mock API
      console.log(State[i].id)
      const newState = [...State];
      const filter = newState.filter((e) => e.id === State[i].id);
      const index = newState.indexOf(filter[0]);
      newState[index] = post.current;
      setState(newState);
    }
  };

  //Posts array
  const PostHandler = (key) => {
    let arr = [];
    for (let i = 0; i < State.length; i++) {
      arr.push(
        <Post
          handleDelete={() => handleDelete(i)}
          handleEdit={() => handleEdit(i)}
          title={State[i].title}
          userId={State[i].userId}
          body={State[i].body}
        />
      );
    }
    return arr;
  };

  // Rendering
  return (
    <Grid
      container
      direction="cloumn"
      justify="flex-start"
      alignItems="center"
      spacing={4}
    >
      <TextBox
        handlePost={() => handlePost()}
        handleChange={(e) => handleChange(e)}
      />

      {PostHandler()}
    </Grid>
  );
};

export default TestApi;
