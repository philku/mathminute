
import React from "react";

class Questions extends React.Component{
    render = () => (
        <div className="questions">
            <div className="question question-inactive question-previous">

                <div className="question-top">
                    {this.props.previous.top}
                </div>
                <div className="question-bottom">
                    <div className="question-bottom_operation">
                        {this.props.representations[this.props.previous.operation]}
                    </div>
                    <div className="question-bottom_digit">
                        {this.props.previous.bottom}
                    </div>
                </div>

            </div>
            <div className="question question-active">

                <div className="question-top">
                    {this.props.current.top}
                </div>
                <div className="question-bottom">
                    <div className="question-bottom_operation">
                        {this.props.representations[this.props.current.operation]}
                    </div>
                    <div className="question-bottom_digit">
                        {this.props.current.bottom}
                    </div>
                </div>

            </div>
            <div className="question question-inactive question-next">

                <div className="question-top">
                    {this.props.next.top}
                </div>
                <div className="question-bottom">
                    <div className="question-bottom_operation">
                        {this.props.representations[this.props.next.operation]}
                    </div>
                    <div className="question-bottom_digit">
                        {this.props.next.bottom}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Questions;