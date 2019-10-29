import React from 'react'
import rawData from  '../../../assets/sachin.json';


const TotalCatches = () => {

    const CalculateTotalCatches = () => {

        const Catches = rawData.map((item) => {
            let catches;
            if(typeof(item.catches) === 'string'){
                catches = null;
            }else{
                catches = item.catches
            }
            return (catches)
        })

        console.log(Catches)

        let sum = Catches.reduce((a, b) => a + b, 0)
        return sum
    }

    return(
        <div className="fact-container-1">
            <h3 className="fact-heading">Total Catches taken by Sachin</h3>
            <div className="wrapper">
                <div className="right"></div>
                <div className="left"></div>
                    <div className="middle">
                        <p>{CalculateTotalCatches()}</p>
                    </div>
            </div>
        </div>
    )
}

export default TotalCatches;