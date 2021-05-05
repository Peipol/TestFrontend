import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "hotpink",
    height: "100vh",
  },
}));

function App() {
  const classes = useStyles();
 const {root} = classes
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography component="div" className={root} />
      </Container>
    </React.Fragment>
  );
}

export default App;
