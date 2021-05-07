import Grid from "@material-ui/core/Grid";
import React, { useState, useEffect } from "react";
import Post from "../Post";
import axios from "axios"
const TestApi = (props) => {
  // State
  const [State, setState] = useState([
    {
      userId: "",
      id: "",
      title:
        "Loading...",
      body:
        "",
    },
  ]);
  // API Handling
  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    axios.get(apiUrl)
      .then((response) => response.data)
      .then(
        (data)=>{
          setState(data);
          console.log(data);
        }
      )
  }, [setState]);

  // Posts creation
  const PostHandler = (key) => {
    let arr = [];
    for (let i = 0; i < State.length; i++) {
      arr.push(
        <Post
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
      {PostHandler()}
    </Grid>
  );
};

export default TestApi;
