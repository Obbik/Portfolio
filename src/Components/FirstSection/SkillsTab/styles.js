import {makeStyles} from "@material-ui/core"

export default makeStyles((theme) =>({
    skillsGrid:{
        paddingTop:"20px",
        justifyContent:"space-between",
        [theme.breakpoints.down('sm')]: {
            position:"absolute",
            width:"300px"
          }, 
    },

    skill:{
        width:theme.spacing(9),
        padding:"20px",
        backgroundColor:"transparent",
        textAlign:"center",
        height:theme.spacing(9),
        opacity:"0.5",
        transition: 'opacity .5s, width .5s, height .5s ',
            '&:hover': {
                opacity:"1",
                width:theme.spacing(11),
                height:theme.spacing(11),
            }
    },
    underImageText:{
        color:"#f3f3f3",
        fontFamily:"  'Dancing Script', cursive",
        fontSize:theme.spacing(3),
        letterSpacing:"3px"
    }
    

}))