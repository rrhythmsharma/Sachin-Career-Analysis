import React from 'react'

const AvgRunsWhileChasing = (props) => {

    return (
        <div className="fact-container-1">
            <h3 className="fact-heading">Average Score of Sachin while Chasing</h3>
            <div className="wrapper">
                <div className="right"></div>
                <div className="left"></div>
                    <div className="middle">
                        <p>{props.calculateTotal("AvgRunsWhileChasing")}</p>
                    </div>
            </div>
        </div>
    )
}

export default AvgRunsWhileChasing;