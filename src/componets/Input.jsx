import React from 'react';

function Input({ valor, setValor }) {
  return (
    <input
      type="text"
      value={valor}
      onChange={(e) => setValor(e.target.value)}
      placeholder="Buscar..."
    />
  );
}

export default Input;   