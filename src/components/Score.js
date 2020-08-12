import React from "react";

class Score extends React.Component{

    render = () => (
        <div className="score">
            Complete: {this.props.score}
        </div>
    );
}

export default Score;