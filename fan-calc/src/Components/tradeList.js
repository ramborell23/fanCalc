
import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";


const TradeList = ({ teamTradeArr, handleCloseButton }) => {
    let copy = teamTradeArr
    let nums = [1, 2, 3, 4, 5, 6, 7]
    return (
        <div>
            {''} Trading {''}
            {console.log('the right team==>', teamTradeArr)}
            <ul>
                {/* { teamTradeArr} */}
                {nums}
                {teamTradeArr.map((number) =>
                    <li>{number[3]} <button onclick={handleCloseButton} class="close">x</button onclick={handleClodeButton}></li>
                )}
            </ul>
            <br />
            <div>
                mlmlm
            </div>
        </div>
    )
}
export default TradeList