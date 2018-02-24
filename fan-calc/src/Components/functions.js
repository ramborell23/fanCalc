
// Universal Asists
const assists = num => num * 1.5

// Rebounds
const fanduelRebounds = num => num * 1.2
const nbaRebounds = num => num * 1.2
const draftkingsRebounds = num => num * 1.25

//Blocks
const fanduelBlocks = num => num * 3
const nbaBlocks = num => num * 3
const draftkingsBlocks = num => num * 2

//Steals
const fanduelSteals = num => num * 3
const nbaSteals = num => num * 3
const draftkingsSteals = num => num * 2

// Turnovers
const fanduelTurnover = num => -num
const nbaTurnover = num => -num
const draftkingsTurnover = num => -( num / 2 )

export default {
     assists ,
    // Rebounds
    fanduelRebounds,
    nbaRebounds ,    
    draftkingsRebounds ,
   fanduelBlocks,
     nbaBlocks,
     draftkingsBlocks ,
    
    //Steals
     fanduelSteals ,
     nbaSteals ,
     draftkingsSteals,
    
    // Turnovers
     fanduelTurnover ,
     nbaTurnover ,
     draftkingsTurnover ,
};
