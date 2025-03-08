'use client';
import React, { useState } from 'react';
import Slider from 'react-slick';
import { Container, Row, Col, Modal, ModalBody, ModalHeader } from 'reactstrap';




const GuestDetailsForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        gstNo: "",
        email: "",
        phone: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };
    return (
        <>
            <div className="guest-details-form">
                
                <form onSubmit={handleSubmit} >
                    <Row>
                        <Col sm={4}>
                            <div className="mb-4">
                            <label className="block font-semibold">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        </Col>
                        <Col sm={4}>
                        <div className="mb-4">
                        <label className="block font-semibold">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                        </Col>
                        <Col sm={4}>
                        <div className="mb-4">
                        <label className="block font-semibold">GST No</label>
                        <input
                            type="text"
                            name="gstNo"
                            value={formData.gstNo}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                        </Col>
                        <Col sm={6}>
                        <div className="mb-4">
                        <label className="block font-semibold">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                        <span>Confirmation email goes to this address</span>
                    </div>
                        </Col>
                        <Col sm={6}>
                         <div className="mb-4">
                        <label className="block font-semibold">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                        <span>Confirmation email goes to this address</span>

                    </div>
                    
                        </Col>
                        
                    {/* <button type="submit" className="w-full p-2 bg-blue-500 text-white font-semibold rounded">
                        Submit
                    </button> */}
                    </Row>
                   

                </form>

               <div className="btn-row mt-30">
                <a href="#" className="btn-outline">
                The Slatstayz Policy
                </a>
                <a href="#" className="btn-outline">
                Commune Policy 
                </a>
               </div>
            </div>
        </>
    );
};

export default GuestDetailsForm;