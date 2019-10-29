import React from 'react'
import rawData from  '../../../assets/sachin.json';

const TotalHundredNFifty = () => {
    
        let hundredCounter = 0;
        let fiftyCounter = 0; 

        rawData.forEach((item) => {
            
            if(typeof(item.batting_score) === 'string'){
                if(item.batting_score.charAt(item.batting_score.length - 1) === "*"){
                    if(parseInt(item.batting_score.slice(0, -1), 10) >= 100 ){
                        hundredCounter++;
                    }
                    if(parseInt(item.batting_score.slice(0, -1), 10) >= 50  && parseInt(item.batting_score.slice(0, -1), 10) <= 99 ){
                        fiftyCounter++;
                    }
                }
            }else{
                if(item.batting_score >= 100){
                    hundredCounter++
                }
                if(item.batting_score >= 50  && item.batting_score <= 99 ){
                    fiftyCounter++
                }
            }
        })


    return (
        <div className="fact-container-1">
            <h3 className="fact-heading">Total Hundreds by Sachin</h3>
            <div className="wrapper">
                <div className="right"></div>
                <div className="left"></div>
                    <div className="middle">
                        <p>{hundredCounter}</p>
                    </div>
                <div className="popover"></div>
            </div>
            <h3 className="fact-heading">Total Fifty by Sachin</h3>
            <div className="wrapper">
                <div className="right"></div>
                <div className="left"></div>
                    <div className="middle">
                        <p>{fiftyCounter}</p>
                    </div>
            </div>
        </div>
    )
}

export default TotalHundredNFifty; 