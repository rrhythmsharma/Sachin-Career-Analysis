import React from 'react'
import AvgRunsWhileChasing from './AvgRunsWhileChasing/AvgRunsWhileChasing'
import AvgRunsWhenWon from './AvgRunsWhenWon/AvgRunsWhenWon'
import TotalHundredNFifty from './TotalHundredNFifty/TotalHundredNFifty'
import TotalWons from './TotalWons/TotalWons'
import TotalCatches from './TotalCatches/TotalCatches' 
import './FunFacts.css';

const FunFacts = () => {

    return(
        <div className="fun-facts-container">
            <h3 className="fun-facts-heading">Fun Facts</h3>
            <div className="container">
                <ul className="list-group">
                    <li className="list-group-item">
                        <AvgRunsWhileChasing />
                    </li>
                    <li className="list-group-item">
                        <AvgRunsWhenWon/>
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