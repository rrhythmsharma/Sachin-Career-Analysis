import React from 'react';

const AvgRunsWhenWon = (props) => {

    return(
        <div className="fact-container-1">
            <h3 className="fact-heading">Average Score of Sachin When India Won</h3>
            <div className="wrapper">
                <div className="right"></div>
                <div className="left"></div>
                    <div className="middle">
                        <p>{props.calculateTotal("AvgRunsWhenWon")}</p>
                    </div>
            </div>
        </div>
    )
}

export default AvgRunsWhenWon;