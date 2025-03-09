'use client';
import React, { useState } from 'react';
import { Container, Row, Col, Modal, ModalBody, ModalHeader } from 'reactstrap';
import Image from "next/image";
import InstagramSection from '../InstagramSection';
const ContactUs = () => {
    const blogColumns = [
        [
            { image: "/index/mohali.jpg", title: "Mohali" },
        ],
        [
            { image: "/index/delhi.jpg", title: "Delhi " },
        ],
        [
            { image: "/index/rishikesh.jpg", title: "Rishikesh", },
        ],
        [
            { image: "/index/noida.jpg", title: "Noida", },
        ],
    ];
    return (

        <>
            <div className="contact-us">
                <Container>
                    <div className="text-content header-div amenites-div guest-div">
                        <div className="left-side">
                            <div className="div">
                                <h2>Contact Us</h2>
                            </div>
                            <img src="/index/bulb-heading.png" width={50} alt="" className="bulb" />
                            <div className="bottom-div">
                                <img src="/index/straightline.png" alt="" className="bottom-line" />
                            </div>
                        </div>
                    </div>

                    <div className="about-details contact-details">
                        <h1>Need to get in touch?</h1>
                        <Row className="py-5">
                            <Col sm={6}>
                            <div className="info-detail">
                                <img src="/index/mobile.svg" alt="" className="icon" />
                                <a href="tel:+911231231342" className="link">+911231231342</a>
                                </div>
                            </Col>
                            <Col sm={6}>
                            <div className="info-detail">

                                <img src="/index/@icon.svg" alt="" className="icon" />
                                <a href="mailto:help@saltstayz.com" className="link">help@saltstayz.com</a>
                                </div>
                            </Col>
                            <Col md={12}>
                                <p className="py-5 text-center">For assistance with bookings, cancellation, etc. mail us on book@staybloom.com</p>
                            </Col>
                        </Row>

                        <h1>Contact a Hotel</h1>
                        <p className="ps-5">Have a specific question? Contact the reception & ask away.</p>

                        <Row className='contact-blogs'>
                            {blogColumns.map((column, colIndex) => (
                                <Col key={colIndex} lg={3} xs={6} className="d-flex flex-column mb-30">
                                    {column.map((blog, index) => (
                                        <div key={index} className="blog-card">
                                            <Image
                                                src={blog.image}
                                                alt={blog.title}
                                                width={400}
                                                height={250}
                                                className="card-img-top"
                                            />
                                            <h5>{blog.title}</h5>
                                        </div>
                                    ))}
                                </Col>
                            ))}
                        </Row>
                        <h1>Other Enquiries</h1>
                        <Row className='other-enquiries align-items-center'>
                        <div className="leftside-vector">
                            <img src="/index/vec-lines.svg" alt="" className="vec-lines" />
                        </div>
                            <Col lg={9}>
                                <Row>
                                    <Col md={6}>
                                        <div className="enquiry-card">
                                            <img src="/index/calendar-icon.svg" alt="" />
                                            <p>Reservations</p>
                                            <a href="mailto:book@saltstayz.com" className='text-gray'>book@saltstayz.com</a>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="enquiry-card">
                                            <img src="/index/marketing-icon.svg" alt="" />
                                            <p>Marketing</p>
                                            <a href="mailto:marketing@saltstayz.com" className='text-gray'>marketing@saltstayz.com</a>
                                         </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="enquiry-card">
                                            <img src="/index/career-icon.svg" alt="" />
                                            <p>Careers</p>
                                            <a href="mailto:careers@saltstayz.com" className='text-gray'>careers@saltstayz.com</a>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                    <div className="enquiry-card">
                                        <img src="/index/corporate-icon.svg" alt="" />
                                        <p>Corporate Sales</p>
                                        <a href="mailto:sales@saltstayz.com" className='text-gray'>sales@saltstayz.com</a>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={3}>
                                <Col md={12}>
                                <div className="enquiry-card">
                                    <img src="/index/press-icon.svg" alt="" />
                                    <p>Press & Media</p>
                                    <a href="mailto:press@saltstayz.com" className='text-gray'>press@saltstayz.com</a>
                                    </div>
                                </Col>
                            </Col>
                        </Row>
                    </div>

                </Container>
                <InstagramSection/>
            </div>
        </>
    );
};

export default ContactUs;

