import React from 'react'
import {Button, Container, Typography} from "@material-ui/core"
import useStyles from "./style";
import image from "../../images/rightimage.png"
const Contact = () => {
    const classes = useStyles();
    return (
            <Container className={classes.contact} maxWidth={false}  disableGutters={true}>
                <section id="contact">
              <Typography variant="h3" align="center" gutterBottom className={classes.header}>
                Contact With Me
              </Typography>
              <Typography variant="h6" align="center"  paragraph>
                  If you want to contact with me, write to me on my adress <b>norbertdering@gmail.com</b> <br/>
                  Im waiting for your message!
              </Typography>
              <div style={{textAlign:"center"}}>
                <Button className={classes.button} variant="contained" href="mailto:norbertdering@gmail.com">
                    <Typography className={classes.buttonText}><b>Write to me!</b></Typography>
                </Button>
                </div>
                    <div className={classes.rightImage} >
                        <img src={image} className={classes.image} alt="#"/>
                    </div>
                </section>
            </Container>
    )
}

export default Contact
