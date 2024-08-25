import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Spinner 
    animation="border"
    role="status"
    style={{
        width:"75px",
        height:"75px",
        margin:"auto",
        display:"block",
        color:"grey",
    }}></Spinner>
  )
}

export default Loader