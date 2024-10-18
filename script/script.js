//game control
let game = 0;
//game history
let gameH;
//variable points to keep score in the match
let points = 0;
//points history
let pointsH;
function historyMatches(){
    //function to store the historic results of matches
    let history;
    console.log(points);
    if (points>0) {
        //if the matche ended with more than 0 points then the user have won and gets the historic from the page and set the new value 
        history = Number(document.getElementById('win').innerHTML);
        history++;
        document.getElementById('win').innerHTML = history;
    } else if (points<0) {
        //if the matche ended with less than 0 points then the user have lost and gets the historic from the page and set the new value
        history = Number(document.getElementById('loose').innerHTML);
        history++;
        document.getElementById('loose').innerHTML = history;
    } else {
        //if the matche ended with 0 points then its a tie and gets the historic from the page and set the new value
        history = Number(document.getElementById('tie').innerHTML);
        history++;
        document.getElementById('tie').innerHTML = history;
    }

}
function winLoose(result) {
    //function to keep score
    let idGame = 'game'
    // Get the value from sessionStorage
    points = Number(sessionStorage.getItem('pointsH'));
    idGame = idGame+game;
    if (result === 'win')  {
        //if the user won the game adds 1 point and record as win
        document.getElementById(idGame).innerHTML = 'WIN!';
        points ++;
        console.log(points);
    }
    else if (result === 'loose') {
        //if the user lost the game takes out 1 point and record as loose
        document.getElementById(idGame).innerHTML = 'LOOSE!';
        points --;
        console.log(points);
    } //if its a tie adds no point and record as tie
    else document.getElementById(idGame).innerHTML = 'TIE!';
    // Set a value of points in sessionStorage
    sessionStorage.setItem('pointsH', points);
}
function playGame() {
    // Get the value from sessionStorage
    game = sessionStorage.getItem('gameH');
    // Possible options for the machine to choose
    let gameOption = [ 'rock', 'paper', 'scissor', 'lizard', 'spock']
    // Select the checked radio button with name="choice"
    let selectedOption = document.querySelector('input[name="choice"]:checked');
    
    if (selectedOption) {
        game++; //adds 1 game
        //get a number between 0 and 4
        let randomNumber = Math.floor(Math.random() * 5);
        //display computer choice
        document.getElementById('computer').innerHTML = gameOption[randomNumber];
        //check who wins between the choice, keeps score and return to the user
        if (selectedOption.value === 'rock') {
            if (gameOption[randomNumber] === 'scissor') {
                document.getElementById('result').innerHTML = 'You crushed the computer\'s Scissor. YOU WIN!'; 
                winLoose('win');
            } else if (
                gameOption[randomNumber] === 'lizard') {document.getElementById('result').innerHTML = 'You crushed the computer\'s Lizard. YOU WIN!';
                winLoose('win');
            } else if (gameOption[randomNumber] === 'rock') {
                document.getElementById('result').innerHTML = 'It\'s a tie'; 
                winLoose('tie');
            } else if (gameOption[randomNumber] === 'paper') {
                document.getElementById('result').innerHTML = 'Your Rock was covered by the computer\'s Paper. YOU LOOSE!'; 
                winLoose('loose');
            } else {
                document.getElementById('result').innerHTML = 'Your Rock was vaporized by the computer\'s Spock. YOU LOOSE!'; 
                winLoose('loose');
            }
        } else if (selectedOption.value === 'paper') {
            if (gameOption[randomNumber] === 'rock') {
                document.getElementById('result').innerHTML = 'You covered the computer\'s Rock. YOU WIN!';
                winLoose('win');
            } else if (gameOption[randomNumber] === 'spock') {
                document.getElementById('result').innerHTML = 'You disproved the computer\'s Spock. YOU WIN!'; 
                winLoose('win');
            } else if (gameOption[randomNumber] === 'paper') {
                document.getElementById('result').innerHTML = 'It\'s a tie'; 
                winLoose('tie');
            } else if (gameOption[randomNumber] === 'scissor') {
                document.getElementById('result').innerHTML = 'Your Paper was cutted by the computer\'s Scissor. YOU LOOSE!'; 
                winLoose('loose');
            } else {document.getElementById('result').innerHTML = 'Your Paper was ate by the computer\'s Lizard. YOU LOOSE!'; 
                winLoose('loose');
            }
        } else if (selectedOption.value === 'scissor') {
            if (gameOption[randomNumber] === 'paper') {
                document.getElementById('result').innerHTML = 'You cutted the computer\'s Paper. YOU WIN!'; 
                winLoose('win');
            } else if (gameOption[randomNumber] === 'Lizard') {
                document.getElementById('result').innerHTML = 'You decapitated the computer\'s Lizard. YOU WIN!'; 
                winLoose('win');
            } else if (gameOption[randomNumber] === 'scissor') {document.getElementById('result').innerHTML = 'It\'s a tie'; 
                winLoose('tie');
            } else if (gameOption[randomNumber] === 'rock') {
                document.getElementById('result').innerHTML = 'Your Scissor was crushed by the computer\'s Rock. YOU LOOSE!'; 
                winLoose('loose');
            } else {
                document.getElementById('result').innerHTML = 'Your Scissor was smashed by the computer\'s Spock. YOU LOOSE!'; 
                winLoose('loose');
            }
        } else if (selectedOption.value === 'lizard') {
            if (gameOption[randomNumber] === 'paper') {
                document.getElementById('result').innerHTML = 'You ate the computer\'s Paper. YOU WIN!'; 
                winLoose('win');
            }
            else if (gameOption[randomNumber] === 'spock') {
                document.getElementById('result').innerHTML = 'You poised the computer\'s Spock. YOU WIN!'; 
                winLoose('win');
            } else if (gameOption[randomNumber] === 'lizard') {
                document.getElementById('result').innerHTML = 'It\'s a tie'; 
                winLoose('tie');
            } else if (gameOption[randomNumber] === 'rock') {
                document.getElementById('result').innerHTML = 'Your Lizard was crushed by the computer\'s Rock. YOU LOOSE!'; 
                winLoose('loose');
            } else {
                document.getElementById('result').innerHTML = 'Your Lizard was decapitated by the computer\'s Scissor. YOU LOOSE!'; 
                winLoose('loose');
            }
        } else {
            if (gameOption[randomNumber] === 'rock') {
                document.getElementById('result').innerHTML = 'You vaporized the computer\'s Rock. YOU WIN!'; 
                winLoose('win');
            } else if (gameOption[randomNumber] === 'scissor') {
                document.getElementById('result').innerHTML = 'You smashed the computer\'s Scissor. YOU WIN!'; 
                winLoose('win');
            } else if (gameOption[randomNumber] === 'spock') {
                document.getElementById('result').innerHTML = 'It\'s a tie'; 
                winLoose('tie');
            } else if (gameOption[randomNumber] === 'paper') {
                document.getElementById('result').innerHTML = 'Your Spock was disproved by the computer\'s Paper. YOU LOOSE!'; 
                winLoose('loose');
            } else {
                document.getElementById('result').innerHTML = 'Your Spock was poised by the computer\'s Lizard. YOU LOOSE!'; 
                winLoose('loose');
            }
        }
        //if game 3 ends match
        if(game>=3) {
            historyMatches();
            game = 0;
            points = 0;
            //Reset value of points in sessionStorage
            sessionStorage.setItem('pointsH', points);
            console.log(sessionStorage.getItem('pointsH') + ' fim dos 3 jogos')
        }
        // Set a value of game in sessionStorage
        sessionStorage.setItem('gameH', game);
    } else {
      alert("No option selected");
    }
  }

  // Add click functionality using JavaScript
  document.getElementById("rock-button").addEventListener("click", function() {
    playGame();
  });