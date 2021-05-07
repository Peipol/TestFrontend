import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import  Grid from "@material-ui/core/Grid";
import Divider from "./Utilities/Divider";
import Gtypography from "./Utilities/Gtypography";

// const useStyles = makeStyles((theme) => ({
//   container: {},
// }));

const Post = (props) => {
  // const classes = useStyles();
  const { title, userId, body } = props;
  return (
    <React.Fragment>
      <Divider w="75%" />
      <Grid
        className
        item
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Gtypography xs={6} variant="h6" content={title} />
        <Gtypography
          xs={true}
          variant="caption"
          style={{ paddingLeft: "4rem" }}
          content={userId}
        />
        <Gtypography xs={12} variant="body1" content={body} />
      </Grid>
    </React.Fragment>
  );
};

export default Post;
