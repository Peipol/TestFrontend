import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const Gtypography = (props) => {
  const { content, xs, variant, style } = props;
  return (
    <Grid item xs={xs}>
      <Typography variant={variant} style={style}>
        {content}
      </Typography>
    </Grid>
  );
};

export default Gtypography;
