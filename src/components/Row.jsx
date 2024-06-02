import Cell from "./Cell";

//Get the status of each cell
const getStatus = (letter, i, targetWord) => {
  if (targetWord[i] === letter) return "correct";
  if (targetWord.includes(letter)) return "present";
  return "absent";
};

const Row = ({ guess, targetWord }) => {
  return (
    <div className="row">
      {guess.split("").map((letter, i) => (
        <Cell
          key={i}
          value={letter}
          status={getStatus(letter, i, targetWord)}
        />
      ))}
    </div>
  );
};

export default Row;
