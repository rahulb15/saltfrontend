'use client';
import { Link } from 'lucide-react';
import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ReactDatePicker from "react-datepicker";


const Availablity = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

    const options = [
        { day: "Wed", date: "20 Feb, 2025", price: "₹ 3,830 /" },
        { day: "Wed", date: "20 Feb, 2025", price: "₹ 3,830 /" },
        { day: "Wed", date: "20 Feb, 2025", price: "₹ 3,830 /" },
        { day: "Wed", date: "20 Feb, 2025", price: "₹ 3,830 /" }
    ];

    const [openAccordion, setOpenAccordion] = useState<number | null>(null);
    const toggleAccordion = (index: number) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const [startDate, setStartDate] = useState<Date | null>(today);
    const [endDate, setEndDate] = useState<Date | null>(tomorrow);

    const setDateRange = ([start, end]: [Date | null, Date | null]) => {
        setStartDate(start);
        setEndDate(end);
    };

    return (
        <>
            <div className="summary-div availablity-div">
                <div className="heading-top">
                    <h2>AVAILABILITY</h2>
                    <div className="saltstayz-search-field">
                        <img src="/index/calendar.png" width={30} alt="" />
                        <ReactDatePicker
                            selected={startDate}
                            onChange={(date) => setDateRange([date, endDate])}
                            placeholderText="Select Check in date"
                            className="available-date"
                            minDate={new Date()}
                            dateFormat="dd MMM, yyyy"
                        />
                        <ReactDatePicker
                            selected={endDate}
                            onChange={(date) => setDateRange([startDate, date])}
                            placeholderText="Select Check out date"
                            className="available-end-date"
                            minDate={startDate || new Date()}
                            dateFormat="dd MMM, yyyy"
                        />
                    </div>
                </div>

                {[1, 2, 3, 4].map((_, index) => (
                    <div key={index} className="available-room-sec">
                        <div className="available-room outline-div mt-20">
                            <Row>
                                <Col sm={5}>
                                    <img src="/index/gallery-img3.jpg" alt="" className='hotel-room' />
                                </Col>
                                <Col sm={7}>
                                    <h3>Standard Room</h3>
                                    <Row>
                                        <Col xs={6}>
                                            <div className="text">
                                                <p className="off">
                                                    35% Off
                                                </p>
                                                <p className="pre-price">
                                                    ₹ 4,210.4
                                                </p>
                                                <p className="price">
                                                    ₹ 3,830 /-
                                                </p>
                                                <p className="tax">Incl. taxes</p>
                                            </div>
                                        </Col>
                                        <Col xs={6}>
                                            <div className="text">
                                                <p className='gray-text'>2 Guests max </p>
                                                <p className='gray-text'>175 sq. ft. Area</p>
                                                <a href="#" className="book-now">Book</a>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>

                        <div className="accordion">
                            <p
                                className="accordion-heading my-4 cursor-pointer"
                                onClick={() => toggleAccordion(index)}
                            >
                                CHECK AVAILABILITY
                                <span>{">"} </span>
                            </p>
                            {openAccordion === index && (
                                <div className="accodion-show">
                                    <div className="checkin-detail outline-div  availablity-details">
                                        {options.map((option, index) => (
                                            <div
                                                key={index}
                                                className={`select ${selectedIndex === index ? "selected" : ""}`}
                                                onClick={() => setSelectedIndex(index)}
                                            >
                                                <p className="day">{option.day}</p>
                                                <strong className='date'>{option.date}</strong>
                                                <h6 className='price'>{option.price}</h6>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Availablity;