//Keyboard letters
const keys = [
  "QWERTYUIOP".split(""),
  "ASDFGHJKL".split(""),
  "ZXCVBNM".split(""),
];

const Keyboard = ({ onKeyPress, disabledLetters, correctLetters }) => {
  return (
    <div className="keyboard">
      {keys.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {/* Adding "Enter" key at the beginning of last row */}
          {rowIndex === 2 && (
            <button onClick={() => onKeyPress("Enter")} className="key enter">
              Enter
            </button>
          )}
          {row.map((key) => (
            <button
              key={key}
              onClick={() => onKeyPress(key)}
              className="key"
              disabled={disabledLetters.includes(key)}
              style={{
                backgroundColor: correctLetters.includes(key)
                  ? "rgb(4, 83, 4)"
                  : disabledLetters.includes(key)
                  ? "#888"
                  : "",
                color: disabledLetters.includes(key) ? "#282c34" : "#fff",
              }}
            >
              {key}
            </button>
          ))}
          {/* Adding "Backspace" key at the end of last row */}
          {rowIndex === 2 && (
            <button onClick={() => onKeyPress("Backspace")} className="key">
              ⌫
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
