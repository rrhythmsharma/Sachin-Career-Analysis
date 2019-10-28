import React from 'react';
import Header from '../../components/Header/Header'
import RunsNWickets from '../../components/RunsNWickets/RunsNWickets'
import PerformanceAnalysis from '../../components/PerformanceAnalysis/PerformanceAnalysis'
import FunFacts from '../../components/FunFacts/FunFacts'
import Comparison from '../../components/Comparison/Comparison'
import Conclusion from '../../components/Conclusion/Conclusion'

const SachinWebsite = () => {
    
    return (
        <div className="main-container">
            
            <Header /> 
            {/* IT CONTAINS HEADING AND DESCRIPTION OF SACHIN*/}

            
            <RunsNWickets />
            {/* IT SHOWS SACHIN'S CAREER DATA USING GRAPH, 
                COMPONENT HAS A DROPDOWN INPUT THROUGH WHICH USER CAN CHOOSE ON
                WHICH SKILL OF SACHIN USER WANT TO SEE THE GRAPH, FOR EX. --> RUNS, WICKES TAKEN,  
            */}
            
            <PerformanceAnalysis />
            {/* SHOW THE DATA USING BAR GRAPH
                IT WILL BE DIRECT DATA
            */}

            <FunFacts />
            {/* FUN FACT SECTION
                CALUCULATE THE DATA 
                AND SHOW THAT DATA IN FORM OF PIE CHART 
                FOR EX. --> 
                1) AVG. SCORE OF SACHIN WHILE CHASING
                2) WHEN SACHIN SCORE 100'S OR 50'S, THEN WHAT IS THE CHANCE OF INDIA OF WINNIG
            */}

            <Comparison />
            {/* COMPARING SACHIN'S STATS WITH OTHER CRICKETERS
                BASED ON 
                1) AVG. SCORE
                2) STRIKE RATE
                3) TOTAL RUNS
                4) 
            */}

            <Conclusion />

        </div>
    )
}

export default SachinWebsite;