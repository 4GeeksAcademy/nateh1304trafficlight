import React, {useState} from "react";
import ReactDOM from "react-dom";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const TrafficLight = () => {
	const [ selectedColor, setSelected ] = useState("red");
	return (
		<div className="traffic-light">
			<div className= {selectedColor == "red" ? "glow red light": "red light"} onClick={() => setSelected("red")}></div>
			<div className= {selectedColor == "yellow" ? "glow yellow light": "yellow light"} onClick={() => setSelected("yellow")}></div>
			<div className= {selectedColor == "green" ? "glow green light": "green light"} onClick={() => setSelected("green")}></div>
		</div>
	);
};

ReactDOM.render(<TrafficLight />, document.querySelector('#app'));

export default TrafficLight;
