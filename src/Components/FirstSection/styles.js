import {makeStyles} from "@material-ui/core"

export default makeStyles((theme) =>({
Container:{
    color:"#3f3f3f3",
    display:"flex",
    backgroundColor:"#282A29",
    height:"1000px",
    [theme.breakpoints.down('sm')]: {
        height:"1300px"
      }, 
},
rightSection:{
    display:"flex",
    width:"75%",
    textAlign:"start",
    flexDirection:"column",
    marginTop:"250px"
},
image:{
    width:"40%",
    transform: "rotateY(180deg)",
    [theme.breakpoints.down('sm')]: {
        display:"none"
      }, 
},
textHeader:{
    color:"#f3f3f3",
    marginLeft:"40px",
    fontSize:"3rem",
    letterSpacing:'3px',
    fontFamily:"  'Dancing Script', cursive",
},
textAboutMe:{
    color:"#f5f5f5",
    opacity:".6",
    textAlign:"start",
    marginLeft:"40px",
    fontSize:"20px",
    letterSpacing:"1.1px",
    fontFamily:" 'Noto Serif', serif",  
    [theme.breakpoints.down('sm')]: {
        width:"300px"
      }, 
}
}))