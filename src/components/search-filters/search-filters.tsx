'use client';

import { useState } from 'react';

import { Input } from 'reactstrap';
interface Filters {
    minPrice: number;
    maxPrice: number;
}

export default function SearchFilters() {
    const [filters, setFilters] = useState<Filters>({
        minPrice: 0,
        maxPrice: 10000,
    });


    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => {
            const newValue = Math.round(Number(value)); // Ensure it's a whole number
            if (name === "minPrice" && newValue <= prevFilters.maxPrice) {
                return { ...prevFilters, minPrice: newValue };
            } else if (name === "maxPrice" && newValue >= prevFilters.minPrice) {
                return { ...prevFilters, maxPrice: newValue };
            }
            return prevFilters;
        });
    };

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const midValue = Math.round(Number(e.target.value)); // Ensure it's a whole number
        setFilters((prevFilters) => {
            const range = prevFilters.maxPrice - prevFilters.minPrice;
            const newMin = Math.max(0, Math.round(midValue - range / 2)); // Round values
            const newMax = Math.min(10000, Math.round(midValue + range / 2)); // Round values
            return { ...prevFilters, minPrice: newMin, maxPrice: newMax };
        });
    };


    const [checkedState, setCheckedState] = useState<{ [key: string]: boolean }>({
        autograph: false,
        premier: false,
    });
    const handleCheckboxChange = (name: string) => {
        setCheckedState((prev) => ({
            ...prev,
            [name]: !prev[name]
        }));
    };
    return (
        <div className="searchfilters mt-4">
            <h2>Select Filters</h2>
            <div className="filter-section mt-3">
                <div className="checkbox">
                    <h3>Hotel Category</h3>

                    <div className="input-grp">
                        <label className="form-check-label d-flex align-items-center" htmlFor="autograph">
                            <input type="checkbox" id="autograph" className="me-2 checkbox-input" value="autograph" />
                            Autograph

                        </label>
                    </div>
                    <div className="input-grp">
                        <label className="form-check-label d-flex align-items-center" htmlFor="premier">
                            <input type="checkbox" id="premier" className="me-2 checkbox-input" value="premier" />
                            Premier
                        </label>
                    </div>
                    <div className="input-grp">
                        <label className="form-check-label d-flex align-items-center" htmlFor="select">
                            <input type="checkbox" id="select" className="me-2 checkbox-input" value="select" />

                            Select
                        </label>
                    </div>
                    <div className="input-grp">
                        <label className="form-check-label d-flex align-items-center" htmlFor="express">
                            <input type="checkbox" id="express" className="me-2 checkbox-input" value="express" />

                            Express
                        </label>
                    </div>

                </div>
                <div className="checkbox">
                    <h3>Locality</h3>

                    <div className="input-grp">
                        <label className="form-check-label d-flex align-items-center" htmlFor="golfcourseroad">
                            <input type="checkbox" id="golfcourseroad" className="me-2 checkbox-input" value="golfcourseroad" />
                            Golf course road

                        </label>
                    </div>
                    <div className="input-grp">
                        <label className="form-check-label d-flex align-items-center" htmlFor="extensionroad">
                            <input type="checkbox" id="extensionroad" className="me-2 checkbox-input" value="extensionroad" />
                            Extension road
                        </label>
                    </div>
                    <div className="input-grp">
                        <label className="form-check-label d-flex align-items-center" htmlFor="hudacity">
                            <input type="checkbox" id="hudacity" className="me-2 checkbox-input" value="hudacity" />
                            HUDA City
                        </label>
                    </div>
                    <div className="input-grp">
                        <label className="form-check-label d-flex align-items-center" htmlFor="mgmstation">
                            <input type="checkbox" id="mgmstation" className="me-2 checkbox-input" value="mgmstation" />
                            MG Metro station
                        </label>
                    </div>
                    <div className="input-grp">
                        <label className="form-check-label d-flex align-items-center" htmlFor="iffco">
                            <input type="checkbox" id="iffco" className="me-2 checkbox-input" value="iffco" />
                            Iffco metro station
                        </label>
                    </div>
                    <div className="input-grp">
                        <label className="form-check-label d-flex align-items-center" htmlFor="galleriamarket">
                            <input type="checkbox" id="galleriamarket" className="me-2 checkbox-input" value="galleriamarket" />
                            Galleria Market
                        </label>
                    </div>
                    <div className="input-grp">
                        <label className="form-check-label d-flex align-items-center" htmlFor="dlfcyber">
                            <input type="checkbox" id="dlfcyber" className="me-2 checkbox-input" value="dlfcyber" />
                            DLF Cyber
                        </label>
                    </div>
                    <div className="input-grp">
                        <label className="form-check-label d-flex align-items-center" htmlFor="sectorGurgaon">
                            <input type="checkbox" id="sectorGurgaon" className="me-2 checkbox-input" value="sectorGurgaon" />
                            sector 14 Gurgaon
                        </label>
                    </div>

                </div>
                <div className="checkbox priceRange">
                <h3>Price Range</h3>
                    <div className="d-flex align-items-center">
                        <input
                            type="number"
                            className="form-control me-2"
                            name="minPrice"
                            value={filters.minPrice}
                            min="0"
                            max={filters.maxPrice}
                            onChange={handlePriceChange}
                        />
                        <input
                            type="range"
                            className="form-range flex-grow-1"
                            min="0"
                            max="10000"
                            value={(filters.minPrice + filters.maxPrice) / 2}
                            onChange={handleSliderChange}
                        />
                        <input
                            type="number"
                            className="form-control ms-2"
                            name="maxPrice"
                            value={filters.maxPrice}
                            min={filters.minPrice}
                            max="10000"
                            onChange={handlePriceChange}
                        />
                    </div>
                </div>
                <div className="checkbox">
                    <h3>Hotel Amenities</h3>

                    <div className="input-grp">
                        <label className="form-check-label d-flex align-items-center" htmlFor="balcony">
                            <input type="checkbox" id="balcony" className="me-2 checkbox-input" value="balcony" />
                            Balcony/Terrace

                        </label>
                    </div>
                    <div className="input-grp">
                        <label className="form-check-label d-flex align-items-center" htmlFor="kitchenette">
                            <input type="checkbox" id="kitchenette" className="me-2 checkbox-input" value="kitchenette" />
                            Kitchenette
                        </label>
                    </div>
                    <div className="input-grp">
                        <label className="form-check-label d-flex align-items-center" htmlFor="caretaker">
                            <input type="checkbox" id="caretaker" className="me-2 checkbox-input" value="caretaker" />
                            Caretaker
                        </label>
                    </div>
                    <div className="input-grp">
                        <label className="form-check-label d-flex align-items-center" htmlFor="resturant">
                            <input type="checkbox" id="resturant" className="me-2 checkbox-input" value="resturant" />
                            Resturant
                        </label>
                    </div>
                    <div className="input-grp">
                        <label className="form-check-label d-flex align-items-center" htmlFor="roomservice">
                            <input type="checkbox" id="roomservice" className="me-2 checkbox-input" value="roomservice" />
                            Room Service
                        </label>
                    </div>
                    <div className="input-grp">
                        <label className="form-check-label d-flex align-items-center" htmlFor="elevatorlift">
                            <input type="checkbox" id="elevatorlift" className="me-2 checkbox-input" value="elevatorlift" />
                            Elevator/Lift
                        </label>
                    </div>
                    <div className="input-grp">
                        <label className="form-check-label d-flex align-items-center" htmlFor="parking">
                            <input type="checkbox" id="parking" className="me-2 checkbox-input" value="parking" />
                            Parking
                        </label>
                    </div>
                    <div className="input-grp">
                        <label className="form-check-label d-flex align-items-center" htmlFor="restaurant">
                            <input type="checkbox" id="restaurant" className="me-2 checkbox-input" value="restaurant" />
                            Restaurant
                        </label>
                    </div>

                </div>
                <div className="checkbox">
                    <h3>Room Amenities</h3>

                    <div className="input-grp">
                        <label className="form-check-label d-flex align-items-center" htmlFor="smarttelevision">
                            <input type="checkbox" id="smarttelevision" className="me-2 checkbox-input" value="smarttelevision" />
                            Smart Television

                        </label>
                    </div>
                    <div className="input-grp">
                        <label className="form-check-label d-flex align-items-center" htmlFor="smokingroom">
                            <input type="checkbox" id="smokingroom" className="me-2 checkbox-input" value="smokingroom" />
                            Smoking Room
                        </label>
                    </div>
                    <div className="input-grp">
                        <label className="form-check-label d-flex align-items-center" htmlFor="kitchenette">
                            <input type="checkbox" id="kitchenette" className="me-2 checkbox-input" value="kitchenette" />
                            Kitchenette
                        </label>
                    </div>
                    <div className="input-grp">
                        <label className="form-check-label d-flex align-items-center" htmlFor="bathtub">
                            <input type="checkbox" id="bathtub" className="me-2 checkbox-input" value="bathtub" />
                            Bathtub
                        </label>
                    </div>
                    <div className="input-grp">
                        <label className="form-check-label d-flex align-items-center" htmlFor="roomservice">
                            <input type="checkbox" id="roomservice" className="me-2 checkbox-input" value="roomservice" />
                            Room Service
                        </label>
                    </div>
                    <div className="input-grp">
                        <label className="form-check-label d-flex align-items-center" htmlFor="balcony">
                            <input type="checkbox" id="balcony" className="me-2 checkbox-input" value="balcony" />
                            Balcony
                        </label>
                    </div>
                    <div className="input-grp">
                        <label className="form-check-label d-flex align-items-center" htmlFor="livingarea">
                            <input type="checkbox" id="livingarea" className="me-2 checkbox-input" value="livingarea" />
                            Living Area
                        </label>
                    </div>
                   

                </div>
            </div>
        </div>
    );
}
