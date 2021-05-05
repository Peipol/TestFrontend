import { Grid, Paper, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Post from "./Post";


const TestApi = (props) => {
  const [State, setState] = useState([
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body:
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
  ]);

  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    fetch(apiUrl)
      .then((response) => response.json())
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
          title={State[i].title}
          userId={State[i].userId}
          body={State[i].body}
        />
      );
    }
    return arr;
  };

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

/*         <Grid item container>
          <Grid item>
            <Typography>{State.userId}</Typography>
          </Grid>
          <Grid item>
            <Typography>{State.id}</Typography>
          </Grid>
          <Grid item>
            <Typography>{State.title}</Typography>
          </Grid>
          <Grid item>
            <Typography>{State.body}</Typography>
          </Grid>
        </Grid>  */
