import React from 'react'
import {AppBar, Toolbar, Typography} from "@material-ui/core"
import useStyles from './styles'
import logo from "../../images/logo1.png"


const Navbar = () => {
    const classes = useStyles()
    return (
        <div>
            <AppBar position="fixed" color="" className={classes.AppBar}>
              <Toolbar>
                  <Typography>
                <img src={logo} alt="logo" height='30px' width="80" className={classes.Logo}/>
                </Typography>
                <div className={classes.grow}/>

                <div className={classes.menu}>
                    <Typography className={classes.menuText}>
                        tekst
                    </Typography>
                    <Typography className={classes.menuText}>
                        tekst
                    </Typography>
                    <Typography className={classes.menuText}>
                        tekst
                    </Typography>
                    <Typography className={classes.menuText}>
                        tekst
                    </Typography>

                </div>

              </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
