import React from 'react'
import {Container, Typography} from "@material-ui/core"
import useStyles from "./styles";
import nba from "../../images/Projects/nba.png"
import ecommerce from "../../images/Projects/ecommerce.jpg"

const SecondSection = () => {
    const classes = useStyles();
    return (
    <Container maxWidth={false}  disableGutters={true}  className={classes.container} >
      <section id="portfolio">
      <Typography variant="h1" align="center" gutterBottom className={classes.projectText}>
        My Projects
      </Typography>
      <div className={classes.images}>
        <div className={classes.imageDiv}>
          <img src={nba}  className={classes.image} alt=""/>
          <h1 className={classes.header}> <a href="https://nba-portal-64cfd.web.app/"> Click Me! </a> </h1>
          <Typography variant="h3" color="primary"  className={classes.textUnderImage}>
            In this project I've mainly practised React and Redux to create responsive mobile friendly application
          </Typography>
        </div>
        <div className={classes.imageDiv}>
          <img  src={ecommerce}  className={classes.image} alt=""/>
          <h1 className={classes.header}>Click Me! </h1>
          <Typography variant="h3" color="primary" className={classes.textUnderImage}>
            In this project I've focused more about how to make E-Commerce website with Headless CMS Commerce.Js   
          </Typography>
       </div>
      </div>
      </section>
    </Container>
    )
}

export default SecondSection
