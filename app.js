  // Selecting elements : reset button & select feild.
  const resetAll = document.querySelector('#reset');
  const playingOpt = document.querySelector('#playto');

  // Initialize & Declear the: initial game play variable.
  let initialGamePlay = 5;

  // Creating an object for player one and store necessary info in it.
  const playerOne = {
    display: document.querySelector('.plOneDisplay'),
    button: document.querySelector('.p1Button'),
    score: 0,
  }

  // Creating an object for player one and store necessary info in it.
  const playerTwo = {
    display: document.querySelector('.plTwoDisplay'),
    button: document.querySelector('.p2Button'),
    score: 0,
  }

  // function for updating the player one score.
  function scoreUpdatePlayerOne() {
    playerOne.score += 1;
    playerOne.display.textContent = playerOne.score;
  }

  // function for updating the player two score.
  function scoreUpdatePlayerTwo() {
    playerTwo.score += 1;
    playerTwo.display.textContent = playerTwo.score;
  }

  // Condition for player one win.
  function playerOneWin() {
    playerOne.display.classList.toggle('winner');
    playerTwo.display.classList.toggle('looser');

    playerOne.button.disabled = true;
    playerTwo.button.disabled = true;
  }

  // Condition for player two win.
  function playerTwoWin() {
    playerTwo.display.classList.toggle('winner');
    playerOne.display.classList.toggle('looser');

    playerOne.button.disabled = true;
    playerTwo.button.disabled = true;
  }

  // Player one button event listener.
  playerOne.button.addEventListener('click', () => {
    scoreUpdatePlayerOne();
    if (playerOne.score === initialGamePlay) {
      playerOneWin();
    }
  })

  // Player two button event listener.
  playerTwo.button.addEventListener('click', () => {
    scoreUpdatePlayerTwo();
    if (playerTwo.score === initialGamePlay) {
      playerTwoWin();
    }
  })

  // Function that we call for reset button.
  function reset() {
    playerOne.score = 0;
    playerTwo.score = 0;

    playerOne.display.textContent = playerOne.score;
    playerTwo.display.textContent = playerTwo.score;
    playerOne.display.style.color = 'black';
    playerTwo.display.style.color = 'black';

    playerOne.button.disabled = false;
    playerTwo.button.disabled = false;
  }

  // Event listner for playing options i.e select
  playingOpt.addEventListener('change', () => {
    initialGamePlay = parseInt(playingOpt.value);
    reset();
  })

  // Event listner for reset button.
  resetAll.addEventListener('click', reset);
