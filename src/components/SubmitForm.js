
import React from "react";

class SubmitForm extends React.Component{
    state = {
        error: undefined
    };

    onAnswerSubmit = (e) => {
        e.preventDefault();
        const answer = parseInt(e.target.elements.answer.value);

        let error = undefined;
        if (isNaN(answer)) {
            error = 'Please enter a number.';
        } else if (this.props.correctAnswer !== parseInt(e.target.elements.answer.value)) {
            error = parseInt(e.target.elements.answer.value).toString() + ' is incorrect.';
        }

        this.setState(()=>({ error }));

        e.target.elements.answer.value = '';
        if (!error) {
            // Correct
            this.props.onAnswerSubmit(true);
        }
    };

    render = () => (
        <div className="submit-section">
            <div className="submit-error">
                {this.state.error}
            </div>
            <form
                onSubmit={this.onAnswerSubmit}
                className="submit-form"
            >
                <input
                    name="answer"
                    autoFocus={true}
                    placeholder="?"
                />
                <button>Submit</button>
                <p>Hit enter or click submit to answer.</p>
            </form>
        </div>
    );
}

export default SubmitForm;