import React from 'react'
import PerformanceAnalysisByYear from './PerformanceAnalysisByYear/PerformanceAnalysisByYear'
import './PerformanceAnalysis.css'

const Performance = () => {
    return(
        <div className="data-analysis-container">
            <h3 className="sachin-analysis">Sachin's Career Analysis</h3>
            <PerformanceAnalysisByYear />
        </div>
    )
}

export default Performance;