'use client';
import { Link } from 'lucide-react';
import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

const mealOptions = [
    {
        id: 'breakfast',
        name: 'Breakfast',
        image: '/index/breakfast-meal.png',
        cutPrice: '415 /-',
        actualPrice: '₹310 /-',
    },
    {
        id: 'lunch',
        name: 'Lunch',
        image: '/index/lunch-meal.png',
        cutPrice: '320 /-',
        actualPrice: '₹215 /-',
    },
    {
        id: 'dinner',
        name: 'Dinner',
        image: '/index/dinner-meal.png',
        cutPrice: '425/-',
        actualPrice: '₹320 /-',
    }
];
const Summary = () => {
    const [selectedMeal, setSelectedMeal] = useState('breakfast');
    const handleMealSelect = (mealId:string) => {
        setSelectedMeal(mealId);
    };

    return (
        <>
            <div className="summary-div">
                <h2>
                SUMMARY
                </h2>
                <div className="checkin-detail outline-div mt-20">
                    <div className="leftside">
                        <p className="gray-text">CHECK IN</p>
                        <strong>20 Feb, 2025</strong>
                    </div>
                        <div className="badge success-badge">1 Night</div>
                    <div className="rightside">
                        <p className="gray">CHECK OUT</p>
                        <strong>21  Feb, 2025</strong>
                    </div>
                </div>
                <div className="checkin-detail flex-column ps-5">
                    <div className="badge info-badge">PREMIER</div>
                    <h5>Standard Room</h5>
                    <div className="gray-text">₹2259.35 /Night x 1 (1 Guest)</div>
                </div>

                <div className="checkin-detail flex-column">
                    <div className="leftside">
                            <h6>Total Room Charges</h6>
                            <h6>₹2259.35</h6>
                    </div>
                    <div className="leftside">
                            <h6>Total Taxes</h6>
                            <h6>₹31.12</h6>
                    </div>
                </div>

                <div className="checkin-detail outline-div br-3">
                            <h6 className="gray-text">Total Price</h6>
                            <h6>₹2290.47</h6>
                </div>

                <Row className='justify-content-center'>
                    <Col md={9}>
                        <div className="meal-selection">
                                {mealOptions.map((meal) => (
                                <div 
                                    key={meal.id} 
                                    className="meal-option" 
                                    onClick={() => handleMealSelect(meal.id)}
                                    style={{ cursor: 'pointer' }}
                                >
                                        <img src={meal.image} alt={meal.name} className="img-fluid" />
                                        <div className="price">
                                            <h5>{meal.name}</h5>
                                            <p><del>{meal.cutPrice}</del> </p>
                                            <p><strong>{meal.actualPrice}</strong></p>
                                        </div>
                                        <button
                                    className="meal-radio-btn"
                                    onClick={() => handleMealSelect(meal.id)}
                                >
                                    {selectedMeal === meal.id ? '✔ ' : ''}
                                </button>
                                </div>
                            ))}
                        </div>
                    
                    </Col>
                </Row>

                <Row className='justify-content-center'>
                    <Col md={10}>
                    <div className="discount-div">
                        <div className="discount-coupen">
                                <h5>
                               <span> Signup/Login </span>for discount
                                </h5>
                                <div className="flex-row">
                                    <input type="checkbox" name="check" id="" />
                                    <div className="rightside">
                                    <h4>SALTLOVERS10</h4>
                                    <p><span>Flat 10% off on first booking</span> Terms & Conditions</p>
                                    </div>
                                </div>
                                <img src="/index/cut.png" alt="" className='scissor-icon' />
                        </div>
                        <div className="flex-row">
                            <a href='#' className='btn book-now'>Book</a>
                        </div>
                        </div>
                    </Col>
                </Row>
            </div>

        </>
    );
};

export default Summary;