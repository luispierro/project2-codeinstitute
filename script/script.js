function playGame() {
    // Select the checked radio button with name="option"
    let selectedOption = document.querySelector('input[name="choice"]:checked');
    
    if (selectedOption) {
      alert("Selected option: " + selectedOption.value);
      
    } else {
      alert("No option selected");
    }
  }