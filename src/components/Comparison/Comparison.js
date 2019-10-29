import React, { Component } from 'react'
import TableRow from './TableRow/TableRow';
import rawData from  '../../assets/all-time-top-hundred-batsman.json';
import './Comparison.css'

class Comparison extends Component {
    
    state = {
        competitor: '',
        sachinArray: [],
        currentCompetitorArray: [],
        Data: []
    }

    componentDidMount() {
        let currentCompetitorArray = rawData[1];
        let sachinArray = rawData[0];
        let Data = [...rawData]
        Data.shift()

        this.setState({
            currentCompetitorArray: currentCompetitorArray,
            competitor: currentCompetitorArray.Player,
            sachinArray: sachinArray,
            Data: Data
        })
    }

    onChangeCompetitorHandler = (e) => {

        let currentCompetitorArray =  rawData.filter((item) => {
            return(item.Player === e.target.value)
        })
        
        this.setState({
            competitor: e.target.value,
            currentCompetitorArray: currentCompetitorArray[0]
        })
    }

    render() {

        const { competitor, currentCompetitorArray, sachinArray, Data } = this.state;

        return(
            <div className="comparison-container">
                <h3 className="comparison-heading">Comparison</h3>
    
                <div className="comparison-drop-down-container">
                    <span className="comparison-drop-down-span"> Select the player for comparison </span>
                    <select className="comparison-drop-down-select-option" value={competitor} onChange={this.onChangeCompetitorHandler}>
                    {
                        Data.map((item, index) =>
                        <option key={`${index}`} value={item.Player}> {item.Player} </option>
                    )}
                    </select>
                </div>

                <table className="comparison-table">
                            <tbody>
                                <tr className="table-first-row">
                                    <th className="table-heading">Sachin</th>
                                    <th className="table-heading">vs</th>
                                    <th className="table-heading">{competitor}</th>
                                </tr>
                                <TableRow sachinData={sachinArray.Span} competitorData={currentCompetitorArray.Span} Label={"Span"} />
                                <TableRow sachinData={sachinArray.Innings} competitorData={currentCompetitorArray.Innings} Label={"Innings"} />
                                <TableRow sachinData={sachinArray.Runs} competitorData={currentCompetitorArray.Runs} Label={"Runs"} />
                                <TableRow sachinData={sachinArray.HighestScore} competitorData={currentCompetitorArray.HighestScore} Label={"H-S"} />
                                <TableRow sachinData={sachinArray.Average} competitorData={currentCompetitorArray.Average} Label={"Average"} />
                                <TableRow sachinData={sachinArray.StrikeRate} competitorData={currentCompetitorArray.StrikeRate} Label={"S-R"} />
                                <TableRow sachinData={sachinArray.Hundreds} competitorData={currentCompetitorArray.Hundreds} Label={"100's"} />
                                <TableRow sachinData={sachinArray.Fifties} competitorData={currentCompetitorArray.Fifties} Label={"50's"} lastLine ={"last-line"}  />
                            </tbody>
        
                </table>
            </div>
        )
    }
}

export default Comparison;