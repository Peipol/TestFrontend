import React, { useState, useEffect } from "react";

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
  },[setState]);

  const liElement = (key) => {
    let arr = [];
    for (let i = 0; i < State.length; i++){
      arr.push(<li>{State[i].[key]}</li>)
    }
    return arr;
  }
 

  return (
    <ul>
      {liElement("id")}
    </ul>
  );
};

export default TestApi;
