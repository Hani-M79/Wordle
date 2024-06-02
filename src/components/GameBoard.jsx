import Row from "./Row";

const Board = ({ guesses, currentGuess, targetWord }) => {
  const currentRowIndex = guesses.findIndex((guess) => guess === "");

  const rows = guesses.map((guess, index) => {
    if (index === currentRowIndex) {
      return currentGuess.padEnd(5);
    }
    return guess.padEnd(5);
  });

  return (
    <div className="game-board">
      {rows.map((guess, index) => (
        <Row key={index} guess={guess} targetWord={targetWord} />
      ))}
    </div>
  );
};

export default Board;
