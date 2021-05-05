import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import TestAPI from "./Components/testAPI"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "hotpink",
    height: "100vh",
  },
}));

function App() {
  const classes = useStyles();
  const { root } = classes;
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
          style={{width:"inherit"}}
        >
          <Grid item xs={12} style={{width:"inherit"}}>
            <Header />
          </Grid>
          <Grid item style={{width:"inherit"}}>
            <NavBar />
          </Grid>
          <Grid item style={{width:"inherit"}}>
            <main style={{width:"inherit", height: "85vh"}}>
              {/* <div style={
                {
                  backgroundColor: "gray",
                  height: "100%",
                  width: "100%",
                }
              }/> */}
              <TestAPI/>
            </main>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;
