import React from "react";
import {Breadcrumbs,Link, Typography} from "@material-ui/core"
const NavBar = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
    <Link color="inherit" href="/" onClick={()=> console.log('click')}>
      Testing GET
    </Link>
    <Link color="inherit" href="/getting-started/installation/" onClick={()=> console.log('click')}>
      Testing POST
    </Link>
    <Typography color="textPrimary">Testing DELETE</Typography>
  </Breadcrumbs>
  );
};

export default NavBar;
