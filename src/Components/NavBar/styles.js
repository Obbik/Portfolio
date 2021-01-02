import {makeStyles} from "@material-ui/core"

const drawerWidth = 0;

export default makeStyles((theme) =>({

    AppBar:{
    backgroundColor:"#212121",
    [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    },
    Logo:{
      padding: "5px 5px 5px 5px",
     marginLeft:"20px"
    },
    grow:{
        flex:"1"
    },
    menu:{
        display:"flex",
        color:"#f3f3f3",
        marginRight:"3rem"
    },
    menuText:{
        marginRight:"3rem"
    }




}))