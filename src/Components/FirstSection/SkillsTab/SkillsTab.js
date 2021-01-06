import React from 'react'
import {Paper, Grid, Typography} from "@material-ui/core"

import html from "../../../images/Logos/html-5.svg"
import css from "../../../images/Logos/css-3.svg"
import reactlogo from "../../../images/Logos/react.svg"
import JS from "../../../images/Logos/javascript.svg"
import redux from "../../../images/Logos/redux.svg"
import saga from "../../../images/Logos/redux-saga.svg"
import sass from "../../../images/Logos/sass.svg"
import python from "../../../images/Logos/python.svg"
import node from "../../../images/Logos/nodejs-icon.svg"
import mui from "../../../images/Logos/material-ui.svg"
import git from "../../../images/Logos/git-icon.svg"
import django from "../../../images/Logos/django.svg"


import useStyles from "./styles"

const SkillsTab = () => {
    const classes = useStyles()
    const skills = [
    {name:"HTML",icon:html},
    {name:"CSS",icon:css},
    {name:"Javascript",icon:JS},
    {name:"React",icon:reactlogo},
    {name:"Redux",icon:redux},
    {name:"Saga",icon:saga},
    {name:"Sass",icon:sass},
    {name:"Node",icon:node},
    {name:"Python",icon:python},
    {name:"M-UI",icon:mui},
    {name:"Git",icon:git},
    {name:"Django",icon:django},
   ]
    return (
        <div>
            <Grid container spacing={1} className={classes.skillsGrid}>
            {skills.map((obj)=>(
                <Grid item xs={3} key={obj.name} style={{paddingTop:"20px"}}>
                    <Paper   className={classes.skill} elevation={0}>
                        <img src={obj.icon} height="100%" className={classes.image} alt=""/>
                        <Typography variant="body2" className={classes.underImageText}>
                        {obj.name}
                        </Typography>
                    </Paper>
                </Grid>
            ))}
            </Grid>
        </div>
    )
}

export default SkillsTab
