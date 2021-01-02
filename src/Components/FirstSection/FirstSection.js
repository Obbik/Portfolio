import React from 'react'
import {Container, Typography} from '@material-ui/core'
import useStyles from "./styles";
import image from "../../images/aboutMeImage.svg"

const FirstSection = () => {
    const classes = useStyles();
    return (
            <Container maxWidth="false" className={classes.Container}>
              
              <img src={image} height="100%" className={classes.image} />
              <div className={classes.rightSection}>
                <Typography variant="h4" gutterBottom className={classes.textHeader} >
                    Who am I ? 
                </Typography >
                <Typography variant="body2" className={classes.textAboutMe}>
                    baba
                </Typography>
                <div >
                    test
                </div>
              </div>
            </Container>
        
    )
}

export default FirstSection
