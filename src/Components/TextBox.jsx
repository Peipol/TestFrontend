import React, { useState } from "react";
import { Grid, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import DoneIcon from "@material-ui/icons/Done";
import Divider from "./Utilities/Divider";

const GI = (props) => (
  <Grid item xs={props.xs}>
    {props.content}
  </Grid>
);

const TB = (props) => (
  <TextField
    fullWidth
    id={props.label.toLowerCase()}
    label={props.label}
    variant="outlined"
    onChange={(e) => props.handleChange(e)}
    {...props}
  />
);

const IC = (props) => (
  <Button
    fullWidth
    variant="outlined"
    color="default"
    disableElevation
    endIcon={props.icon}
    onClick={() => props.handlePost()}
  >
    {props.label}
  </Button>
);


const TextBox = (props) => {
  return (
    <React.Fragment>
      <Divider w="75%" />
      <Grid
        item
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        spacing={1}
      >
        <GI xs={6} content={<TB label="Title" handleChange={(e)=> props.handleChange(e)} />} />
        <GI xs={true} content={<TB label="User" handleChange={(e)=> props.handleChange(e)} />} />
        <GI xs={12} content={<TB label="Body" handleChange={(e)=> props.handleChange(e)} multiline rowMax={4} />} />
        <GI
          xs={12}
          content={
            <IC handlePost={()=>props.handlePost()} label="" icon={<DoneIcon />} />
          }
        />
      </Grid>
    </React.Fragment>
  );
};

export default TextBox;
