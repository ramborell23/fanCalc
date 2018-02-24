
import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import FanDuel from './FanDuel'
import DraftKings from './DraftKings'
import TeamBoard from './teamBoard'
import TeamBoard2 from './teamBoard2'
import TradeList from './tradeList'
import NBA from './NBA'
import './calc.css';

const axios = require("axios");

const nameJoinForFetch = teamStateName => {
    const newName = teamStateName.split(' ').join('')
    return newName
};

const teams = {
    AtlantaHawks: 1610612737,
    BostonCeltics: 1610612738,
    BrooklynNets: 1610612751,
    CharlotteHornets: 1610612766,
    ChicagoBulls: 1610612741,
    ClevelandCavelers: 1610612739,
    DallasMavericks: 1610612742,
    DenverNuggets: 1610612743,
    DetroitPistons: 1610612765,
    GoldenStateWarriors: 1610612744,
    HoustonRockets: 1610612745,
    IndianaPacers: 1610612754,
    LosAngelesClippers: 1610612746,
    LosAngelesLakers: 1610612746,
    MemphisGrizzles: 1610612763,
    MiamiHeat: 1610612748,
    MilwaukeeBucks: 1610612749,
    MinniesotaTimberwolves: 1610612750,
    NewOrleansPelicans: 1610612740,
    NewYorkKnicks: 1610612752,
    OklahomaCityThunder: 1610612760,
    OrlandoMagic: 1610612753,
    Philedelphia76ers: 1610612755,
    PhoenixSuns: 1610612756,
    PortlandTrailBlazers: 1610612757,
    SacrementoKings: 1610612756,
    SanAntonioSpurs: 1610612759,
    TorontoRaptors: 1610612761,
    UtahJazz: 1610612762,
    WashingtonWizards: 1610612764,
};

class Calc extends React.Component {
    constructor() {
        super()
        this.teamsArray = ['',
            'Atlanta Hawks',
            'Boston Celtics',
            'Brooklyn Nets',
            'Charlotte Hornets',
            'Chicago Bulls',
            'Cleveland Cavelers',
            'Dallas Mavericks',
            'Denver Nuggets',
            'Detroit Pistons',
            'Golden State Warriors',
            'Houston Rockets',
            'Indiana Pacers',
            'Los Angeles Clippers',
            'Los Angeles Lakers',
            'Memphis Grizzles',
            'Miami Heat',
            'Milwaukee Bucks',
            'Minniesota Timberwolves',
            'New Orleans Pelicans	',
            'New York Knicks',
            'Oklahoma City Thunder',
            'Orlando Magic',
            'Philadelphia 76ers',
            'Phoenix Suns',
            'Portland Trail Blazers',
            'Sacramento Kings',
            'San Antonio Spurs',
            'Toronto Raptors',
            'Utah Jazz',
            'Washington Wizards',
        ]

        this.names = ["FanDuel", "DraftKings", "NBA"]
        this.state = {
            modeState: '',
            // teamState: '',
            // teamState2: '',
            teamArraySelect: '',
            teamArraySelect2: '',
            teamState: [],
            teamState2: [],
            playerSelect: '',
            teamTradeArr: [],
            teamTradeArr2: [],
        }
        this.teamsArray2 = this.teamsArray
    }

    componentDidMount() {
        // this.getTeamRoster()
    }
    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleBrandSelection = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleRemoveFromList = e => {
        
    }
    handleAddToTrade = e => {
        const {teamState2, teamTradeArr2}= this.state   
        console.log('Team Trade 2',teamState2)
        let player = teamState2[e.target.value]
        // teamTradeArr2.push(player)
        console.log('Team Trade 34342',teamState2)
        console.log('Check this out ',typeof player)
        console.log('Check this out 2 ', player)
        console.log('pop:    ',teamState2[player])
        // console.log(teamTradeArr2)
        console.log('Being Traded:', typeof teamTradeArr2)
        this.setState({
            teamTradeArr2:[...teamTradeArr2,player]
        })
 
    }

    getTeamRoster = () => {
        const { teamArraySelect } = this.state
        console.log(teams[nameJoinForFetch(teamArraySelect)])
        console.log("TEAM ARR SELECT ", (teamArraySelect))
        axios
            .get(`https://stats.nba.com/stats/commonteamroster/?Season=2017-18&TeamID=${teams[nameJoinForFetch(teamArraySelect)]}`)
            .then(response => {
                this.setState({
                    teamState: response.data.resultSets[0].rowSet
                });
                console.log(this.teamState)
            })
            .catch(err => {
                console.log("error fetching image");
                console.log(err);
            });
    };
    getTeamRoster2 = () => {
        const { teamArraySelect2 } = this.state
        console.log(teams[nameJoinForFetch(teamArraySelect2)])
        console.log("TEAM ARR SELECT ", (teamArraySelect2))
        axios
            .get(`https://stats.nba.com/stats/commonteamroster/?Season=2017-18&TeamID=${teams[nameJoinForFetch(teamArraySelect2)]}`)
            .then(response => {
                this.setState({
                    teamState2: response.data.resultSets[0].rowSet
                });
                console.log(this.teamState)
            })
            .catch(err => {
                console.log("error fetching image");
                console.log(err);
            });
    };

    render() {
        const { modeState, teamState, teamArraySelect, teamArraySelect2, playerSelect, teamState2, teamTradeArr2 } = this.state
        console.log(modeState)
        console.log('Trade Bait     ',teamTradeArr2)
        console.log("Team  ARR ", teamState)
        // console.log("PLAY====>ERS ARR ", teams[nameJoinForFetch(teamArraySelect)])
        console.log("PLAYRS ARR ", (playerSelect))
        console.log("PLAYRS 2 ", (teamArraySelect))
        console.log("PLAYRS  ", (teamArraySelect2))

        return (
            <div className='page'>
                <div className='main_container'><br />
                    <label>
                        <button
                            value='NBA'
                            onClick={this.getTeamRoster}
                        >NBA
                                </button>
                        Team 1<br />
                        <select value={teamArraySelect}
                            name='teamArraySelect'
                            onChange={this.handleBrandSelection}>
                            {this.teamsArray.map(option => (
                                <option value={option}>{option}</option>
                            ))}
                        </select>
                        <br />
                        Player<br />
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
                <div className='main_container'><br />
                    <label>
                        <button
                            value='NBA'
                            onClick={this.getTeamRoster2}
                        >
                            NBA
                        </button>
                        Team 2<br />
                    </label>
                    <TeamBoard2
                        teamsArr={this.teamsArray}
                        teamState={teamState2}
                        // name='teamArraySelect2'
                        value={teamArraySelect2}
                        handleChange={this.handleBrandSelection}
                        handleChange2={this.handleAddToTrade}
                        />
                    <br />
                    <TradeList
                        teamTradeArr={teamTradeArr2}
                    />
                    <br />
                    <br />
                    <br />
                </div>
            </div>

        )
    }
}

export default Calc

