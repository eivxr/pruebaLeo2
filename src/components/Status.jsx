import React from 'react';

export const Status = ({ win, lost }) => {
  let m = ' ';

  if (win) {
    m = 'Victoria';
  } else if (lost) {
    m = 'Derrota';
  }

  return (
    <div className="status">
      <p>{m}</p>
    </div>
  );
};


