import React from 'react'
import {Container, Typography} from '@material-ui/core'
import useStyles from "./styles";
import image from "../../images/aboutMeImage.svg"
import SkillsTab from "./SkillsTab/SkillsTab"

const FirstSection = () => {
    
   

    const classes = useStyles();
    return (
            <Container maxWidth={false} className={classes.Container}>
              <section id="about_me" />
              
                <img src={image} height="100%" className={classes.image} alt="#"/>
                <div className={classes.rightSection}>
                  <Typography variant="h4" gutterBottom className={classes.textHeader} >
                      Who am I ? 
                  </Typography >
                  <Typography variant="subtitle1" className={classes.textAboutMe}>
                    My name is Norbert Dering. I'm Front End Developer lived in Poland, Szczecin. <br />
                    With 6 months experience I've worked with both Front and Back end stack, with usage of  <br />
                    <b> Javascript React Redux Saga Python Mongo Docker etc.:</b>  
                  </Typography>
                <SkillsTab />
                </div>
              
            </Container>
        
    )
}

export default FirstSection
