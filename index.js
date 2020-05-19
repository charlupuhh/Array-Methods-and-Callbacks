import { fifaData } from './fifa.js';
console.log(fifaData);


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

// let game2014 = fifaData.filter(game => (game['Year'] == 2014) && game['Stage'] == 'Final')[0];
// console.log(game2014['Home Team Name']);
// console.log(game2014['Away Team Name']);
// console.log(game2014['Home Team Goals']);
// console.log(game2014['Away Team Goals']);
// if (game2014['Home Team Goals'] > game2014['Away Team Goals']){
//     console.log(game2014['Home Team Name']);
// } else {
//     console.log(game2014['Away Team Name']);
// }



/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    return data.filter(game => game['Stage'] == 'Final');
};
console.log('getFinals');
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(finalsFunc) {
    const years = finalsFunc.map(games => games['Year']);
    return years;
};
console.log('getYears');
console.log(getYears(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 
//Helper function to calculate the winner
function winner(game){
    if ((game['Home Team Goals'] == game['Away Team Goals'])){
        return game['Win conditions'].split(" win")[0];
    } else if (game['Home Team Goals'] > game['Away Team Goals']){
        return game['Home Team Name'];
    } else {
        return game['Away Team Name'];
    }
}

function getWinners(finalsFunc) {
    let winners = finalsFunc.map(games => winner(games));
    return winners;
}
console.log('getWinners');
console.log(getWinners(getFinals(fifaData)));
/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(winnersFunc, yearsFunc) {
    return winnersFunc.map((winner, year) => `In ${yearsFunc[year]}, ${winner} won the world cup`);
}
console.log("getWinnersByYear");
console.log(getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData))));



/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

//Initial list
function initials(data){
    return [].concat.apply([],data.map(games => [games['Home Team Initials'] , games['Away Team Initials']]));
}
//console.log(initials(fifaData));

// function getCountryWins(data, initials) {
//     let ourGames = data.filter(data['Home Team Initials'] == initials && )
//     return data.map
// };
//Winner Initials
function winnerInitials(game){
    if (game['Home Team Goals'] > game['Away Team Goals']){
        return game['Home Team Initials'];
    } else {
        return game['Away Team Initials'];
    }
}
function getCountryWins(data, initials){
    
}

/* Task 8: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let home = data.reduce((total, game) => {
        return total += game['Home Team Goals'];
    }, 0);
    let away = data.reduce((total, game) => {
        return total += game['Away Team Goals'];
    }, 0);
    return{"Average Home Team Goals": home / data.length, "Average Away Team Goals": away / data.length};
}

console.log('getAverageGoals');
console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* STRETCH 1: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}



/* STRETCH 2: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
//- [ ] Create a function that takes country initials as a parameter and returns their total number of World Cup appearances.
//- [ ] Account for ties in your 'finals' data set
//- [ ] Create a function that takes country initials as a parameter and determines how many goals that country has scored in World Cup games since 1930.
function initial30s(data, initials){
    let dataset = data.filter(game => game['Year'] >= 1930);
    console.log(dataset);
    let home = dataset.map(function(games){
        if (games['Home Team Initials'] == initials){
            return games['Home Team Goals']
        }
    }).reduce((total, game) => {
        return total += game['Home Team Goals'];
    }, 0);
    console.log(home);
    let away = dataset.map(games => games['Away Team Initials'] == initials).reduce((total, game) => {
        return total += game['Away Team Goals'];
    }, 0);
    return home + away;
}
console.log('initial30s');
console.log(initial30s(fifaData, 'GER'));
//- [ ] Use `.map` to format country names into `<h1>` HTML headers.

// function html(data){
//     data.map(games => `<h1>${games[]}</h1>`)
// }