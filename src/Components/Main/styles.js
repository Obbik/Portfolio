import {makeStyles} from "@material-ui/core"

export default makeStyles((theme) =>({

    toolbar: theme.mixins.toolbar,
    Container:{
        height:"1000px",
        background: "rgb(35,37,38)",
        background: "linear-gradient(83deg, rgba(35,37,38,1) 50%, rgba(65,67,69,1) 100%)",
        alignItems:"center",
    },
    name:{
        marginBottom:"160px",
        marginLeft:theme.spacing(15),
        color:"#f3f3f3",
        letterSpacing:"5px",
        position:"relative",
        fontFamily:"",
        "&:before": {
            position: "absolute",
            content: "'Hi! Im Called ... '",
            top:"-50px",
            left: "1rem",
            height: 4,
            fontSize:"30px",
            fontWeight:"300",
            letterSpacing:"6px",
            fontFamily:" 'Noto Serif', serif",
           
            
            
           
          }
      
    }




}))