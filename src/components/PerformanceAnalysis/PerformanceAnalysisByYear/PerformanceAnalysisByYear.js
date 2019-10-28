import React from 'react'
import rawData from  '../../../assets/sachin.json';
import { Bar } from 'react-chartjs-2';
import './PerformanceAnalysisByYear.css'

const PerformanceAnalysisByYear = () => {

    let TotalRuns = [];
    let TotalWickets = [];
    let Labels = [];

    /* CALCULATE AVERAGE RUNS FUNCTION */

    const calculateTotalSum = (Data, RunsOrWickets) => {

        if(RunsOrWickets === 'Runs'){

            let notOut = 0;
            let Runs = Data.map((item) => {
                let run;
                if(typeof(item.batting_score) === 'string'){
                    if(item.batting_score.charAt(item.batting_score.length - 1) === "*"){
                        run = parseInt(item.batting_score.slice(0, -1), 10)
                        notOut++;
                    }else{
                        run = null;
                    }
                }else{
                    run = item.batting_score 
                }
                return (run)
            })
            
            let totalRuns = Runs.reduce((a, b) => a + b, 0)

            return ([totalRuns, notOut]);

        }else{
            
            let Wickets = Data.map((item) => {
                let wickets;
                if(typeof(item.wickets) === 'string'){
                    wickets = null;
                }else{
                    wickets = item.wickets
                }
                return (wickets)
            })
            
            let totalWickets = Wickets.reduce((a, b) => a + b, 0)
            
            return (totalWickets);
        }
    }

    
    /* FILTER DATA ACCORGIND TO YEAR */

    const EveryYear = (array, year) => {
        return(array.filter((item) => {
            return (item.date.split(" ")[2] === String(year))
        }))
    }

    const splitArray = (array) => {
        
        let results = [];
        let year = 1989

        while(array.length) {
            results.push(array.splice(0, EveryYear(array, year).length));
            Labels.push(year);
            year++;
        }

        return results;
    }

    const calculateTotal = () => {
    
        const array = [...rawData];
        const decadesDataArray = splitArray(array)
        let runsDataArray = [];
        let WicketsDataArray = []
        
        runsDataArray = decadesDataArray.map((item) => {
            return (calculateTotalSum(item, 'Runs')[0])
        })

        WicketsDataArray = decadesDataArray.map((item) => {
            return (calculateTotalSum(item, 'Wickets'))
        })

        TotalRuns = [...runsDataArray]
        TotalWickets = [...WicketsDataArray]

    }

    calculateTotal()

    const Runs = {
        labels: [...Labels],
        datasets: [
          {
            label: 'Total runs scored that year',
            backgroundColor: 'rgba(0,0,0,0.2)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(0,0,0,0.4)',
            hoverBorderColor: 'rgba(0,0,0,1)',
            data: [...TotalRuns]
          }
        ]
    };

    const Wickets = {
        labels: [...Labels],
        datasets: [
          {
            label: 'Total runs scored that year',
            backgroundColor: 'rgba(0,0,0,0.2)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(0,0,0,0.4)',
            hoverBorderColor: 'rgba(0,0,0,1)',
            data: [...TotalWickets]
          }
        ]
    };

    return (
        <div className="run-scored-container">
            <h3 className="run-scored-heading">Runs Analysis by Year</h3>
            <div className="bar-container">
                <Bar 
                    data={Runs}
                    options = {{
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }}
                />
            </div>
            <h3 className="run-scored-heading">Wickets Analysis by Year</h3>
            <div className="bar-container">
                <Bar 
                    data={Wickets}
                    options = {{
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default PerformanceAnalysisByYear;

