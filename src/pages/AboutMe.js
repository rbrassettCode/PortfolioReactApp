import React from "react";
import './../Stylesheet.css';
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { Card, Carousel, Col, Container, Row, Image } from "react-bootstrap";
import hikingSrc from '../images/camping-pic.jpg';
import snowShooingSrc from '../images/snowshoeing-pic.jpg';
import cottageSrc from '../images/cottage-pic.jpg';
import climbingSrc from '../images/banff-pic.jpg';


function AboutMe() {
    return (
        <Container>
            <Row >
                <Col className="col-1" />
                <Col sm={10}>
                    <h2>About me</h2>
                    <p>Hello World, I am a Carleton graduate who has a passion for software. It all started in my second year of University 
                    where I aced my first class creating a chess game using Java and Swing. Once my studies finished and I got my degree, 
                    I moved on to the professional world working for Ribbon. This is where I learned how to develop using Java Spring Boot. I've evolved from a coop 
                    student who had no idea what coding was to a leading team member, known for taking charge in meetings and getting the job done. Outside of coding, 
                    I frequently can be found outside walking my dog Lola, rockclimbing or at a disc golf course trying my best to get some birdies. 
                    My dream in life is to work at a major software company such as Amazon, Google or Microsoft and I am prepared to put in the work. I hope you enjoy my 
                    portfolio and please feel free to reach out to me about any questions you may have.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>My skills</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="coding-container" style={{display: "center"}}>
                    <div className="coding-card">
                        <DiJavascript1 />
                    </div>
                    <div className="coding-card">
                        <DiJava />
                    </div>
                    <div className="coding-card">
                        <DiPython />
                    </div>
                    <div className="coding-card">
                        <SiPostgresql />
                    </div>
                    <div className="coding-card">
                        <DiGit />
                    </div>
                    <div className="coding-card">
                        <DiReact />
                    </div>
                    <div className="coding-card">
                        <DiNodejs />
                    </div>
                    <div className="coding-card">
                        <TbBrandGolang />
                    </div>
                    <div className="coding-card">
                        <CgCPlusPlus />
                    </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <h2>My Adventures</h2>
            </Row>
            <Row>
                <Col lg={6} className="col-12 mx-auto">
                    <Carousel fade interval={10000}>
                        <Carousel.Item>
                            <Image fluid rounded src={hikingSrc} alt="hiking-mont-tremblant" />
                            <Carousel.Caption>
                                <h3>Hiking in Mont Tremblant Quebec</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image fluid rounded src={snowShooingSrc} alt="snowshoeing-ottawa-river" />
                            <Carousel.Caption>
                                <h3>Snow Shoeing on the Ottawa River</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image fluid rounded src={cottageSrc} alt="cottage-lake" />
                            <Carousel.Caption>
                                <h3>Enjoying the lake with Lola</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image fluid rounded src={climbingSrc} alt="hiking-banff" />
                            <Carousel.Caption>
                                <h3>Climbing mountains in Banff Alberta</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutMe;