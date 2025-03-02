'use client';
import React from 'react';
import { useState } from 'react';
import { Container, Row, Col, Modal, ModalBody, ModalHeader } from 'reactstrap';
import SearchFilters from './search-filters';
import Link from 'next/link';
const images = [
    '/index/gallery-img1.jpg',
    '/index/gallery-img2.jpg',
    '/index/gallery-img3.jpg',
];

const SearchFiltersResult = () => {
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [showModal, setShowModal] = useState(false);

    const handleImageClick = (image: string) => {
        setSelectedImage(image);
        setShowModal(true);
    };

    return (
        <>
            <div className="search-filter-result">
                <div className="hotel-card">
                    <Row className='align-items-center'>
                        <Col lg md={12} className='pe-0'>
                            <div className="gallery-img">
                                <div className="badge">P R E M I E R</div>
                                <div className="mb-3">
                                    <img src={selectedImage} alt="Selected" className="selected-img"  />
                                </div>
                                <div className="d-flex justify-content-center gap-2">
                                    {images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="img-thumbnail"
                                            onClick={() => handleImageClick(image)}
                                        />
                                    ))}
                                </div>

                                <Modal isOpen={showModal} toggle={() => setShowModal(false)} centered>
                                    <ModalHeader toggle={() => setShowModal(false)} />
                                    <ModalBody className="text-center">
                                        <img src={selectedImage} alt="Popup" className="img-fluid" />
                                    </ModalBody>
                                </Modal>
                            </div>
                        </Col>
                        <Col lg md={9}>
                            <div className="center-div">
                                <h2>Saltstayz Sector 39</h2>
                                <h3>Medicity (Near Medanta Hospital)</h3>
                                <ul>
                                    <li>Couple Friendly</li>
                                    <li>Local ID Accepted</li>
                                    <li>Clean Linen</li>
                                    <li>Friendly Staff</li>
                                    <li>6 Hours Stay </li>
                                    <li>Pay at Hotel</li>
                                </ul>
                                <div className="facilities">
                                    <div className="fac">
                                        <img src="/index/restaurant.png" alt="" />
                                        <p>Resturant </p>
                                    </div>
                                    <div className="fac">
                                        <img src="/index/balcony.png" alt="" />
                                        <p>Balcony </p>
                                    </div>
                                    <div className="fac">
                                        <img src="/index/gym.png" alt="" />
                                        <p>Gym </p>
                                    </div>
                                </div>

                                <div className="more-details">
                                    <div className="fac">
                                        <img src="/index/user.png" alt="" />
                                        <p>2 Guests max </p>
                                    </div>
                                    <div className="fac">
                                        <img src="/index/square-area.png" alt="" />
                                        <p>175 sq. ft. Area </p>
                                    </div>
                                </div>
                                <p className="details">
                                    Near the airport and World Trade Park, rooftop restaurant
                                    with live music, friendly and cooperative staff
                                </p>
                            </div>
                        </Col>

                        <Col md={3}>
                            <div className="rightside ps-md-4">
                                <p className='rating pb-2'> 4.5</p>
                                <img src="/index/makemytrip.png" alt="" width={96} />
                                <h2 className="prev-price pt-3">₹ <span>4,210.4</span></h2>
                                <h2 className="current-price">₹ 3,830 /-</h2>
                                <h2 className="tax mb-5">Incl. taxes</h2>
                                <p className="further-detail">Login to Book Now & Pay Later!</p>
                                <Link href="#" className='bookBtn'>BOOK</Link>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="hotel-card">
                    <Row className='align-items-center'>
                        <Col lg md={12} className='pe-0'>
                            <div className="gallery-img">
                                <div className="badge">P R E M I E R</div>
                                <div className="mb-3">
                                    <img src={selectedImage} alt="Selected" className="selected-img"  />
                                </div>
                                <div className="d-flex justify-content-center gap-2">
                                    {images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="img-thumbnail"
                                            onClick={() => handleImageClick(image)}
                                        />
                                    ))}
                                </div>

                                <Modal isOpen={showModal} toggle={() => setShowModal(false)} centered>
                                    <ModalHeader toggle={() => setShowModal(false)} />
                                    <ModalBody className="text-center">
                                        <img src={selectedImage} alt="Popup" className="img-fluid" />
                                    </ModalBody>
                                </Modal>
                            </div>
                        </Col>
                        <Col lg md={9}>
                            <div className="center-div">
                                <h2>Saltstayz Sector 39</h2>
                                <h3>Medicity (Near Medanta Hospital)</h3>
                                <ul>
                                    <li>Couple Friendly</li>
                                    <li>Local ID Accepted</li>
                                    <li>Clean Linen</li>
                                    <li>Friendly Staff</li>
                                    <li>6 Hours Stay </li>
                                    <li>Pay at Hotel</li>
                                </ul>
                                <div className="facilities">
                                    <div className="fac">
                                        <img src="/index/restaurant.png" alt="" />
                                        <p>Resturant </p>
                                    </div>
                                    <div className="fac">
                                        <img src="/index/balcony.png" alt="" />
                                        <p>Balcony </p>
                                    </div>
                                    <div className="fac">
                                        <img src="/index/gym.png" alt="" />
                                        <p>Gym </p>
                                    </div>
                                </div>

                                <div className="more-details">
                                    <div className="fac">
                                        <img src="/index/user.png" alt="" />
                                        <p>2 Guests max </p>
                                    </div>
                                    <div className="fac">
                                        <img src="/index/square-area.png" alt="" />
                                        <p>175 sq. ft. Area </p>
                                    </div>
                                </div>
                                <p className="details">
                                    Near the airport and World Trade Park, rooftop restaurant
                                    with live music, friendly and cooperative staff
                                </p>
                            </div>
                        </Col>

                        <Col md={3}>
                            <div className="rightside ps-md-4">
                                <p className='rating pb-2'> 4.5</p>
                                <img src="/index/makemytrip.png" alt="" width={96} />
                                <h2 className="prev-price pt-3">₹ <span>4,210.4</span></h2>
                                <h2 className="current-price">₹ 3,830 /-</h2>
                                <h2 className="tax mb-5">Incl. taxes</h2>
                                <p className="further-detail">Login to Book Now & Pay Later!</p>
                                <Link href="#" className='bookBtn'>BOOK</Link>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="hotel-card">
                    <Row className='align-items-center'>
                        <Col lg md={12} className='pe-0'>
                            <div className="gallery-img">
                                <div className="badge">P R E M I E R</div>
                                <div className="mb-3">
                                    <img src={selectedImage} alt="Selected" className="selected-img"  />
                                </div>
                                <div className="d-flex justify-content-center gap-2">
                                    {images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="img-thumbnail"
                                            onClick={() => handleImageClick(image)}
                                        />
                                    ))}
                                </div>

                                <Modal isOpen={showModal} toggle={() => setShowModal(false)} centered>
                                    <ModalHeader toggle={() => setShowModal(false)} />
                                    <ModalBody className="text-center">
                                        <img src={selectedImage} alt="Popup" className="img-fluid" />
                                    </ModalBody>
                                </Modal>
                            </div>
                        </Col>
                        <Col lg md={9}>
                            <div className="center-div">
                                <h2>Saltstayz Sector 39</h2>
                                <h3>Medicity (Near Medanta Hospital)</h3>
                                <ul>
                                    <li>Couple Friendly</li>
                                    <li>Local ID Accepted</li>
                                    <li>Clean Linen</li>
                                    <li>Friendly Staff</li>
                                    <li>6 Hours Stay </li>
                                    <li>Pay at Hotel</li>
                                </ul>
                                <div className="facilities">
                                    <div className="fac">
                                        <img src="/index/restaurant.png" alt="" />
                                        <p>Resturant </p>
                                    </div>
                                    <div className="fac">
                                        <img src="/index/balcony.png" alt="" />
                                        <p>Balcony </p>
                                    </div>
                                    <div className="fac">
                                        <img src="/index/gym.png" alt="" />
                                        <p>Gym </p>
                                    </div>
                                </div>

                                <div className="more-details">
                                    <div className="fac">
                                        <img src="/index/user.png" alt="" />
                                        <p>2 Guests max </p>
                                    </div>
                                    <div className="fac">
                                        <img src="/index/square-area.png" alt="" />
                                        <p>175 sq. ft. Area </p>
                                    </div>
                                </div>
                                <p className="details">
                                    Near the airport and World Trade Park, rooftop restaurant
                                    with live music, friendly and cooperative staff
                                </p>
                            </div>
                        </Col>

                        <Col md={3}>
                            <div className="rightside ps-md-4">
                                <p className='rating pb-2'> 4.5</p>
                                <img src="/index/makemytrip.png" alt="" width={96} />
                                <h2 className="prev-price pt-3">₹ <span>4,210.4</span></h2>
                                <h2 className="current-price">₹ 3,830 /-</h2>
                                <h2 className="tax mb-5">Incl. taxes</h2>
                                <p className="further-detail">Login to Book Now & Pay Later!</p>
                                <Link href="#" className='bookBtn'>BOOK</Link>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="hotel-card">
                    <Row className='align-items-center'>
                        <Col lg md={12} className='pe-0'>
                            <div className="gallery-img">
                                <div className="badge">P R E M I E R</div>
                                <div className="mb-3">
                                    <img src={selectedImage} alt="Selected" className="selected-img"  />
                                </div>
                                <div className="d-flex justify-content-center gap-2">
                                    {images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="img-thumbnail"
                                            onClick={() => handleImageClick(image)}
                                        />
                                    ))}
                                </div>

                                <Modal isOpen={showModal} toggle={() => setShowModal(false)} centered>
                                    <ModalHeader toggle={() => setShowModal(false)} />
                                    <ModalBody className="text-center">
                                        <img src={selectedImage} alt="Popup" className="img-fluid" />
                                    </ModalBody>
                                </Modal>
                            </div>
                        </Col>
                        <Col lg md={9}>
                            <div className="center-div">
                                <h2>Saltstayz Sector 39</h2>
                                <h3>Medicity (Near Medanta Hospital)</h3>
                                <ul>
                                    <li>Couple Friendly</li>
                                    <li>Local ID Accepted</li>
                                    <li>Clean Linen</li>
                                    <li>Friendly Staff</li>
                                    <li>6 Hours Stay </li>
                                    <li>Pay at Hotel</li>
                                </ul>
                                <div className="facilities">
                                    <div className="fac">
                                        <img src="/index/restaurant.png" alt="" />
                                        <p>Resturant </p>
                                    </div>
                                    <div className="fac">
                                        <img src="/index/balcony.png" alt="" />
                                        <p>Balcony </p>
                                    </div>
                                    <div className="fac">
                                        <img src="/index/gym.png" alt="" />
                                        <p>Gym </p>
                                    </div>
                                </div>

                                <div className="more-details">
                                    <div className="fac">
                                        <img src="/index/user.png" alt="" />
                                        <p>2 Guests max </p>
                                    </div>
                                    <div className="fac">
                                        <img src="/index/square-area.png" alt="" />
                                        <p>175 sq. ft. Area </p>
                                    </div>
                                </div>
                                <p className="details">
                                    Near the airport and World Trade Park, rooftop restaurant
                                    with live music, friendly and cooperative staff
                                </p>
                            </div>
                        </Col>

                        <Col md={3}>
                            <div className="rightside ps-md-4">
                                <p className='rating pb-2'> 4.5</p>
                                <img src="/index/makemytrip.png" alt="" width={96} />
                                <h2 className="prev-price pt-3">₹ <span>4,210.4</span></h2>
                                <h2 className="current-price">₹ 3,830 /-</h2>
                                <h2 className="tax mb-5">Incl. taxes</h2>
                                <p className="further-detail">Login to Book Now & Pay Later!</p>
                                <Link href="#" className='bookBtn'>BOOK</Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};


export default SearchFiltersResult;