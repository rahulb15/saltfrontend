'use client';
import React, { useState } from 'react';
import Slider from 'react-slick';
import { Container, Row, Col, Modal, ModalBody, ModalHeader } from 'reactstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
    '/index/gallery-img3.jpg',
    '/index/gallery-img2.jpg',
    '/index/gallery-img1.jpg',
];

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
};

const HotelRoomGallery = () => {
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [showModal, setShowModal] = useState(false);

    const handleImageClick = (image: string) => {
        setSelectedImage(image);
        setShowModal(true);
    };

    return (
        <>
            <div className="hotel-room-gallery">
                <Container>

                    <div className="room-gallery" >
                        <Slider {...settings}>
                            {images.map((image, index) => (
                                <Row className='align-items-center' key={index}>
                                    <Col lg={12} className='pe-0'>
                                        <div className="gallery-img">
                                            <Row>
                                                <Col xs={8}>
                                                    <div className='position-relative h-100'>
                                                        <div className="badge">P R E M I E R</div>
                                                        <img src={selectedImage} alt="Selected" className="selected-img" />
                                                    </div>
                                                </Col>
                                                <Col xs={4}>
                                                    <div className="d-flex justify-content-center gap-2 flex-column">
                                                        {images.map((img, idx) => (
                                                            <img
                                                                key={idx}
                                                                src={img}
                                                                alt={`Thumbnail ${idx + 1}`}
                                                                className="img-thumbnail"
                                                                onClick={() => handleImageClick(img)}
                                                            />
                                                        ))}
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Modal isOpen={showModal} toggle={() => setShowModal(false)} centered>
                                                <ModalHeader toggle={() => setShowModal(false)} />
                                                <ModalBody className="text-center">
                                                    <img src={selectedImage} alt="Popup" className="img-fluid" />
                                                </ModalBody>
                                            </Modal>
                                        </div>
                                    </Col>
                                </Row>
                            ))}
                        </Slider>
                    </div>

                </Container>
            </div>
        </>
    );
};

export default HotelRoomGallery;