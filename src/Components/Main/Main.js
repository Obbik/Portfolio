import React from "react";
import {Button, Typography, Container } from "@material-ui/core";
import useStyles from "./styles";
import main from "../../images/main.svg";


const Main = () => {
  const classes = useStyles();
  return (
    <Container  maxWidth={false} disableGutters={true} className={classes.container}>

      <div className={classes.left}>
        <Typography variant="h1" className={classes.name}>
          I'm Norbert
          <Typography variant="body2" className={classes.uderName}>
            -Front End Developer
          </Typography>
        </Typography>
        <Typography align="center">
        <Button variant="contained"  className={classes.mainButton} href="#about_me"><b>Check my skills!</b></Button>
        </Typography>
      </div>
      <div>
        <img
          alt=""
          src={main}
          className={classes.mainImage}
          height={700}
        />
      </div>
    </Container>
      
  );
};

export default Main;
