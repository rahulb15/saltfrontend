import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const HomeAmenities = () => {
    return (
        <>
            <div className="homeAmenities">
                <div className="text-content">
                    <div className="left-side">
                        <div className="div">
                        <h2>Hotel Amenities</h2>
                        </div>
                        <img src="/index/bulb-heading.png" alt="" className="bulb"/>
                        <img src="/index/straightline.png" alt="" className="bottom-line"/>
                    </div>
                </div>

                <ul>
                    <li>
                        <div className="amenties-bg">
                            <img src="/index/knife.svg" alt=""  />
                        </div>
                        <p>Buffet Breakfast with
                        Healthy Options </p>
                    </li>
                    <li>
                        <div className="amenties-bg">
                            <img src="/index/coffee.svg" alt=""  />
                        </div>
                        <p>Complimentary coffee station with snacks </p>
                    </li>
                    <li>
                        <div className="amenties-bg">
                        <img src="/index/location.svg" alt=""/>
                        </div>
                        <p>Located at PrimeBusiness Hubs</p>
                    </li>
                    <li>
                        <div className="amenties-bg">
                        <img src="/index/gym.png" alt=""  />
                        </div>
                        <p>Gym </p>
                    </li>
                    <li>
                        <div className="amenties-bg">
                        <img src="/index/brush.svg" alt=""  />
                        </div>
                        <p>Premium Toiletries</p>
                    </li>
                    <li>
                        <div className="amenties-bg">
                        <img src="/index/inchtape.svg" alt=""/>
                        </div>
                        <p>Large Size Room</p>
                    </li>
                </ul>
          
            </div>
          
        </>
    );
};

export default HomeAmenities;