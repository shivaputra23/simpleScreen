import React from "react";
import classes from "./Container.module.css";
import { Button, ButtonGroup, Typography } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Save } from "@material-ui/icons";

function Container() {
  return (
    <div className={classes.grid}>
      <div className={classes.imageContainer}>
        <img src="/face.jpg" alt="scanner" className={classes.scanner} />
        <Typography variant="h6" className={classes.text_center}>
          <b>Search players,stats and more</b>
        </Typography>
      </div>
      <div className={classes.text_center}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
      <div>
        <ButtonGroup variant="contained">
          <Button
            variant="contained"
            startIcon={<Save style={{ color: "white" }} />}
            style={{ backgroundColor: "red", height: "3rem", color: "white" }}
          >
            Select Images
          </Button>
          <Button size="small" style={{ backgroundColor: "red" }}>
            <KeyboardArrowDownIcon style={{ color: "white" }} />
          </Button>
        </ButtonGroup>
        <Typography
          variant="overline"
          display="block"
          gutterBottom
          className={classes.text_center}
        >
          Or drop images here
        </Typography>
      </div>
    </div>
  );
}

export default Container;
