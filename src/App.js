import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
// import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Content from "./Components/Content";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundColor: "hotpink",
//     height: "100vh",
//   },
// }));

function App() {
  // const classes = useStyles();
  // const { root } = classes;
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
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12}>
            <NavBar />
          </Grid>
          <Grid item xs={12}>
            <Content />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;
