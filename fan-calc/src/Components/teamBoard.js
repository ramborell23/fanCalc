
import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";


const TeamBoard = ({ teamsArr, value , handleChange,teamState }) => {
    return (
        <div className='main_container'><br />
            <label>
                <select 
                    
                    // value={value}
                    name='teamArraySelect'
                    onChange={handleChange}>
                    {teamsArr.map(option => (
                        <option value={option}>{option}</option>
                    ))}
                </select>
                <br/>
                Players<br />
                {/* <ul> */}
                    {teamState.map(item => (
                        // <li>
                            <button>
                                {item[0]}<br />
                                {item[1]}<br />
                                {item[2]}<br />
                                {item[3]}<br />
                                {item[4]}<br />
                            </button>
                        // </li>
                    ))}
                {/* </ul> */}
            </label>
            <br />
            <br />
        </div>
    )
}

export default TeamBoard