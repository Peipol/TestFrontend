import Grid from "@material-ui/core/Grid";
import React, { useState, useEffect } from "react";
import Post from "../Post";
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
  // API Handling
  const SimulatedPost = () => {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    axios
      .post(apiUrl, {
        userId: 77,
        id: 1,
        title: "Hola vale",
        body: "Me llamo Pablito",
      })
      .then((response) => response.data)
      .then((data) => {
        setState([data,...State]);
        console.log("This the post",[data,...State])
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    axios
      .get(apiUrl)
      .then((response) => response.data)
      .then((data) => {
        setState(data);
        console.log(data);
      });
  }, [setState]);


  const PostHandler = (key) => {
    let arr = [];
    for (let i = 0; i < State.length; i++) {
      arr.push(
        <Post
          handleClick={()=>{
            console.log('click outside')
            axios.delete(`https://jsonplaceholder.typicode.com/posts/${State[i].id}`)
              .then((res)=>res.status)
              .then(
                (status)=>{ 
                const oldState = [...State];
                status === 200
                  ? setState(oldState.filter(e=> e !== oldState[i]))
                  : console.error("error")
                })
          }}
          title={State[i].title}
          userId={State[i].userId}
          body={State[i].body}
        />
      );
    }
    return arr;
  };

  // SimulatedPost();

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
