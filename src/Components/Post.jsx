import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {},
}));

const Post = (props) => {
  const classes = useStyles();
  const { title, userId, body } = props;
  return (
    <React.Fragment>
      <Grid
        className={classes.container}
        item
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Divider style={{ width: "75%" }} />
      </Grid>
      <Grid
        className={classes.container}
        item
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item xs={6}>
          <Typography variant="h6">{title}</Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="caption">{userId}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">{body}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Post;
