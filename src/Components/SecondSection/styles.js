import {makeStyles} from "@material-ui/core"
export default makeStyles((theme) =>({
    container:{
        backgroundColor:"#242524",
        height:"1000px"
    },
    projectText:{
        paddingTop:"100px",
        color:"#f3f3f3",
        fontFamily:"  'Dancing Script', cursive",
        letterSpacing:"10px"
    },
    images:{
        backgroundSize:"contain",
        marginTop:theme.spacing(5),
        display:"flex",
        justifyContent:"space-evenly",
        flexWrap: "wrap",
    },
    textUnderImage:{
        color:"#f3f3f3",
        paddingTop:"20px",
        fontSize:"28px",
        textAlign:"center",
        fontFamily: "'Noto Serif', serif",
        opacity:".8"
    },
    
    imageDiv:{
        position:"relative",
        border:"1px solid black",
        width:"800px",
        height:"400px",
        borderTop: "5px solid #bcbcbc",
        borderBottom: "5px solid #bcbcbc",
        marginBottom:"20px",
        '& a':{
            textDecoration:"none",
            color:"#f3f3f3",
        },
     
        "&:hover img": {
            transition: "opacity .2s, top .2s",
            
            opacity:".2"
        },
        "&:hover h1":{
            transition: "top 1s",
            opacity:1,
            top:"38%",
        }
    },
    image:{
        height:"100%",
        maxWidth:"100%",
       

    },
    header:{
        textDecoration:"none",
        color:"#f3f3f3",
        opacity:0,
        position:"absolute",
        top:"35%",
        textAlign:"center",
        width:"100%",
    }
  
   
   
   
}))