import React from 'react';

const DailySummary = ({ totalCalories }) => {
  return (
    <div className="p-4 bg-gray-100">
      <h2 className="text-lg font-bold">Total Calories Consumed: {totalCalories}</h2>
    </div>
  );
};

export default DailySummary;
