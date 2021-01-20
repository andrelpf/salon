import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';

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
                        <CardTitle>{item.name} <span class="badge badge-secondary">{item.price}</span></CardTitle>
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        </div>

    );

}

function Services(props) {
    const services = props.services.map((service) => {
        return (
            <RenderCard item={service} />
        );
    });
    return (
        <div className="container">
            <h4>Nossos Serviços</h4>
            <div className="row">
                {services}
            </div>
        </div>
    );
}

export default Services;   