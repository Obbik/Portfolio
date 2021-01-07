import {makeStyles} from "@material-ui/core"

export default makeStyles((theme) =>({

   contact:{
       position:"relative",
       backgroundColor:"#282928",
       paddingTop:"100px",
       color:"#f3f3f3",
       paddingBottom:"100px"
   },
   button:{textAlign:"center"},
   header:{
    letterSpacing:"10px",
    fontFamily:"  'Dancing Script', cursive",
   },
   rightImage:{
       position: "absolute",
       top:'0px',
       height:"100%",
       right:"0",
       marginBottom:"200px",
       [theme.breakpoints.down('sm')]: {
        display:"none"
      }, 
       
   },
   image:{
       height:"100%"
   }
   
}))