import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import SimpleCounter from "./component/secondsCounter.jsx";

let counter = 0;
const root = ReactDOM.createRoot(document.getElementById("app"));

setInterval(() => {
    const digitSix = Math.floor(counter / 100000) % 10;
    const digitFive = Math.floor(counter / 10000) % 10;
    const digitFour = Math.floor(counter / 1000) % 10;
    const digitThree = Math.floor(counter / 100) % 10;
    const digitTwo = Math.floor(counter / 10) % 10;
    const digitOne = Math.floor(counter / 1) % 10;

    counter++;

    root.render(
        <SimpleCounter
            digitSix={digitSix}
            digitFive={digitFive}
            digitFour={digitFour}
            digitThree={digitThree}
            digitTwo={digitTwo}
            digitOne={digitOne}
        />
    );
}, 1000);