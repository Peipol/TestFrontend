import React from "react";
import {Breadcrumbs,Link, Typography} from "@material-ui/core"
const NavBar = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
    <Link color="inherit" href="/" onClick={()=> console.log('click')}>
      Material-UI
    </Link>
    <Link color="inherit" href="/getting-started/installation/" onClick={()=> console.log('click')}>
      Core
    </Link>
    <Typography color="textPrimary">Breadcrumb</Typography>
  </Breadcrumbs>
  );
};

export default NavBar;
