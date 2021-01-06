import {makeStyles} from "@material-ui/core"

export default makeStyles((theme) =>({

    toolbar: theme.mixins.toolbar,
    container:{
        paddingTop:"200px",
        display:"flex",
        height:"1200px",
        justifyContent:"space-evenly",     
        background: "linear-gradient(83deg, rgba(35,37,38,1) 50%, rgba(65,67,69,1) 100%)",
    },
    mainButton:{
        
        borderRadius: "25px 25px 25px 25px",
        height:"50px",
        background: "#F65857"
    },
    name:{
        marginBottom:'100px',
        marginLeft:theme.spacing(15),
        letterSpacing:"5px",
        position:"relative",
        fontFamily:"",
        color:"#e0e0e0",
        "&:before": {
            position: "absolute",
            content: "'Hello '",
            top:"-25px",
            left: ".5rem",
            height: 4,
            fontSize:"30px",
            fontWeight:"300",
            letterSpacing:"10px",   
            opacity: .7,
            color:"lightgrey",
            fontFamily:"'Dancing Script', cursive",  
        },
        "&:after": {
            position: "absolute",
            content: "'Welcome to my website '",
            top:"100px",
            left: "0rem",
            width:"100.4%",
            fontSize:"25px",
            letterSpacing:"11px",
            fontFamily:" 'Noto Serif', serif",      
            opacity: .7,               
        },
    },
    left:{
        marginTop:"200px",
        display:"flex",
        flexDirection:"column",
        paddingRight:"150px"
    },
    uderName:{
        paddingTop:"50px",
        color:"white",
        fontSize:"40px",
        letterSpacing:"11px",
        fontWeight:"900",
        position:"relative",
        fontFamily:"  'Dancing Script', cursive",
    },
    mainImage:{
        marginLeft: "200px",    
    }
   
}))