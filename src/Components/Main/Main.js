import React from 'react'
import { Box, Container, Typography } from "@material-ui/core"
import useStyles from "./styles"

const Main = () => {
    const classes = useStyles()
    return (
            <Box display="flex" width={1}  className={classes.Container}>
              <div className={classes.toolbar}/>
                <Typography variant="h1" className={classes.name}>
                    Norbert Dering 
                </Typography>
                <Typography>
text
                </Typography>

              
            </Box>
    )
}

export default Main
