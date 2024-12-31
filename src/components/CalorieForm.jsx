import React, { useState } from 'react';

const CalorieForm = ({ addEntry }) => {
  const [food, setFood] = useState('');
  const [calories, setCalories] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (food && calories) {
      addEntry({ food, calories: Number(calories) });
      setFood('');
      setCalories('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-4">
        <label className="block mb-2">Food Item</label>
        <input
          type="text"
          value={food}
          onChange={(e) => setFood(e.target.value)}
          className="border rounded w-full p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Calories</label>
        <input
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          className="border rounded w-full p-2"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Entry
      </button>
    </form>
  );
};

export default CalorieForm;
