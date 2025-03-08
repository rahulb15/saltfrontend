'use client';
import React, { useState } from 'react';
import { Container, Row, Col, Modal, ModalBody, ModalHeader } from 'reactstrap';
import Image from "next/image";




const BlogCard = () => {
    const blogColumns = [
        [
            { image: "/index/mohali.jpg", title: "places to visit in Mohali", special: "" },
            { image: "/index/rishikesh.jpg", title: "places to visit in RISHIKESH", special: "Group travelerS SPECIAL" },
            { image: "/index/delhi.jpg", title: "places to visit in delhi ", special: "", position: "top" },
        ],
        [
            { image: "/index/delhi.jpg", title: "places to visit in delhi ", special: "", position: "top" },
            { image: "/index/mohali.jpg", title: "places to visit in Mohali", special: "", position: "top" },
            { image: "/index/rishikesh.jpg", title: "places to visit in RISHIKESH", special: "Group travelerS SPECIAL" },
        ],
        [
            { image: "/index/noida.jpg", title: "places to visit in NOIDA", special: "" },
            { image: "/index/rishikesh.jpg", title: "places to visit in RISHIKESH", special: "Group travelerS SPECIAL" },
            { image: "/index/noida.jpg", title: "places to visit in NOIDA", special: "", position: "top" },
        ],
    ];
    return (
        <>
            <div className="blogCards">
                <Container>
                    <Row className='justify-content-center'>
                            <img src="/index/india-gate.png" alt="" className='indiagate'/>
                    </Row>
                    <Row>
                        {blogColumns.map((column, colIndex) => (
                            <Col key={colIndex} md={4} className="d-flex flex-column gap-5">
                                {column.map((blog, index) => (
                                    <div key={index} className="blog-card">
                                        <Image
                                            src={blog.image}
                                            alt={blog.title}
                                            width={400}
                                            height={250}
                                            className="card-img-top"
                                        />
                                        <h5 className={blog.position}>{blog.title}</h5>
                                        <p className='special-prefrence'>{blog.special}</p>
                                    </div>
                                ))}
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>

        </>
    );
};

export default BlogCard;