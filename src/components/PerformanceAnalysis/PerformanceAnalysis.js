import React from 'react'
import PerformanceAnalysisByYear from './PerformanceAnalysisByYear/PerformanceAnalysisByYear'
import './DataAnalysis.css'

const Data = () => {
    return(
        <div className="data-analysis-container">
            <h3 className="sachin-analysis">Sachin's Career Analysis</h3>
            <PerformanceAnalysisByYear />
        </div>
    )
}

export default Data;