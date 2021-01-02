import {makeStyles} from "@material-ui/core"

export default makeStyles((theme) =>({
Container:{
    color:"#3f3f3f3",
    display:"flex",
    backgroundColor:"#282A29",
    height:"1000px",
},
rightSection:{
    display:"flex",
    width:"75%",
    textAlign:"center",
    flexDirection:"column",
    justifyContent:"center"
},
image:{
    width:"40%",
    transform: "rotateY(180deg)",
},
textHeader:{
    color:"#f3f3f3",
    marginLeft:"40px"

}
}))