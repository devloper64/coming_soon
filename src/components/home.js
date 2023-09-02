import React from "react";
import "../styles.css";
import Timer from "./Countdown/Timer";
import Preloader from "./Preloader/Preloader";

function Home() {
    return (
        <div className="App">
            <div className="container">
                <h1>
                    Edok
                </h1>
                <h1>Coming Soon</h1>
                <Timer />
                <Preloader />
            </div>
        </div>
    );
}
export default Home;