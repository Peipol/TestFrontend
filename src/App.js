import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
// import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Content from "./Components/Utilities/Content";

const GI = (props) => <Grid item xs={props.xs}>{props.content}</Grid>

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
          style={{ width: "inherit" }}
          spacing={1}
        >
          <GI xs={12} content={<Header/>} />
          <GI xs={12} content={<NavBar/>} />
          <GI xs={12} content={<Content/>} />
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;
