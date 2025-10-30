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
      const dataObj = new Date(data);
      dataObj.setDate(dataObj.getDate() + Number(valor));
      const novaData = dataObj.toISOString().split('T')[0];
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

export function CardCalendario() {
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
                  id="roxo"
                  value={valor}
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


