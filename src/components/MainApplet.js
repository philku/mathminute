
import React from "react";

class MainApplet extends React.Component{
    state = {
        current: {
            top: 0,
            bottom: 0,
            operation: 0,
            solution: 0
        },
        error: undefined
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

        this.setState(() => (
            {
                current: {
                    top: top,
                    bottom: bottom,
                    operation: operation,
                    solution: solve(top, bottom, operation)
                }
            }
        ));
    };

    onAnswerSubmit = (e) => {
        e.preventDefault();

        const answer = parseInt(e.target.elements.answer.value);

        let error = undefined;
        if (isNaN(answer)) {
            error = 'Please enter a number.';
        }
        if (this.state.current.solution !== parseInt(e.target.elements.answer.value)) {
            error = parseInt(e.target.elements.answer.value).toString() + ' is incorrect.';
        }

        this.setState(()=>({ error }));

        e.target.elements.answer.value = '';
        if (!error) {
            // Correct
            this.nextQuestion();
        }
    };

    componentDidMount = () => {

    };

    render = () => (
        <div>
            <div>
                {this.state.current.top}
                {this.operations.representation[this.state.current.operation]}
                {this.state.current.bottom}
            </div>
            <div>
                {this.state.error}
            </div>
            <form onSubmit={this.onAnswerSubmit}>
                <input name="answer" autoFocus={true}/>
                <button>Submit</button>
                <p>Hit enter or click submit to answer.</p>
            </form>
        </div>
    );
}

export default MainApplet;