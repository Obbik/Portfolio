import React from "react";
import { Box, Button, Container, Typography } from "@material-ui/core";
import useStyles from "./styles";
import main from "../../images/main.svg";


const Main = () => {
  const classes = useStyles();
  return (
    <Box display="flex" width="1" className={classes.Container}>
      <div className={classes.toolbar} />
      <div className={classes.left}>
        <Typography variant="h1" className={classes.name}>
          I'm Norbert
          <Typography variant="h3" className={classes.uderName}>
            -Front End Developer
          </Typography>
        </Typography>
        <Button>baba</Button>
      </div>
      <Typography>
        <img
          src={main}
          className={classes.mainImage}
          height="700px"
        />
      </Typography>
    </Box>
      
  );
};

export default Main;
