import React from 'react';

function Footer(props) {
    return (
        <div className="footer bg-secondary text-white">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h5>Nosso endereço</h5>
                        <address>
                            Ceilândia Sul - Próximo ao extra <br />
                            <i className="fa fa-phone fa-lg"></i>: 61 1234 5678<br />
                            <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:sallondibelle@gmail.com">
                                sallondibelle@gmail.com</a>
                        </address>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>© Copyright 2021 Sallon Di Belle</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;