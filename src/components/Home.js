import React from "react";
import "../App.scss";
import "./Home.scss";
import home from "./folder-projects/home.jpg";
import { Button, Card, CardGroup, Col, Row } from "react-bootstrap";
import { GoMarkGithub } from "react-icons/go";

function Home() {
    return (
        <CardGroup>
            <Row className="m-5">
                <Col xs={12} lg={6}>
                    <Card className="home-card1">
                        <Card.Body>
                            <Card.Title className="home-title">
                                Improve your front-end coding skills by building real
                                projects
                            </Card.Title>
                            <Card.Text className="home-text">
                                Solve real-world HTML, CSS and JavaScript challenges
                                whilst working to professional designs. Join 423.453
                                developers building projects, reviewing code, and helping
                                each other get better.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Button className="btn-home" size="sm">
                        Login with GitHub
                        <GoMarkGithub className="m-1" size={20} color="#FFF" />
                    </Button>
                </Col>
                <Col xs={12} lg={6}>
                    <Card className="m-2">
                        <Card.Img variant="top" src={home} />
                    </Card>
                </Col>
            </Row>
        </CardGroup>
    );
}

export default Home;
