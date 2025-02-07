import React from "react";
import { Container, Row, Col} from 'reactstrap';
import CountUp from "react-countup";
import AboutImage from './assets/about-us.png'

import './AboutUs.css';

const AboutUs = () => {
    return (
          <section>
            <Container>
                <Row>
                <Col lg='6' md='6'>
                 <div className="about__img">
                     <img src={AboutImage} className='w-100' alt="" />
                 </div>
              </Col>
                    
                <Col lg='6' md='6'>
                    <div className="about__content">
                        <h2>
"Discover Tech Wonders at Spark electronic Where Innovation Meets You!"</h2>
                        <p>
                       
"Discover easy access and streamlined processes at Spark Electronic We prioritize efficiency over complexity, offering services that seamlessly work across various devices. Welcome to a hassle-free tech experience!"





                        </p>

                        <div className="about__counter">
                            <div className="d-flex gap-5 align-items-center">

                                <div className="single__counter">
                                    <span className="counter">
                                        <CountUp  start={0} end={35} duration={2} suffix='K' />
                                    </span>
                                    <p className="counter__title">
                                    Customers
                                    </p>
                                </div>

                                <div className="single__counter">
                                    <span className="counter">
                                        <CountUp  start={0} end={16} duration={2} suffix='K' />
                                    </span>
                                    <p className="counter__title">
                                    Dealership
                                    </p>
                                </div>

                            </div>

                            <div className="d-flex gap-5 align-items-center">
                            <div className="single__counter">
                                    <span className="counter">
                                        <CountUp  start={0} end={98} duration={2} suffix='K' />
                                    </span>
                                    <p className="counter__title">
                                       Ideas Raised Funds
                                    </p>
                                </div>

                                <div className="single__counter">
                                    <span className="counter">
                                        <CountUp  start={0} end={7} duration={2} suffix='K' />
                                    </span>
                                    <p className="counter__title">
                                       Categories Served
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>    

                </Row>
            </Container>
          </section>
    )
}

export default AboutUs;