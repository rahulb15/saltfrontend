import React, { useState, useEffect } from "react";

interface Amenity {
  _id: string;
  name: string;
  icon: string;
  category: string;
}

interface FilterState {
  priceRange: [number, number];
  amenities: any[];
  search: string;
  checkIn?: string;
  checkOut?: string;
  adults?: number;
  children?: number;
}

interface HotelFilterSidebarProps {
  initialFilters: FilterState;
  availableFilters?: any;
  onFilterChange: (filters: Partial<FilterState>) => void;
  onSortChange: (field: string, order: "asc" | "desc") => void;
}

const HotelFilterSidebar: React.FC<HotelFilterSidebarProps> = ({
  initialFilters,
  availableFilters,
  onFilterChange,
  onSortChange,
}) => {
  const [searchText, setSearchText] = useState(initialFilters.search);
  const [priceRange, setPriceRange] = useState(initialFilters.priceRange);
  const [selectedAmenities, setSelectedAmenities] = useState(initialFilters.amenities);
  const [sortValue, setSortValue] = useState("rating-desc");
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  useEffect(() => {
    setSearchText(initialFilters.search);
    setPriceRange(initialFilters.priceRange);
    setSelectedAmenities(initialFilters.amenities);
  }, [initialFilters]);

  const amenitiesList = availableFilters?.availableAmenities || [];

  const handleSearch = (value: string) => {
    setSearchText(value);
    onFilterChange({ search: value });
  };

  const handlePriceChange = (index: number, value: number) => {
    const newRange: [number, number] = [...priceRange] as [number, number];
    newRange[index] = value;
    setPriceRange(newRange);
    onFilterChange({ priceRange: newRange });
  };

  const handleAmenityChange = (amenityId: string) => {
    const newAmenities = selectedAmenities.includes(amenityId)
      ? selectedAmenities.filter(a => a !== amenityId)
      : [...selectedAmenities, amenityId];
    setSelectedAmenities(newAmenities);
    onFilterChange({ amenities: newAmenities });
  };

  const handleSortChange = (value: string) => {
    setSortValue(value);
    const [field, order] = value.split("-") as [string, "asc" | "desc"];
    onSortChange(field, order);
  };

  return (
    <>
      <div className="filter-mobile-toggle" onClick={() => setIsFilterVisible(!isFilterVisible)}>
        <i className="fas fa-filter"></i> Filters
      </div>

      <aside className={`hotel-filter-sidebar ${isFilterVisible ? 'visible' : ''}`}>
        <div className="filter-header">
          <h2>Filter Hotels</h2>
          <button className="close-filter" onClick={() => setIsFilterVisible(false)}>×</button>
        </div>

        <div className="filter-section search-section">
          <div className="search-box">
            <input
              type="text"
              value={searchText}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search hotels..."
            />
            <i className="fas fa-search search-icon"></i>
          </div>
        </div>

        <div className="filter-section">
          <h5>Price Range</h5>
          <div className="price-range-container">
            <div className="price-inputs">
              <div className="input-group">
                <span className="currency">₹</span>
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange(0, Number(e.target.value))}
                  min={availableFilters?.priceRange.min || 0}
                  max={priceRange[1]}
                />
              </div>
              <span className="separator">-</span>
              <div className="input-group">
                <span className="currency">₹</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange(1, Number(e.target.value))}
                  min={priceRange[0]}
                  max={availableFilters?.priceRange.max || 10000}
                />
              </div>
            </div>
            <input
              type="range"
              className="price-slider"
              min={availableFilters?.priceRange.min || 0}
              max={availableFilters?.priceRange.max || 10000}
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(1, Number(e.target.value))}
            />
          </div>
        </div>

        <div className="filter-section">
          <h5>Amenities</h5>
          <div className="amenities-grid">
            {amenitiesList.map((amenity: Amenity) => (
              <label key={amenity._id} className="amenity-item">
                <input
                  type="checkbox"
                  checked={selectedAmenities.includes(amenity._id)}
                  onChange={() => handleAmenityChange(amenity._id)}
                />
                <span className="checkmark"></span>
                <span className="amenity-name">
                  {amenity.icon && <span className="amenity-icon">{amenity.icon}</span>}
                  {amenity.name}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="filter-section">
          <h5>Sort By</h5>
          <select
            value={sortValue}
            onChange={(e) => handleSortChange(e.target.value)}
            className="sort-select"
          >
            <option value="rating-desc">Rating: High to Low</option>
            <option value="rating-asc">Rating: Low to High</option>
            <option value="price.amount-desc">Price: High to Low</option>
            <option value="price.amount-asc">Price: Low to High</option>
            <option value="createdAt-desc">Newest First</option>
            <option value="createdAt-asc">Oldest First</option>
          </select>
        </div>

        <button 
          className="apply-filters-btn"
          onClick={() => {
            onFilterChange({
              search: searchText,
              priceRange,
              amenities: selectedAmenities
            });
            setIsFilterVisible(false);
          }}
        >
          Apply Filters
        </button>

        <style jsx>{`
  /* Add these animations within the styled-jsx block */
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .hotel-filter-sidebar {
    background: #ffffff;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    width: 100%;
    max-width: 350px;
    animation: slideIn 0.3s ease;
    position: sticky;
    top: 90px;
    height: calc(100vh - 40px);
    overflow-y: auto;
  }

  .filter-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    padding-bottom: 15px;
    border-bottom: 1px solid #edf2f7;
  }

  .filter-header h2 {
    font-size: 22px;
    font-weight: 600;
    color: #2d3748;
    margin: 0;
  }

 .search-box {
  position: relative;
  margin-bottom: 20px;
}

.search-box input {
  width: 100%;
  padding: 14px 20px 14px 20px; /* Adjust left padding for text spacing */
  padding-right: 45px; /* Space for the icon */
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 15px;
  transition: all 0.3s ease;
  background: #f8fafc;
}

.search-box input:focus {
  border-color: #198754;
  background: #ffffff;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.15);
}

.search-box .search-icon {
  position: absolute;
  top: 50%;
  right: 15px; /* Space from the right edge */
  transform: translateY(-50%);
  font-size: 18px;
  color: #a0aec0; /* Neutral icon color */
  pointer-events: none; /* Prevent interaction with the icon */
  transition: color 0.3s ease;
}

.search-box input:focus + .search-icon {
  color: #198754; /* Highlight the icon on focus */
}

  .price-range-container {
    background: #f8fafc;
    padding: 20px;
    border-radius: 10px;
    margin: 15px 0;
  }

  .price-inputs {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
  }

  .filter-section {
    margin-bottom: 30px;

  }

  .input-group {
    position: relative;
    flex: 1;
    background: #ffffff;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    padding: 2px;
  }

  .currency {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #64748b;
    font-weight: 500;
  }

  .input-group input {
    width: 100%;
    padding: 10px 10px 10px 30px;
    border: none;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 500;
  }

  .input-group input:focus {
    outline: none;
    box-shadow: 0 0 0 2px #93c5fd;
  }

  .price-slider {
    width: 100%;
    height: 6px;
    background: #e2e8f0;
    border-radius: 3px;
    -webkit-appearance: none;
    margin: 10px 0;
  }

  .price-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 22px;
    height: 22px;
    background: #ffffff;
    border: 2px solid #198754;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  .price-slider::-webkit-slider-thumb:hover {
    transform: scale(1.1);
    box-shadow: 0 3px 8px rgba(66, 153, 225, 0.25);
  }

  .amenities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 12px;
    max-height: 250px;
    overflow-y: auto;
    padding: 10px;
    margin: -10px;
  }

  .amenities-grid::-webkit-scrollbar {
    width: 6px;
  }

  .amenities-grid::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }

  .amenities-grid::-webkit-scrollbar-thumb {
    background: #cbd5e0;
    border-radius: 3px;
  }

  .amenity-item {
    position: relative;
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    user-select: none;
    border-radius: 8px;
    transition: all 0.2s ease;
    border: 2px solid transparent;
  }

  .amenity-item:hover {
    background-color: #f8fafc;
    border-color: #e2e8f0;
  }

  .amenity-item input:checked + .checkmark {
    border-color: #198754;
    background: #198754;
  }

  .checkmark {
    height: 20px;
    width: 20px;
    background-color: #ffffff;
    border: 2px solid #cbd5e0;
    border-radius: 6px;
    margin-right: 12px;
    position: relative;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    transition: all 0.2s ease;
  }

  .amenity-item input:checked ~ .checkmark:after {
    display: block;
    animation: fadeIn 0.2s ease-out;
  }

  .sort-select {
    width: 100%;
    padding: 12px 15px;
    border: 2px solid #e2e8f0;
    border-radius: 10px;
    font-size: 15px;
    color: #4a5568;
    background-color: #f8fafc;
    cursor: pointer;
    transition: all 0.2s ease;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 12px center;
    background-size: 20px;
    margin-top: 10px;
  }

  .sort-select:focus {
    border-color: #198754;
    background-color: #ffffff;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.15);
  }

  .apply-filters-btn {
    width: 100%;
    padding: 14px;
    background-color: #198754;
    color: white;
    border: none;
    border-radius: 10px;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.2s ease;
    margin-top: 20px;
    box-shadow: 0 4px 6px rgba(66, 153, 225, 0.15);
  }

  .apply-filters-btn:hover {
    background-color: #198754;
    transform: translateY(-1px);
    box-shadow: 0 6px 8px rgba(66, 153, 225, 0.2);
  }

  .apply-filters-btn:active {
    transform: translateY(0);
  }

  .filter-mobile-toggle {
    display: none;
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 15px 25px;
    background-color: #198754;
    color: white;
    border-radius: 30px;
    font-weight: 600;
    box-shadow: 0 4px 12px rgba(66, 153, 225, 0.3);
    cursor: pointer;
    z-index: 100;
    transition: all 0.2s ease;
  }

  @media (max-width: 768px) {
    .hotel-filter-sidebar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      max-width: 100%;
      border-radius: 0;
      transform: translateX(-100%);
      transition: transform 0.3s ease;
      z-index: 1000;
      overflow-y: auto;
      padding: 20px;
      height: fit-content;
    }

    .hotel-filter-sidebar.visible {
      transform: translateX(0);
    }

    .filter-mobile-toggle {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .close-filter {
      display: block;
      font-size: 28px;
      color: #4a5568;
      padding: 8px;
      border-radius: 8px;
      transition: all 0.2s ease;
    }

    .close-filter:hover {
      background-color: #f7fafc;
    }

    .amenities-grid {
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    }

    .apply-filters-btn {
      position: fixed;
      bottom: 20px;
      left: 20px;
      right: 20px;
      width: calc(100% - 40px);
      border-radius: 12px;
      padding: 16px;
      font-size: 16px;
      z-index: 1001;
    }

    .filter-section {
      margin-bottom: 30px;
    }
  }

  /* Additional responsive adjustments */
  @media (max-width: 480px) {
    .price-inputs {
      flex-direction: column;
      gap: 10px;
    }

    .separator {
      display: none;
    }

    .amenities-grid {
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    }
  }
`}</style>
    </aside>
    </>
  );
};

export default HotelFilterSidebar;