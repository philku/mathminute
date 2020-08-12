
import React from "react";

class About extends React.Component{
    render = () => (
        <div className="about">
            <div className="container">
                <h3>About</h3>
                <p>
                    You're not limited to a minute here. This little react project is based off my memories of the "Mad Minute"
                    exercise worksheets done in kindergarden to practice basic math skills. It's fun for adults too. Try it!
                </p>
                <a href="https://github.com/philku/mathminute-org">GitHub Project Page</a>
            </div>
        </div>
    );
}

export default About;