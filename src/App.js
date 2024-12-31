import React, { useState } from 'react';
import Header from './components/Header';
import CalorieForm from './components/CalorieForm';
import CalorieLog from './components/CalorieLog';
import DailySummary from './components/DailySummary';

const App = () => {
  const [entries, setEntries] = useState([]);

  const addEntry = (entry) => {
    setEntries([...entries, entry]);
  };

  const deleteEntry = (index) => {
    setEntries(entries.filter((_, i) => i !== index));
  };

  const totalCalories = entries.reduce((sum, entry) => sum + entry.calories, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <CalorieForm addEntry={addEntry} />
      <CalorieLog entries={entries} deleteEntry={deleteEntry} />
      <DailySummary totalCalories={totalCalories} />
    </div>
  );
};

export default App;
