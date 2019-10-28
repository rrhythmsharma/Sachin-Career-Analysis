import React from 'react';

const TableRow = (props) => {

    return (
        <tr className="table-row">
            <td>{props.sachinData}</td>
            <td className="table-middle-row">
                <div className="wrapper-container">
                    <div className={(props.lastLine) ? "middle-line last-line" : "middle-line"}></div>
                    <div className="wordwrapper">
                        <div className="word">{props.Label}</div>                                        
                    </div>
                </div>
            </td>
                <td>{props.competitorData}</td>
        </tr>
    )
}

export default TableRow;