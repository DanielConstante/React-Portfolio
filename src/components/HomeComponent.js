import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';






function RenderCard({ item }) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div id="home" class="wrapper">
                    <div class="typing-demo" id="typingDemo">
                        Daniel Constante Web Developer.
                    </div>
                </div>
                <img id="emoji" src="/assets/images/dc.png" alt="dc emoji" class="img-fluid displayed"/>
                    <div class="text-center">
                        <a href="#about" type="button" role="button" id="welcome" class="btn mb-lg-5">Welcome</a>
                    </div>
            </div>

            </div>
            );
}

            export default Home;