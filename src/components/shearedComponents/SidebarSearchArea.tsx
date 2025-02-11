"use client";

import React, { useState } from "react";

// Type definitions
type CategoryName = "amenities" | "location" | "deals";

interface ExpandedCategories {
  [key: string]: boolean;
}

interface SelectedOptions {
  [key: string]: string[];
}

interface FilterCategoryProps {
  title: string;
  options: string[];
  expanded: boolean;
  onToggle: () => void;
  selectedOptions: string[];
  onOptionChange: (option: string) => void;
}

interface HotelFilterSidebarProps {
  placeHolderTextData?: string;
}

const styles = `
  .sidebar {
    width: 300px;
    background-color: #ffffff;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    height: 100vh;
    overflow-y: auto;
    font-family: Arial, sans-serif;
  }
  .sidebar h2 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
    border-bottom: 2px solid #f0f0f0;
    padding-bottom: 10px;
  }
  .search-container {
    position: relative;
    margin-bottom: 20px;
  }
  .search-input {
    width: 100%;
    padding: 10px 30px 10px 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
  }
  .search-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #888;
  }
  .price-range {
    margin-bottom: 20px;
  }
  .price-inputs {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .price-input {
    width: 45%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
  }
  .price-slider {
    width: 100%;
  }
  .filter-category {
    margin-bottom: 15px;
    border-bottom: 1px solid #eee;
    padding-bottom: 15px;
  }
  .category-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    user-select: none;
    padding: 10px 0;
    transition: background-color 0.3s;
  }
  .category-header:hover {
    background-color: #f5f5f5;
  }
  .category-title {
    font-size: 16px;
    font-weight: bold;
    color: #444;
  }
  .category-icon {
    font-size: 16px;
    color: #666;
  }
  .category-options {
    margin-top: 10px;
  }
  .option-label {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;
    transition: all 0.3s;
    padding: 5px;
    border-radius: 4px;
  }
  .option-label:hover {
    background-color: #f0f0f0;
  }
  .option-label.selected {
    background-color: #e6f3ff;
    border: 1px solid #007bff;
  }
  .option-checkbox {
    margin-right: 10px;
    appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid #007bff;
    border-radius: 3px;
    outline: none;
    cursor: pointer;
    position: relative;
  }
  .option-checkbox:checked {
    background-color: #007bff;
  }
  .option-checkbox:checked::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 12px;
  }
  .option-text {
    font-size: 14px;
    color: #333;
  }
  .apply-button {
    width: 100%;
    padding: 12px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
    margin-top: 20px;
  }
  .apply-button:hover {
    background-color: #0056b3;
  }
  .selected-count {
    font-size: 12px;
    color: #007bff;
    margin-left: 5px;
  }
`;

const FilterCategory: React.FC<FilterCategoryProps> = ({
  title,
  options,
  expanded,
  onToggle,
  selectedOptions,
  onOptionChange,
}) => (
  <div className="filter-category">
    <div className="category-header" onClick={onToggle}>
      <span className="category-title">
        {title}
        {selectedOptions.length > 0 && (
          <span className="selected-count">
            ({selectedOptions.length} selected)
          </span>
        )}
      </span>
      <span className="category-icon">{expanded ? "▲" : "▼"}</span>
    </div>
    {expanded && (
      <div className="category-options">
        {options.map((option) => (
          <label
            key={option}
            className={`option-label ${
              selectedOptions.includes(option) ? "selected" : ""
            }`}
          >
            <input
              type="checkbox"
              className="option-checkbox"
              checked={selectedOptions.includes(option)}
              onChange={() => onOptionChange(option)}
            />
            <span className="option-text">{option}</span>
          </label>
        ))}
      </div>
    )}
  </div>
);

const HotelFilterSidebar: React.FC<HotelFilterSidebarProps> = ({
  placeHolderTextData,
}) => {
  const [expandedCategories, setExpandedCategories] =
    useState<ExpandedCategories>({
      amenities: true,
      location: false,
      deals: false,
    });

  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    amenities: [],
    location: [],
    deals: [],
  });

  const [priceRange, setPriceRange] = useState([500, 5000]);

  const toggleCategory = (category: CategoryName) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleOptionChange = (category: CategoryName, option: string) => {
    setSelectedOptions((prev) => {
      const updatedOptions = prev[category].includes(option)
        ? prev[category].filter((item) => item !== option)
        : [...prev[category], option];
      return { ...prev, [category]: updatedOptions };
    });
  };

  const handlePriceChange = (index: number, value: number) => {
    setPriceRange((prev) => {
      const newRange = [...prev];
      newRange[index] = value;
      return newRange;
    });
  };

  const filterCategories: Record<CategoryName, string[]> = {
    amenities: [
      "GYM",
      "Conference Hall",
      "Car Parking",
      "Laundry",
      "Mini Fridge",
      "Induction",
      "Electric Kettle",
      "F&B services",
      "In room dining",
      "Restaurant",
      "Work station",
    ],
    location: [
      "Sector 27",
      "Sector 28",
      "Sector 39",
      "Sector 46",
      "Sector 43",
      "Sector 57",
      "Sector 24",
      "Sector 62",
      "Golf Course Road",
      "DLF Phase 1",
      "DLF Phase 3",
      "Okhla (Delhi)",
      "Pitampura (Delhi)",
      "Chanakpuri (Delhi)",
    ],
    deals: ["Daily Value deal", "Monsoon Sale", "Early Bird Offer"],
  };

  return (
    <>
      <style>{styles}</style>
      <aside className="sidebar">
        <h2>Filters</h2>

        <div className="search-container">
          <input
            type="text"
            placeholder={"Search..."}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>

        <div className="price-range">
          <h5>Price Range</h5>
          <div className="price-inputs">
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) => handlePriceChange(0, Number(e.target.value))}
              min={500}
              max={priceRange[1]}
              className="price-input"
            />
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(1, Number(e.target.value))}
              min={priceRange[0]}
              max={5000}
              className="price-input"
            />
          </div>
          <input
            type="range"
            min={500}
            max={5000}
            value={priceRange[1]}
            onChange={(e) => handlePriceChange(1, Number(e.target.value))}
            className="price-slider"
          />
        </div>

        {(Object.entries(filterCategories) as [CategoryName, string[]][]).map(
          ([category, options]) => (
            <FilterCategory
              key={category}
              title={category.charAt(0).toUpperCase() + category.slice(1)}
              options={options}
              expanded={expandedCategories[category]}
              onToggle={() => toggleCategory(category)}
              selectedOptions={selectedOptions[category]}
              onOptionChange={(option) => handleOptionChange(category, option)}
            />
          )
        )}

        <button className="apply-button">Apply Filters</button>
      </aside>
    </>
  );
};

export default HotelFilterSidebar;
