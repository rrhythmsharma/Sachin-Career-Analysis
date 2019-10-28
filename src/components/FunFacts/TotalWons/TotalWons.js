import React from 'react';
import rawData from  '../../../assets/sachin.json';

const TotalWons = () => {
    
    let wons = 0;

    rawData.forEach((item) => {
            
        if(typeof(item.batting_score) === 'string'){
            if(item.batting_score.charAt(item.batting_score.length - 1) === "*"){
                if(parseInt(item.batting_score.slice(0, -1), 10) >= 50){
                    if(item.match_result === "won"){
                        wons++;
                    }
                }
            }
        }else{
            if(item.batting_score >= 50){
                if(item.match_result === "won"){
                    wons++;
                }
            }
        }
    })

    return (
        <div className="fact-container-1">
            <h3 className="fact-heading">Total Wons By India When Sachin Socred more than fifty Runs</h3>
            <div className="wrapper">
                <div className="right"></div>
                <div className="left"></div>
                    <div className="middle">
                        <p>{wons}</p>
                    </div>
                <div className="popover"></div>
            </div>
        </div>
    )
}

export default TotalWons;
