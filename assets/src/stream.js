import ReactPlayer from "react-player";

function Stream(props) {
    return (
      <ReactPlayer playing={true} volume={0.1} url={props.link}/>
    )
}

export default Stream;