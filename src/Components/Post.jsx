import React from "react";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Divider from "./Utilities/Divider";
import Gtypography from "./Utilities/Gtypography";

const GIC = (props) => (
  <React.Fragment>
    <Grid item xs={12}>
      <IconButton aria-label="delete" onClick={props.handleEdit}>
        <EditIcon/>
      </IconButton>
    </Grid>
    <Grid item xs={12}>
      <IconButton aria-label="delete" onClick={props.handleDelete}>
        <DeleteIcon />
      </IconButton>
    </Grid>
  </React.Fragment>
);
const GC = (props) => (
  <Grid
    item
    xs={props.xs}
    container
    direction="row"
    justify="space-evenly"
    alignItems="center"
  >
    {props.children}
  </Grid>
);

const Post = (props) => {
  const { title, userId, body } = props;
  return (
    <React.Fragment>
      <Divider w="75%" />
      <Grid
        className
        item
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <GC xs={10}>
          <Gtypography xs={6} variant="h6" content={title} />
          <Gtypography
            xs={true}
            variant="caption"
            style={{ paddingLeft: "4rem" }}
            content={userId}
          />
          <Gtypography xs={10} variant="body1" content={body} />
        </GC>
        <GC xs={true}>
          <GIC 
            handleDelete={props.handleDelete} 
            handleEdit={props.handleEdit}
          />
        </GC>
      </Grid>
    </React.Fragment>
  );
};

export default Post;
