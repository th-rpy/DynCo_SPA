import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';

class Features extends Component{
    
    render(){
        return(
            <AUX>
            <section className="section" id="features">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 text-center">
                            <div className="title-icon">
                                <i className="mdi mdi-note-multiple-outline"></i>
                            </div>
                            <h3 className="section-title pt-5">Our Features</h3>
                            <p className="section-subtitle text-dark pt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="row vertical-content">
                        <div className="col-md-6 pt-4">
                            <img src="images/service-1.png" alt="" className="img-fluid rounded" />
                        </div>
                        <div className="col-md-6">
                            <div className="features-box">
                                <div className="features-icon">
                                    <i className="mdi mdi-eye text-custom"></i>
                                </div>
                                <div className="features-desc">
                                    <h5>Digital Design</h5>
                                    <p className="pt-2">Lorem ipsum dolor sit amet, Ut enim ad minim veniam, nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    <Link to="#" className="text-custom features-more">Read More <i className="mdi mdi-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row vertical-content">
                        <div className="col-md-6">
                            <div className="features-box">
                                <div className="features-icon">
                                    <i className="mdi mdi-chart-bubble text-custom"></i>
                                </div>
                                <div className="features-desc">
                                    <h5>Unlimited Colors</h5>
                                    <p className="pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                    <Link to="#" className="text-custom features-more">Read More <i className="mdi mdi-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 pt-4">
                            <img src="images/service-2.png" alt="" className="img-fluid rounded" />
                        </div>
                    </div>
                    <div className="row vertical-content">
                        <div className="col-md-6 pt-4">
                            <img src="images/service-3.png" alt="" className="img-fluid rounded" />
                        </div>
                        <div className="col-md-6">
                            <div className="features-box">
                                <div className="features-icon">
                                    <i className="mdi mdi-fingerprint text-custom"></i>
                                </div>
                                <div className="features-desc">
                                    <h5>Strategy Solutions</h5>
                                    <p className="pt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit,ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                    <Link to="#" className="text-custom features-more">Read More <i className="mdi mdi-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AUX>
        );
    }
}

export default Features;   