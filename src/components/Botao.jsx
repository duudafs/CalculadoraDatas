import React from 'react';

const Botao = ({ texto, onClick }) => {
  return (
    <button className="btn btn-primary me-2" onClick={onClick}>
      {texto}
    </button>
  );
};

export default Botao;
