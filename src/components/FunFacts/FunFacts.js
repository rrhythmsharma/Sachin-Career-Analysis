import React from 'react'
import AvgRunsWhileChasing from './AvgRunsWhileChasing/AvgRunsWhileChasing'
import AvgRunsWhenWon from './AvgRunsWhenWon/AvgRunsWhenWon'
import TotalHundredNFifty from './TotalHundredNFifty/TotalHundredNFifty'
import TotalWons from './TotalWons/TotalWons'
import TotalCatches from './TotalCatches/TotalCatches'
import rawData from  '../../assets/sachin.json';
import './FunFacts.css';

const FunFacts = () => {


    const calculateTotalRuns = (Data) => {
        let notOut = 0;
        let totalMatches = 0;
        let Runs = Data.map((item) => {
            let run;
            if(typeof(item.batting_score) === 'string'){
                if(item.batting_score.charAt(item.batting_score.length - 1) === "*"){
                    run = parseInt(item.batting_score.slice(0, -1), 10)
                    notOut++;
                    totalMatches++;
                }else{
                    run = null;
                }
            }else{
                run = item.batting_score
                totalMatches++; 
            }
            return (run)
        })
        
        console.log(notOut)

        let sum = Runs.reduce((a, b) => a + b, 0)

        return ([sum, notOut, totalMatches]);
    }

    const calculateTotal = (WhileChasingOrWhenWon) => {

        let filterRuns;
        let TotalRuns
        let AvgRuns

        if(WhileChasingOrWhenWon === "AvgRunsWhileChasing"){

            filterRuns = rawData.filter((item) => {
                return(item.batting_innings === '2nd')
            })
    
            TotalRuns = calculateTotalRuns(filterRuns)
    
            AvgRuns = TotalRuns[0]/(TotalRuns[2] - TotalRuns[1])
    
            return (Math.round(AvgRuns * 100) / 100)

        }else{
            filterRuns = rawData.filter((item) => {
                return(item.match_result === 'won')
            })
    
            TotalRuns = calculateTotalRuns(filterRuns)
    
            AvgRuns = TotalRuns[0]/(TotalRuns[2] - TotalRuns[1])
    
            return (Math.round(AvgRuns * 100) / 100)
        }
    }

    return(
        <div className="fun-facts-container">
            <h3 className="fun-facts-heading">Fun Facts</h3>
            <div className="container">
                <ul className="list-group">
                    <li className="list-group-item">
                        <AvgRunsWhileChasing calculateTotal={calculateTotal} />
                    </li>
                    <li className="list-group-item">
                        <AvgRunsWhenWon calculateTotal={calculateTotal}/>
                    </li>
                    <li className="list-group-item">
                        <TotalWons />
                    </li>
                    <li className="list-group-item">
                        <TotalHundredNFifty />
                    </li>
                    <li className="list-group-item">
                        <TotalCatches />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FunFacts;