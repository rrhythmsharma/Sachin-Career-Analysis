import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';
import rawData from  '../../assets/sachin.json';
import './RunsNWickets.css';

const FilterArray = [
    'Runs',
    'Wickets'
]

const Labels = rawData.map((item) => {
    return (item.date)
})

const Runs = rawData.map((item) => {
    let run;
    if(typeof(item.batting_score) === 'string'){
        if(item.batting_score.charAt(item.batting_score.length - 1) === "*"){
            run = parseInt(item.batting_score.slice(0, -1), 10)
        }else{
            run = null;
        }
    }else{
        run = item.batting_score 
    }
    return (run)
})


const Wickets = rawData.map((item) => {
    let wickets;
    if(item.wickets === "-"){
        wickets = null
    }else{
        wickets = item.wickets;
    }
    return (wickets)
}) 


class Graph extends Component {
    constructor(){
        super();
        this.state = {
            filter: 'Runs',
            currentFilter: [...Runs],
            labelString: "Runs in the match"
        }
    }

    onChangeFilterHandler = (e) => {
        
        this.setState({
            filter: e.target.value,
        })

        if(e.target.value === "Runs"){
            this.setState({
                currentFilter: [...Runs],
                labelString: "Runs in the match"
            })
        }

        if(e.target.value === "Wickets"){
            this.setState({
                currentFilter: [...Wickets],
                labelString: "Wickets in the match"
            })
        }

    }

    Total = () => {
        return (
            this.state.currentFilter.reduce((a, b) => a + b, 0)
        )
    }

    GraphData = () => {
        
        const data = {
            labels: [...Labels],
            datasets: [
                {
                    label: this.state.labelString,
                    fill: false,
                    lineTension: 0.01,
                    backgroundColor: 'rgba(0,0,0,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(255,255,255,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(0,0,0,1)',
                    pointHoverBorderColor: 'rgba(255,255,255,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [...this.state.currentFilter]
                }
            ]
        };

        return data
    }

    render() {
    
        return(
            <div className="graph-container">
                <h3 className="graph-heading">Run & Wickets</h3>
                <div className="graph-drop-down-container">
                        <span className="drop-down-span"> Select the Filter </span>
                        <select className="drop-down-select-option" value={this.state.filter} onChange={this.onChangeFilterHandler}>
                        {FilterArray.map((item, index) =>
                            <option key={`${index}-${item}`} value={item}> {item} </option>
                        )}
                        </select>
                </div>
                <div className="graph">
                    <div className="graph-child">
                        <Line data={() => this.GraphData()} />
                    </div>
                </div>
                <div className="total-label">Total {this.state.filter} : {this.Total()}</div>
            </div>
        )
    }
}

export default Graph;