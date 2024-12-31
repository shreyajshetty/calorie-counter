import React from 'react';

const CalorieLog = ({ entries, deleteEntry }) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Today's Calorie Log</h2>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-200 px-4 py-2">Food Item</th>
            <th className="border border-gray-200 px-4 py-2">Calories</th>
            <th className="border border-gray-200 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td className="border border-gray-200 px-4 py-2">{entry.food}</td>
              <td className="border border-gray-200 px-4 py-2">{entry.calories}</td>
              <td className="border border-gray-200 px-4 py-2">
                <button
                  onClick={() => deleteEntry(index)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CalorieLog;
