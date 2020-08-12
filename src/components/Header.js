
import React from "react";
import Score from "./Score";

const Header = (props) => (
    <header>
        <div className="container">
            <div className="header-left">
                <h1 className="site-title">Math Minute</h1>
                <p>Basic Math, Rapid-fire Style</p>
            </div>
            <div className="header-right">
                <Score
                    score={props.score}
                />
            </div>
        </div>
    </header>
);

export default Header;