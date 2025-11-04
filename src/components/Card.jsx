// Card.js
import React, { useState } from 'react';
import './Card.css';

export default function Card() {
  const [data, setData] = useState('');
  const [dias, setDias] = useState([0, 0, 0, 0, 0, 0]);
  const [resultados, setResultados] = useState([null, null, null, null, null, null]);

  const atualizarDias = (index, valor) => {
    const novoDias = [...dias];
    novoDias[index] = Number(valor);
    setDias(novoDias);

    if (data) {
     const [ano, mes, dia] = data.split('-');
    const dataObj = new Date(ano, mes - 1, dia);
    dataObj.setDate(dataObj.getDate() + Number(valor));

    const novaData = dataObj.toLocaleDateString('pt-BR'); // DD/MM/YYYY
    const novosResultados = [...resultados];
    novosResultados[index] = novaData;
    setResultados(novosResultados);
  }
  };

  return (
    <div className="card">
      <table>
        <tbody>
          <tr>
            <th>Dias ⭣</th>
            <th>
              <input
                type="date"
                value={data}
                onChange={(e) => setData(e.target.value)}
                className="form-control mb-2"
              />
            </th>
          </tr>
          {dias.map((valor, index) => (
            <tr key={index}>
              <td>
                <input
                  type="number"
                  value={valor}
                  onChange={(e) => atualizarDias(index, e.target.value)}
                  placeholder="Dias a adicionar"
                  className="form-control mb-3"
                />
              </td>
              <td>{resultados[index] && <h6>{resultados[index]}</h6>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
