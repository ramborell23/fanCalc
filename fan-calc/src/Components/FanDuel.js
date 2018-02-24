
import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import functions from "./functions";

 

class FanDuel extends React.Component{
    constructor(){
        super()
        this.state={
            points:'',
            assists:'',
            rebounds:'',
            steals:'',
            blocks:'',
            turnovers:'',
            total:0,
        }
    }
    handleInput = e => {
        this.setState ({
            [e.target.name] : e.target.value
        })
    }
    
    handleSubmit = e => {
        const {points, assists, rebounds, steals,blocks,turnovers} = this.state

       let pt = Number(points)
       let as  = functions.assists(assists)
       let reb = functions.fanduelRebounds(rebounds)
       let stl = functions.fanduelSteals(steals)
       let blk = functions.fanduelBlocks(blocks)
       let to = functions.fanduelTurnover(turnovers)
       
       let final = (pt + as +reb + stl + blk + to)
       console.log ("pt  =====>",pt)
       console.log ("as  =====>",as)
       console.log ("reb  =====>",reb)
       console.log ("stl  =====>",stl)
       console.log ("blk  =====>",blk)
       console.log ("FINAL  =====>",final)
       this.setState({
        total:final,
        points:'',
        assists:'',
        rebounds:'',
        steals:'',
        blocks:'',
        turnovers:'',

       })
    }
    handleClear = e =>{
        this.setState({
            total:'',
            points:'',
            assists:'',
            rebounds:'',
            steals:'',
            blocks:'',
            turnovers:'',
           })
    }

    render(){
        const {points, assists, rebounds, steals,blocks,turnovers, total} = this.state
        console.log("POINTS  :",points)
        console.log("Turnovers  :",turnovers)
        return(
            <div className="mode_div">
                FanDuel
                <br/>
                <br/>

                <div className='fanduel_container'>
                <div>
                    {total === 0 ? "zip" :  total}
                </div>
                <br/>
                Points
                <input
                    type="text" 
                    name  ='points'
                    value ={points}
                    onInput={this.handleInput}
                    />{''}
                    <br/>
                Assists
                <input
                    type="text" 
                    name  ='assists'
                    value ={assists}
                    onInput={this.handleInput}
                    />{''}
                    <br/>
                Rebounds
                <input
                    type="text" 
                    name  ='rebounds'
                    value ={rebounds}
                    onInput={this.handleInput}
                    />{''}
                    <br/>
                Steals
                <input
                    type="text" 
                    name  ='steals'
                    value ={steals}
                    onInput={this.handleInput}
                    />{''}
                    <br/>
                Blocks
                <input
                    type="text" 
                    name  ='blocks'
                    value ={blocks}
                    onInput={this.handleInput}
                    />{''}
                    <br/>
                    Turnovers
                <input
                    type="text" 
                    name  ='turnovers'
                    value ={turnovers}
                    onInput={this.handleInput}
                    />{''}
                    <br/>
                    <br/>

                <button
                onClick={this.handleSubmit}
                name='Submit'>
                    Submit
                </button>
                <button
                onClick={this.handleClear}
                name='Clear'>
                    Clear
                </button>
                </div>


                <br/>
                <br/>

            </div>
        )
    }
}

export default FanDuel

