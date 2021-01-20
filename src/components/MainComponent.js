import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Services from './ServicesComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { SERVICES } from '../shared/services';
class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            services: SERVICES
        }
    }


    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={() => <Home />} />
                    <Route path='/aboutus' component={() => <About />} />
                    <Route exact path='/services' component={() => <Services services={this.state.services} />} />
                    <Redirect to="/home" />
                </Switch>

                <Footer />
            </div>
        );
    }
}

export default Main;