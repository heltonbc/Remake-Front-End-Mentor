import React from "react";
import "../App.scss";
import Carousel from "react-bootstrap/Carousel";
import "./Home.scss";

function Home() {
    return (
        <Carousel variant="dark" className="p-3">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/mflwrbyf8kjvqvpxq9uj.jpg"
                    alt="First slide"
                />
                <Carousel.Caption className="text mb-lg-5">
                    <h3>Challenges for Beginners</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/cfr9ssywcgjpcg7or928.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption className="text mb-lg-5">
                    <h3>Challenges for intermediaries</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/hfqgixemrcybrmoomqsz.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption className="text mb-lg-5">
                    <h3>Challenges for advanced</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Home;
