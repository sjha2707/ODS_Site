import React, { Fragment } from "react";
import { Paper, ListItem, List, ListItemText } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  sideBar__block: {
    padding: 1
  },
  sideBar__list__element: {
    li: {
      borderBottom: "1px solid rgb(212, 212, 212)"
    }
  },

  sideBar__listItem__element: {
    borderBottom: "1px solid rgb(212, 212, 212)"
  }
};
const SideBar = (props) => {
  const { classes } = props;
  return (
    <div className={classes.sideBar__block}>
      <style>{`
        li {
          border-bottom: 1px solid #444;
        }
      `}</style>
      <Paper className={classes.sideBar__list__element}>
        <List>
          <ListItem>
            <ListItemText primary="" secondary="" />
          </ListItem>
        </List>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(SideBar);
