function playGame() {
    // Possible options for the machine to choose
    let gameOption = [ 'rock', 'paper', 'scissor', 'lizard', 'spock']
    // Select the checked radio button with name="option"
    let selectedOption = document.querySelector('input[name="choice"]:checked');
    
    if (selectedOption) {
        //get a number between 0 and 4
        let randomNumber = Math.floor(Math.random() * 5);
        alert("Selected option: " + selectedOption.value + "and the computer selected: " + gameOption[randomNumber]);

    } else {
      alert("No option selected");
    }
  }