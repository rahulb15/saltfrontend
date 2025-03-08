'use client';
import React, { useState } from 'react';
import { Container, Row, Col, Modal, ModalBody, ModalHeader } from 'reactstrap';
import BlogCard from './blog-card';

const Blog = () => {

    return (
        <>
            <div className="blog">
                <Container>
                    <div className="text-content header-div blog-header py-4">
                        <div className="left-side">
                            <div className="div">
                                <h2>Blogs</h2>
                                <p className="text-gray">We are your Travel Guide</p>
                            </div>
                            <img src="/index/bulb-heading.png" alt="" className="bulb" />

                            <div className="bottom-div">
                                <img src="/index/straightline.png" alt="" className="bottom-line" />

                            </div>

                        </div>
                    </div>
                </Container>

                <BlogCard/>
            </div>

        </>
    );
};

export default Blog;