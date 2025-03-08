import React from "react";
import { Container, Row, Col } from "reactstrap";

const AboutDetails = () => {
  return (
    <>
      <div className="about-details">
        <Container>
          <h1>Discover Contemporary<br/>
          Comfort with Saltstayz</h1>
          <p><strong>Saltstayz</strong> blends a unique urban boutique experience with versatile event spaces, offering 10 venues for 50-250 guests, ideal for events, functions, and weddings. With affordable, quality accommodations in the mid-to-premium range, we cater to both business and leisure travelers.</p>
          <img src="/index/hotel-about.png"  alt=""  className="mb-40 hotelimg"/>
          <div className="rightside-vector"><img src="/index/vec-lines.svg" alt="" className="vec-lines"/></div>
          <Row>
            <Col md={8}>
            <p>Saltstayz is a boutique hotel chain offering modern design and comfort in vibrant urban settings, ideal for both business and leisure travelers. With versatile event spaces for social, corporate, and wedding functions, it has built a strong presence in the Delhi NCR market, providing mid-to- premium accommodations without compromising on quality.</p>
            <h1>Our Story</h1>
            <p>While just about an year ago, Saltstayz opened its first hotel in Gurgaon, today Saltstayz offers more than 300 keys across properties and 10 best-in-class event spaces to accommodate between 50 to 250 guests. Saltstayz was born out of the necessity to provide reliable and accessible accommodation options to travelers of all sorts without burning a hole in their pocket.</p>
            </Col>
            <Col md={4}>
            <img src="/index/hotel-owner.png" alt=""  />

            </Col>
          </Row>
          <Row className="my-5">
            <Col md={6}>
            <h4>Partner with a Hospitality Leader</h4>
            <p>At Salt Stayz Hotel, we redefine hospitality with an unwavering commitment to quality, transparency, and efficiency. Partner with us and experience excellence in the mid-market hotel segment.</p>
            </Col>
            <Col md={6}>
            <h4>Commitment to Excellence</h4>
            <p>We believe in being the best, not the biggest. That’s why we meticulously select the right partners who align with our vision for excellence.</p>
            </Col>
            <Col md={6}>
            <h4>Clarity & Trust</h4>
            <p>The hospitality industry can be complex, but we keep things simple and straightforward. Our approach ensures clarity and trust in every business transaction.</p>
            </Col>
            <Col md={6}>
            <h4>Speed & Efficiency</h4>
            <p>With our world-class Design & Project team, we build, convert, and launch hotels faster than any other brand, ensuring minimal downtime and maximum efficiency.</p>
            </Col>

            <Col md={6}>
            <h4>Smart Investment</h4>
            <p>Unlike many global brands, we make your investment go further by prioritizing local sourcing and procurement, maximizing value without compromising quality.</p>
            </Col>

            <Col md={6}>
            <h4>Maximized Returns</h4>
            <p>We drive industry-leading occupancy rates and revenue, boasting some of the highest repeat guest percentages across all our properties.</p>
            </Col>

            <Col md={12}>
                <p className="text-center my-5">Join Salt Stayz Hotel and elevate your hospitality experience. Let's build success, together.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AboutDetails;

