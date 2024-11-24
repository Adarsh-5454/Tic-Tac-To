import React from "react";

function Square({ value, onSquareClick }) {
  return (
    <div>
      <div className="board-row">
        <button className="Square" onClick={onSquareClick}>
          {value}
        </button>
      </div>
    </div>
  );
}
export default Square;
