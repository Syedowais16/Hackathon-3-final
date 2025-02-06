import React, { useState } from "react";
import { IoFilterSharp } from "react-icons/io5";

const FilterPanel = ({ filters, setFilters }) => {
  const [priceRange, setPriceRange] = useState(filters.priceRange);
  const [inStockOnly, setInStockOnly] = useState(filters.inStock);

  const brands = ["Nike", "Adidas", "Puma", "Reebok", "Under Armour"]; // Example brands

  const handlePriceChange = (e) => {
    setPriceRange(e.target.value);
    setFilters((prev) => ({ ...prev, priceRange: e.target.value }));
  };


  const handleStockChange = () => {
    setInStockOnly(!inStockOnly);
    setFilters((prev) => ({ ...prev, inStock: !inStockOnly }));
  };

  return (
    <div className="mb-3 bg-white shadow-md rounded-lg p-4 flex flex-wrap items-center justify-between w-full">
      {/* Filter Icon */}
      <div className="flex items-center gap-2 text-gray-700 font-semibold">
        <IoFilterSharp className="text-xl" />
        <span>Filters</span>
      </div>

      {/* Price Range Filter */}
      <div className="flex items-center gap-2">
        <label className="text-gray-700 font-medium">Price: ${priceRange}</label>
        <input
          type="range"
          min="10"
          max="500"
          step="10"
          value={priceRange}
          onChange={handlePriceChange}
          className="w-32 accent-blue-500 cursor-pointer"
        />
      </div>

      {/* Availability Toggle */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={handleStockChange}
          className="w-5 h-5 accent-green-500"
        />
        <label className="text-gray-700 font-medium">In Stock Only</label>
      </div>

    
        </div>
  );
};

export default FilterPanel;
