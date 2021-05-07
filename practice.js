

var gameChoices ;
var wins;
var losses;
var ties;
var turns;
function initialization()
{
// * Create an array of the three game choices: Rock, Paper, or Scissors.

var gamechoices = ["rock", "paper", "scissors"];

//   * Create variables to hold the number of wins, losses, and ties. They start at 0.

var wins = 0;
var losses = 0;
var draws = 0;
var turns =3;
}
//   * Using `Math.floor()` and `Math.random()`, randomly choose one of the three game choices as the computer's turn.

for (var i =0; i<3; i++) {

    var computerturn = gamechoices[Math.floor(Math.random() * gamechoices.length)];
}

//   * Using `prompt()`, collect the user's response and convert it to lower case as the user's turn.

var userturn ("Enter rock, paper, or scissors to play");
userturn = userturn.toLowercase ();


//   * Using `if/else` statements, create the game logic to run if the user chooses a valid game option. 

if (
    (userturn === "rock" && computerturn === "scissors") ||
    (userturn === "scissors" && computerturn === "paper") ||
    (userturn === "paper" && computerturn === "rock")
    ) {
        {

            wins++;
            alert("youvre won" + wins+ 'time(s)');
        }

        else if (userturn === computerturn) {

            draws ++
            alert ("its a draw" +draws+ 'time(s)');
        }

        else {

            losses++
            alert ("you lost" +losses + 'time(s)');
        }}

    else {

        alert('please choose rock paper scissors to contine');
    }

//   * Using `alert()`, let the user know the result of each round as well as the final total.

    alert(
        'Total wins: ' +
          wins +
          '\nTotal ties: ' +
          ties +
          '\nTotal losses: ' +
          losses
      );