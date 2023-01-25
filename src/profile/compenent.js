import PropTypes from "prop-types";
const compenent = (props) => {
  compenent.defaultProps = {
    fullName: "Admin",
    bio:"none",
    profession:"none",
    handleName:()=> {
      alert(`Hello Admin`)
    },
   };
   compenent.propTypes={
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func,
   };
  return (
    <div>
    <div>{props.handleName(props.fullName)}</div>
    <div style={{backgroundColor:"red",lineHeight:"10rem",height:"10rem",position:"relative"}}>
      <h1 style={{textAlign:"center",fontFamily:"'Lobster', cursive"}}>Hello to my Profile</h1>
    <img style={{width:'7rem',height:"7rem",borderRadius:'70%',borderColor:"white",borderWidth:"2%",borderStyle:"solid",position:"absolute",top:"5rem",left:"1rem"}} src={props.children} alt="myImage"/>
    </div>
    <div style={{marginLeft:"1rem",marginTop:"3rem",fontFamily:"'Lobster', cursive",fontSize:"120%"}}>
    <div>{props.fullName}</div>
    <div>{props.bio}</div>
    <div>{props.profession}</div>
    </div>
    </div>
  )
}
export default compenent;