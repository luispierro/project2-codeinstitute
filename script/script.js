//game control
let game = 0;
//game history
let gameH;
//variable points to keep score in the match
let points = 0;
//points history
let pointsH;
function hideMessage() {
    // Hide the message and overlay
    document.getElementById('overlay-message').style.display = 'none';
    document.getElementById('page-overlay').style.display = 'none';
  }
function historyMatches(){
    //function to store the historic results of matches
    let history;
    console.log(points);
    if (points>0) {
        //if the matche ended with more than 0 points then the user have won and gets the historic from the page and set the new value 
        history = Number(document.getElementById('win').innerHTML);
        history++;
        document.getElementById('win').innerHTML = history;
        document.getElementById('overlay-message').style.display = 'block';
        document.getElementById('page-overlay').style.display = 'block';
        document.getElementById('overlay-message').innerHTML = "Congratulations! You won the match!<br><br><button onclick=\"hideMessage()\">Reset Game</button>";
    } else if (points<0) {
        //if the matche ended with less than 0 points then the user have lost and gets the historic from the page and set the new value
        history = Number(document.getElementById('loose').innerHTML);
        history++;
        document.getElementById('loose').innerHTML = history;
        document.getElementById('overlay-message').style.display = 'block';
        document.getElementById('page-overlay').style.display = 'block';
        document.getElementById('overlay-message').innerHTML = "Better luck next Time! You lost the match!<br><br><button onclick=\"hideMessage()\">Reset Game</button>";
    } else {
        //if the matche ended with 0 points then its a tie and gets the historic from the page and set the new value
        history = Number(document.getElementById('tie').innerHTML);
        history++;
        document.getElementById('tie').innerHTML = history;
        document.getElementById('overlay-message').style.display = 'block';
        document.getElementById('page-overlay').style.display = 'block';
        document.getElementById('overlay-message').innerHTML = "Try again! The match result was a Tie!<br><br><button onclick=\"hideMessage()\">Reset Game</button>";
    }
}
function winLoose(result) {
    //function to keep score
    let idGame = 'game'
    // Get the value from sessionStorage to know wich game it is
    points = Number(sessionStorage.getItem('pointsH'));
    idGame = idGame+game;
    if (result === 'win')  {
        //if the user won the game adds 1 point and record as win
        document.getElementById(idGame).innerHTML = '<img src=\"assets/win/favicon-32x32.png\" alt=\"small green check mark to represent win\">';
        points ++;
        console.log(points);
    }
    else if (result === 'loose') {
        //if the user lost the game takes out 1 point and record as loose
        document.getElementById(idGame).innerHTML = '<img src=\"assets/loss/favicon-32x32.png\" alt=\"small red cross to represent loss\">';
        points --;
        console.log(points);
    } //if its a tie adds no point and record as tie
    else document.getElementById(idGame).innerHTML = '<img src=\"assets/tie/favicon-32x32.png\" alt=\"small blue circle to represent a tie game\">';
    // Set a value of points in sessionStorage
    sessionStorage.setItem('pointsH', points);
    // resets game results when it's first game
    if (idGame==='game1') {
        document.getElementById('game2').innerHTML = ' ';
        document.getElementById('game3').innerHTML = ' ';
    }
}
function computerChoice(choice){
    if (choice==='rock') document.getElementById('computer').innerHTML = '<img src=\"assets/rock/favicon.ico\" alt=\"icon of a rock\">';
    else if (choice==='paper') document.getElementById('computer').innerHTML = '<img src=\"assets/paper/favicon.ico\" alt=\"icon of a paper\">';
    else if (choice==='scissor') document.getElementById('computer').innerHTML = '<img src=\"assets/scissor/favicon.ico\" alt=\"icon of a scissor\">';
    else if (choice==='lizard') document.getElementById('computer').innerHTML = '<img src=\"assets/lizard/favicon.ico\" alt=\"icon of a lizard\">';
    else document.getElementById('computer').innerHTML = '<img src=\"assets/spock/favicon.ico\" alt=\"icon of the spock hand sign\">';
}
function playGame(option) {
    // Get the value from sessionStorage
    game = sessionStorage.getItem('gameH');
    // Possible options for the machine to choose
    let gameOption = [ 'rock', 'paper', 'scissor', 'lizard', 'spock']
    // Select the checked radio button with name="choice"
    let selectedOption = document.querySelector('input[name="choice"]:checked');
    
    if (option) {
        game++; //adds 1 game
        //get a number between 0 and 4
        let randomNumber = Math.floor(Math.random() * 5);
        //display computer choice
        computerChoice(gameOption[randomNumber]);
        //check who wins between the choice, keeps score and return to the user
        if (option === 'rock') {
            if (gameOption[randomNumber] === 'scissor') {
                document.getElementById('result').innerHTML = '<h5>You crushed the computer\'s Scissor.<br>YOU WIN!</h5>'; 
                winLoose('win');
            } else if (
                gameOption[randomNumber] === 'lizard') {document.getElementById('result').innerHTML = '<h5>You crushed the computer\'s Lizard.<br>YOU WIN!</h5>';
                winLoose('win');
            } else if (gameOption[randomNumber] === 'rock') {
                document.getElementById('result').innerHTML = '<h5>It\'s a Tie</h5>'; 
                winLoose('tie');
            } else if (gameOption[randomNumber] === 'paper') {
                document.getElementById('result').innerHTML = '<h5>Your Rock was covered by the computer\'s Paper.<br>YOU LOOSE!</h5>'; 
                winLoose('loose');
            } else {
                document.getElementById('result').innerHTML = '<h5>Your Rock was vaporized by the computer\'s Spock.<br>YOU LOOSE!</h5>'; 
                winLoose('loose');
            }
        } else if (option === 'paper') {
            if (gameOption[randomNumber] === 'rock') {
                document.getElementById('result').innerHTML = '<h5>You covered the computer\'s Rock.<br>YOU WIN!</h5>';
                winLoose('win');
            } else if (gameOption[randomNumber] === 'spock') {
                document.getElementById('result').innerHTML = '<h5>You disproved the computer\'s Spock.<br>YOU WIN!</h5>'; 
                winLoose('win');
            } else if (gameOption[randomNumber] === 'paper') {
                document.getElementById('result').innerHTML = '<h5>It\'s a Tie</h5>'; 
                winLoose('tie');
            } else if (gameOption[randomNumber] === 'scissor') {
                document.getElementById('result').innerHTML = '<h5>Your Paper was cutted by the computer\'s Scissor.<br>YOU LOOSE!</h5>'; 
                winLoose('loose');
            } else {document.getElementById('result').innerHTML = '<h5>Your Paper was ate by the computer\'s Lizard.<br>YOU LOOSE!</h5>'; 
                winLoose('loose');
            }
        } else if (option === 'scissor') {
            if (gameOption[randomNumber] === 'paper') {
                document.getElementById('result').innerHTML = '<h5>You cutted the computer\'s Paper.<br>YOU WIN!</h5>'; 
                winLoose('win');
            } else if (gameOption[randomNumber] === 'Lizard') {
                document.getElementById('result').innerHTML = '<h5>You decapitated the computer\'s Lizard.<br>YOU WIN!</h5>'; 
                winLoose('win');
            } else if (gameOption[randomNumber] === 'scissor') {
                document.getElementById('result').innerHTML = '<h5>It\'s a Tie</h5>'; 
                winLoose('tie');
            } else if (gameOption[randomNumber] === 'rock') {
                document.getElementById('result').innerHTML = '<h5>Your Scissor was crushed by the computer\'s Rock.<br>YOU LOOSE!</h5>'; 
                winLoose('loose');
            } else {
                document.getElementById('result').innerHTML = '<h5>Your Scissor was smashed by the computer\'s Spock.<br>YOU LOOSE!</h5>'; 
                winLoose('loose');
            }
        } else if (option === 'lizard') {
            if (gameOption[randomNumber] === 'paper') {
                document.getElementById('result').innerHTML = '<h5>You ate the computer\'s Paper.<br>YOU WIN!</h5>'; 
                winLoose('win');
            }
            else if (gameOption[randomNumber] === 'spock') {
                document.getElementById('result').innerHTML = '<h5>You poised the computer\'s Spock.<br>YOU WIN!</h5>'; 
                winLoose('win');
            } else if (gameOption[randomNumber] === 'lizard') {
                document.getElementById('result').innerHTML = '<h5>It\'s a Tie</h5>'; 
                winLoose('tie');
            } else if (gameOption[randomNumber] === 'rock') {
                document.getElementById('result').innerHTML = '<h5>Your Lizard was crushed by the computer\'s Rock.<br>YOU LOOSE!</h5>'; 
                winLoose('loose');
            } else {
                document.getElementById('result').innerHTML = '<h5>Your Lizard was decapitated by the computer\'s Scissor.<br>YOU LOOSE!</h5>'; 
                winLoose('loose');
            }
        } else {
            if (gameOption[randomNumber] === 'rock') {
                document.getElementById('result').innerHTML = '<h5>You vaporized the computer\'s Rock.<br>YOU WIN!</h5>'; 
                winLoose('win');
            } else if (gameOption[randomNumber] === 'scissor') {
                document.getElementById('result').innerHTML = '<h5>You smashed the computer\'s Scissor.<br>YOU WIN!</h5>'; 
                winLoose('win');
            } else if (gameOption[randomNumber] === 'spock') {
                document.getElementById('result').innerHTML = '<h5>It\'s a Tie</h5>'; 
                winLoose('tie');
            } else if (gameOption[randomNumber] === 'paper') {
                document.getElementById('result').innerHTML = '<h5>Your Spock was disproved by the computer\'s Paper.<br>YOU LOOSE!</h5>'; 
                winLoose('loose');
            } else {
                document.getElementById('result').innerHTML = '<h5>Your Spock was poised by the computer\'s Lizard.<br>YOU LOOSE!</h5>'; 
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
        }
        // Set a value of game in sessionStorage
        sessionStorage.setItem('gameH', game);
    } else {
      alert("No option selected");
    }
}

//Click listener for option rock
document.getElementById("rock-button").addEventListener("click", function() {playGame('rock');});
//Click listener for option paper
document.getElementById("paper-button").addEventListener("click", function() {playGame('paper');});
//Click listener for option scissor
document.getElementById("scissor-button").addEventListener("click", function() {playGame('scissor');});
//Click listener for option lizard
document.getElementById("lizard-button").addEventListener("click", function() {playGame('lizard');});
//Click listener for option spock
document.getElementById("spock-button").addEventListener("click", function() {playGame('spock');});