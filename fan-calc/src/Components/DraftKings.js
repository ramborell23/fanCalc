
import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import functions from "./functions";

 

class DraftKings extends React.Component{
    constructor(){
        super()
        this.state={
            points:'',
            assists:'',
            threepm:'',
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
        const {points, assists, rebounds, steals,blocks,turnovers, threepm} = this.state

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
        const {points, assists, rebounds, steals,blocks,turnovers, threepm} = this.state
        console.log("POINTS  :",points)
        console.log("Turnovers  :",turnovers)
        console.log("Threes  :",threepm)
        return(
            <div className="mode_div">
                DraftKings
                <br/>
                <br/>
                <div className='draftkings_container'>
                <br/>
                Points
            
                <input
                    type="text" 
                    name  ='points'
                    value ={points}
                    onInput={this.handleInput}
                    />{''}
                    <br/>
                    3PM
                <input
                    type="text" 
                    name  ='threepm'
                    value ={threepm}
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
                <br/>
                <br/>
                <br/>
                <button
                onClick={this.handleClear}
                name='GetInfo'>
                    Get Info
                </button>
                <br/>
                <br/>
                <br/>
                
                </div>
            </div>
        )
    }
}

export default DraftKings

