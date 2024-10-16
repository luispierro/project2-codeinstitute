function playGame() {
    // Possible options for the machine to choose
    let gameOption = [ 'rock', 'paper', 'scissor', 'lizard', 'spock']
    // Select the checked radio button with name="choice"
    let selectedOption = document.querySelector('input[name="choice"]:checked');
    
    if (selectedOption) {
        //get a number between 0 and 4
        let randomNumber = Math.floor(Math.random() * 5);
        //display computer choice
        document.getElementById('computer').innerHTML = gameOption[randomNumber];
        //check who wins and returns the result to the player
        if (selectedOption.value === 'rock') {
            if (gameOption[randomNumber] === 'scissor') document.getElementById('result').innerHTML = 'You crushed the computer\'s Scissor. YOU WIN!';
            else if (gameOption[randomNumber] === 'lizard') document.getElementById('result').innerHTML = 'You crushed the computer\'s Lizard. YOU WIN!';
            else if (gameOption[randomNumber] === 'rock') document.getElementById('result').innerHTML = 'It\'s a tie';
            else if (gameOption[randomNumber] === 'paper') document.getElementById('result').innerHTML = 'Your Rock was covered by the computer\'s Paper. YOU LOOSE!';
            else document.getElementById('result').innerHTML = 'Your Rock was vaporized by the computer\'s Spock. YOU LOOSE!';
        } else if (selectedOption.value === 'paper') {
            if (gameOption[randomNumber] === 'rock') document.getElementById('result').innerHTML = 'You covered the computer\'s Rock. YOU WIN!';
            else if (gameOption[randomNumber] === 'spock') document.getElementById('result').innerHTML = 'You disproved the computer\'s Spock. YOU WIN!';
            else if (gameOption[randomNumber] === 'paper') document.getElementById('result').innerHTML = 'It\'s a tie';
            else if (gameOption[randomNumber] === 'scissor') document.getElementById('result').innerHTML = 'Your Paper was cutted by the computer\'s Scissor. YOU LOOSE!';
            else document.getElementById('result').innerHTML = 'Your Paper was ate by the computer\'s Lizard. YOU LOOSE!';
        } else if (selectedOption.value === 'scissor') {
            if (gameOption[randomNumber] === 'paper') document.getElementById('result').innerHTML = 'You cutted the computer\'s Paper. YOU WIN!';
            else if (gameOption[randomNumber] === 'Lizard') document.getElementById('result').innerHTML = 'You decapitated the computer\'s Lizard. YOU WIN!';
            else if (gameOption[randomNumber] === 'scissor') document.getElementById('result').innerHTML = 'It\'s a tie';
            else if (gameOption[randomNumber] === 'rock') document.getElementById('result').innerHTML = 'Your Scissor was crushed by the computer\'s Rock. YOU LOOSE!';
            else document.getElementById('result').innerHTML = 'Your Scissor was smashed by the computer\'s Spock. YOU LOOSE!';
        } else if (selectedOption.value === 'lizard') {
            if (gameOption[randomNumber] === 'paper') document.getElementById('result').innerHTML = 'You ate the computer\'s Paper. YOU WIN!';
            else if (gameOption[randomNumber] === 'spock') document.getElementById('result').innerHTML = 'You poised the computer\'s Spock. YOU WIN!';
            else if (gameOption[randomNumber] === 'lizard') document.getElementById('result').innerHTML = 'It\'s a tie';
            else if (gameOption[randomNumber] === 'rock') document.getElementById('result').innerHTML = 'Your Lizard was crushed by the computer\'s Rock. YOU LOOSE!';
            else document.getElementById('result').innerHTML = 'Your Lizard was decapitated by the computer\'s Scissor. YOU LOOSE!';
        } else {
            if (gameOption[randomNumber] === 'rock') document.getElementById('result').innerHTML = 'You vaporized the computer\'s Rock. YOU WIN!';
            else if (gameOption[randomNumber] === 'scissor') document.getElementById('result').innerHTML = 'You smashed the computer\'s Scissor. YOU WIN!';
            else if (gameOption[randomNumber] === 'spock') document.getElementById('result').innerHTML = 'It\'s a tie';
            else if (gameOption[randomNumber] === 'paper') document.getElementById('result').innerHTML = 'Your Spock was disproved by the computer\'s Paper. YOU LOOSE!';
            else document.getElementById('result').innerHTML = 'Your Spock was poised by the computer\'s Lizard. YOU LOOSE!';
        }
    } else {
      alert("No option selected");
    }
  }