"use client";
import React, { useEffect, useState } from "react";
import createClient from "../../sanityClient";

const CategoryFilter = ({ selectedCategory, onCategorySelect }) => {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    const fetchCategories = async () => {
      const query = `*[_type == "product"] | order(category asc) {
        category
      }`;
      const data = await createClient.fetch(query);

      // Extract unique categories
      const uniqueCategories = [...new Set(data.map(product => product.category))];
      setCategories(uniqueCategories);
    };

    fetchCategories();
  }, []);

  return (
    <div className="flex space-x-4 overflow-x-auto p-4 bg-gray-100 rounded-lg">
      <button
        className={`px-4 py-2 rounded-lg ${selectedCategory === null ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-700"} transition`}
        onClick={() => onCategorySelect(null)}
      >
        All
      </button>
      {categories.map((category, index) => (
        <button
          key={index}
          className={`px-4 py-2 rounded-lg ${selectedCategory === category ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-700"} transition`}
          onClick={() => onCategorySelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
