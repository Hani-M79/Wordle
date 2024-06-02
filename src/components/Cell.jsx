const Cell = ({ value, status }) => {
  return <div className={`cell ${status}`}>{value}</div>;
};

export default Cell;
