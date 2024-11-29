"use client";

import { useState } from "react";
import { indianFoodCalories } from "../../constants/index"


export default function FoodTracker() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  const filteredFoods = indianFoodCalories.filter((item) =>
    item.food.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddFood = (foodItem) => {
    setSelectedItems((prev) => [...prev, foodItem]);
  };

  const totalCalories = selectedItems.reduce((total, item) => total + item.calories, 0);

  return (
    <div className="min-h-full p-6 flex">
      <div className="m-4 w-[450px]">
      <h1 className="text-3xl font-bold text-center mb-4">Calorie Tracker</h1>

      {/* Search Bar */}
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          className="w-full max-w-lg p-2 px-4 rounded-full shadow-md bg-green-700 text-white"
          placeholder="Search for food..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Food List */}
      <div className=" shadow-md rounded-lg p-4 max-w-lg mx-auto max-h-[400px] overflow-y-scroll">
        <h2 className="text-xl font-semibold mb-3">Search Results</h2>
        {filteredFoods.length > 0 ? (
          <ul className="space-y-2">
            {filteredFoods.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center text-green-200 p-2 rounded-lg shadow-sm"
              >
                <span>{item.food}</span>
                <button
                  className="text-3xl text-white bg-green-500 hover:bg-green-600 px-3 py-1 rounded-full "
                  onClick={() => handleAddFood(item)}
                  >
                  +
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No food found</p>
        )}
      </div>

        </div>
      {/* Selected Items */}
      <div className="m-6 shadow-md rounded-lg p-4 w-[450px] mx-auto">
        <h2 className="text-xl font-semibold mb-3">Selected Foods</h2>
        {selectedItems.length > 0 ? (
          <ul className="space-y-2">
            {selectedItems.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-green-900 p-2 rounded-lg shadow-sm"
              >
                <span>{item.food}</span>
                <span>{item.calories} kcal</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No food added yet</p>
        )}
        {/* Total Calories */}
        <div className="mt-4 text-lg font-semibold">
          Total Calories: <span className="text-blue-500">{totalCalories} kcal</span>
        </div>
      </div>
    </div>
  );
}
