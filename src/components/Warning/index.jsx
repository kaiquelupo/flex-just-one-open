import React from 'react';
import nopeGif from "../../images/nope.gif";
import "./style.css";


const Warning = () => {
    return (
        <div id="warning-container">
            <div> 
                There is another Flex open. Please close this tab and return <br />
                to the other one  or close the other one and reload this page <br /> 
                <span>
                    Remember: by reloading or closing a tab, you will hangup<br /> 
                    an active call if in progress
                </span>
            </div>
            <img src={nopeGif} /> 
        </div>
    )
}

export default Warning;

// There is another Flex open. Please close this tab and return to the other one.