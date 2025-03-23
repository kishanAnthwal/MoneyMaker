import './battingtable.css';
import { useState } from 'react';
import initialData from '../data';

export const BattingTable = () => {
  const [data, setData] = useState(initialData);

  const saveDataToBackend = async (row) => {
    try {
      const response = await fetch('backend-drab-six-62.vercel.app/api/clicked-data/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(row),
      });
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.error('Failed to save data:', err);
    }
  };

  const PressNo = (index) => {
    setData((prev) =>
      prev.map((row, i) =>
        i === index && !row.isRowDisabled
          ? (() => {
              const updatedRow = { ...row, no: row.no - 1, isRowDisabled: true };
              saveDataToBackend(updatedRow);
              return updatedRow;
            })()
          : row
      )
    );
  };

  const PressYes = (index) => {
    setData((prev) =>
      prev.map((row, i) =>
        i === index && !row.isRowDisabled
          ? (() => {
              const updatedRow = { ...row, yes: row.yes + 1, isRowDisabled: true };
              saveDataToBackend(updatedRow);
              return updatedRow;
            })()
          : row
      )
    );
  };

  return (
    <div className="table_container">
      <table className="wp-market-table">
        <thead>
          <tr>
            <th>W/P MARKET</th>
            <th>No</th>
            <th>Yes</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={row.isRowDisabled ? 'disabled-row' : ''}>
              <td>{row.market}</td>
              <td>
                <div
                  className={`cell ${row.isRowDisabled ? 'disabled' : ''}`}
                  onClick={() => PressNo(index)}
                >
                  <span className={`main ${row.isRowDisabled ? 'updated' : ''}`}>
                    {row.no}
                  </span>
                  <span className="sub">{row.noSub}</span>
                </div>
              </td>
              <td>
                <div
                  className={`cell ${row.isRowDisabled ? 'disabled' : ''}`}
                  onClick={() => PressYes(index)}
                >
                  <span className={`main ${row.isRowDisabled ? 'updated' : ''}`}>
                    {row.yes}
                  </span>
                  <span className="sub">{row.yesSub}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
