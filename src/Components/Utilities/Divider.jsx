import React from 'react';
import DividerMaterialComponent from "@material-ui/core/Divider"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {},
}));

const Divider = (props) => {
  const w = props.w
  const classes = useStyles();
  return ( 
        <Grid
        className={classes.container}
        item
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <DividerMaterialComponent style={{ width: `${w}` }} />
      </Grid>
   );
}
 
export default Divider;