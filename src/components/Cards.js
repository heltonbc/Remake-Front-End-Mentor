import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Cards.scss";

const Cards = ({ posts }) => (
    <Container>
        <Row xs={1} md={3} className="g-4">
            {posts &&
                posts.map(({ id, image, title, excerpt, action }) => (
                    <Col key={id}>
                        <Card className="mx-auto my-3">
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>{excerpt}</Card.Text>
                                <Button variant="danger">{action}</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
        </Row>
    </Container>
);

export default Cards;
