import React from "react";
import Header from "./Header";
import MainApplet from "./MainApplet";

class MathMinuteApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <MainApplet/>
                </div>
            </div>
        );
    }
}

export default MathMinuteApp;