import React from 'react';
import { STATICS } from '../shared//statics';
import { FadeTransform } from 'react-animation-components';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderCard({ item }) {
    return (
        <div className="col-4 mb-4">
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <CardImg src={item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle>{item.name} <span class="badge badge-secondary">{item.type}</span></CardTitle>
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        </div>

    );

}
function Home(props) {
    const statics = STATICS.map((estatico) => {
        return (
            <RenderCard item={estatico} />
        );
    });
    return (
        <div className="container">
            <div class="row">
                {statics}
            </div>
        </div>
    );
}

export default Home;   