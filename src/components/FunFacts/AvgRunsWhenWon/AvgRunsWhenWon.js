import React from 'react';
// import rawData from  '../../../assets/sachin.json';

const AvgRunsWhenWon = (props) => {

    // const calculateTotalRuns = (Data) => {
    //     let notOut = 0;
    //     let totalMatches = 0;
    //     let Runs = Data.map((item) => {
    //         let run;
    //         if(typeof(item.batting_score) === 'string'){
    //             if(item.batting_score.charAt(item.batting_score.length - 1) === "*"){
    //                 run = parseInt(item.batting_score.slice(0, -1), 10)
    //                 notOut++;
    //                 totalMatches++;
    //             }else{
    //                 run = null;
    //             }
    //         }else{
    //             run = item.batting_score
    //             totalMatches++; 
    //         }
    //         return (run)
    //     })
        
    //     console.log(notOut)

    //     let sum = Runs.reduce((a, b) => a + b, 0)

    //     return ([sum, notOut, totalMatches]);
    // }

    
    // /*  AVERAGE SCORE WHILE CHASING */

    // const AvgRunsWhileChasing = () => {
        
    //     const secondBattingRuns = rawData.filter((item) => {
    //         return(item.match_result === 'won')
    //     })

    //     let TotalRuns = calculateTotalRuns(secondBattingRuns)

    //     let AvgRuns = TotalRuns[0]/(TotalRuns[2] - TotalRuns[1])

    //     return (Math.round(AvgRuns * 100) / 100)
    // }

    // console.log(AvgRunsWhileChasing())


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