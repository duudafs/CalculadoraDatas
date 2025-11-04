import React, { useState } from 'react';
import './CardCalendario.css';

export default function CardCalendario() {
  const [data2, setData2] = useState(''); 
  const [data3, setData3] = useState(['', '', '', '', '', '']); 
  const [resultados, setResultados] = useState([null, null, null, null, null, null]);

  const atualizarData2 = (index, valor) => {
    const novasDatas = [...data3];
    novasDatas[index] = valor;
    setData3(novasDatas);

    if (data2 && valor) {
      const dataBase = new Date(data2);
      const dataLinha = new Date(valor);

      
      const dias =
        Math.floor((dataLinha.getTime() - dataBase.getTime()) / (1000 * 60 * 60 * 24));

      const novosResultados = [...resultados];
      novosResultados[index] = dias;
      setResultados(novosResultados);
    } else {
      const novosResultados = [...resultados];
      novosResultados[index] = null;
      setResultados(novosResultados);
    }
  };

  return (
    <div className="card-2">
      <table>
        <tbody>
          <tr>
            <th>Datas ⭣</th>
            <th>
              <input
                type="date"
                value={data2}
                onChange={(e) => setData2(e.target.value)}
                className="form-control mb-2"
              />
            </th>
          </tr>
          {data3.map((valor, index) => (
            <tr key={index}>
              <td>
                <input
                  type="date"
                  value={valor}
                id="roxo"
                  onChange={(e) => atualizarData2(index, e.target.value)}
                  className="form-control mb-3"
                />
              </td>
              <td>{resultados[index] !== null && <h6>{resultados[index]}</h6>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}