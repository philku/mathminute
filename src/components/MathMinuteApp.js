import React from "react";
import Header from "./Header";
import MainApplet from "./MainApplet";
import About from "./About";

class MathMinuteApp extends React.Component {
    state = {
        score: 0
    };

    incrementScore = () => {
        this.setState((prevState)=>(
            {
                score: prevState.score + 1
            }
        ));
    };

    render() {
        return (
            <div>
                <Header score={this.state.score}/>
                <div className="container">
                    <MainApplet
                        incrementScore = {this.incrementScore}
                    />
                </div>
                <About />
            </div>
        );
    }
}

export default MathMinuteApp;