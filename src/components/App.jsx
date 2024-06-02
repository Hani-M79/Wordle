import { useState } from "react";
import GameBoard from "./GameBoard";
import Keyboard from "./Keyboard";
import "../styles/App.css";

function App() {
  const targetWord = "APPLE";
  const [guesses, setGuesses] = useState(["", "", "", "", "", ""]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);

  //Disable letters if they're not in the target
  const updateDisabledLetters = (guess) => {
    const newDisabled = [];
    for (let letter of guess) {
      if (!targetWord.includes(letter) && !disabledLetters.includes(letter)) {
        newDisabled.push(letter);
      }
    }
    setDisabledLetters([...disabledLetters, ...newDisabled]);
  };

  //Change the color of correct letters to green
  const updateCorrectLetters = (guess) => {
    const newCorrect = [];
    for (let letter of guess) {
      if (targetWord.includes(letter) && !correctLetters.includes(letter)) {
        newCorrect.push(letter);
      }
    }
    setCorrectLetters([...correctLetters, ...newCorrect]);
  };

  //Reset game after win or lost
  const resetGame = () => {
    setGuesses(["", "", "", "", "", ""]);
    setCurrentGuess("");
    setDisabledLetters([]);
    setCorrectLetters([]);
  };

  //Handle "Enter" key press
  const handleEnterKey = () => {
    if (currentGuess.length === 5) {
      //Win
      if (currentGuess === targetWord) {
        alert("Successful!");
        resetGame();
      }
      //5 letters but not correct
      else {
        const nextGuesses = [...guesses];
        const currentRowIndex = nextGuesses.findIndex((guess) => guess === "");
        nextGuesses[currentRowIndex] = currentGuess;
        setGuesses(nextGuesses);
        //Loose
        if (currentRowIndex === 5) {
          alert("Failed!");
          resetGame();
        }
        //Continue to guess
        else {
          setCurrentGuess("");
          updateDisabledLetters(currentGuess);
          updateCorrectLetters(currentGuess);
        }
      }
    }
  };

  //Handle "Backspace" key press
  const handleBackspaceKey = () => {
    setCurrentGuess(currentGuess.slice(0, -1));
  };

  //Handle typing a letter
  const handleLetterKey = (key) => {
    if (currentGuess.length < 5) {
      setCurrentGuess(currentGuess + key);
    }
  };

  // Keypress function
  const handleKeyPress = (key) => {
    if (!disabledLetters.includes(key)) {
      if (key === "Enter") {
        handleEnterKey();
      } else if (key === "Backspace") {
        handleBackspaceKey();
      } else {
        handleLetterKey(key);
      }
    }
  };

  return (
    <div className="app-container">
      <GameBoard
        guesses={guesses}
        currentGuess={currentGuess}
        targetWord={targetWord}
      />
      <Keyboard
        onKeyPress={handleKeyPress}
        disabledLetters={disabledLetters}
        correctLetters={correctLetters}
      />
    </div>
  );
}

export default App;
