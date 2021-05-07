import React from "react";
import { Breadcrumbs, Typography } from "@material-ui/core";

const TG = (props) => (
  <Typography variant={props.variant} style={props.style}>
    {props.content}
  </Typography>
);

const NavBar = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <TG variant="body1" content="GET" />
      <TG variant="body1" content="POST" />
      <TG variant="body1" content="PUT" />
      <TG variant="body1" content="DELETE" />
    </Breadcrumbs>
  );
};

export default NavBar;
