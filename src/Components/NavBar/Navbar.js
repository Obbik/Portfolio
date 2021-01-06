import React from 'react'
import {AppBar, Toolbar, Typography} from "@material-ui/core"
import useStyles from './styles'
import logo from "../../images/logo1.png"


const Navbar = () => {
    const classes = useStyles()
    return (
        <div>
            <AppBar position="fixed"  className={classes.AppBar}>
              <Toolbar>      
                  <Typography>
                <img src={logo} alt="logo" height='30px' width="80" className={classes.Logo} />
                </Typography>
                     <div className={classes.grow}/>
                <div className={classes.menu}>
                    <Typography className={classes.menuText} >
                        <a href="#about_me">
                        About Me
                        </a>
                    </Typography>
                    <Typography className={classes.menuText}>
                    <a href="#portfolio">
                    Portfolio
                    </a>
                    </Typography>
                    <Typography className={classes.menuText} >
                    <a href="#contact">
                        Conctact me 
                    </a>
                    </Typography>
                </div>
              </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
