
import React from "react";
import SubmitForm from "./SubmitForm";

class MainApplet extends React.Component{
    state = {
        previous: {
            top: 0,
            bottom: 0,
            operation: 0,
            solution: 0
        },
        current: {
            top: 0,
            bottom: 0,
            operation: 0,
            solution: 0
        },
        next: {
            top: 0,
            bottom: 0,
            operation: 0,
            solution: 0
        }
    };
    operations = {
        name: ['add','subtract','multiply'],
        representation: ['+','-','x']
    };

    nextQuestion = () => {
        const top = Math.floor(Math.random() * 10);
        const bottom = Math.floor(Math.random() * 10);
        const operation = Math.floor(Math.random() * 3);

        const solve = (top, bottom, operation) => {
            switch (operation) {
                case 0:
                    return top + bottom;
                case 1:
                    return top - bottom;
                case 2:
                    return top * bottom;
            }
        };

        this.setState((prevState) => (
            {
                previous: prevState.current,
                current: prevState.next,
                next: {
                    top: top,
                    bottom: bottom,
                    operation: operation,
                    solution: solve(top, bottom, operation)
                }
            }
        ));
    };

    onAnswerSubmit = (correct) => {
        if (correct) {
            this.nextQuestion();
        }
    };

    componentDidMount = () => {
        this.nextQuestion();
    };

    render = () => (
        <div>
            <div className="settings">

            </div>
            <div className="questions">
                <div className="question question-inactive question-previous">
                    {this.state.previous.top}
                    {this.operations.representation[this.state.previous.operation]}
                    {this.state.previous.bottom}
                </div>
                <div className="question question-active">
                    {this.state.current.top}
                    {this.operations.representation[this.state.current.operation]}
                    {this.state.current.bottom}
                </div>
                <div className="question question-inactive question-next">
                    {this.state.next.top}
                    {this.operations.representation[this.state.next.operation]}
                    {this.state.next.bottom}
                </div>
            </div>
            <SubmitForm
                onAnswerSubmit = {this.onAnswerSubmit}
                correctAnswer = {this.state.current.solution}
                error = {this.state.error}
            />
        </div>
    );
}

export default MainApplet;