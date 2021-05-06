import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';

class Services extends Component{
    
    render(){
        return(
            <AUX>
                <section className="section" id="services">
                    <div className="container">
                        <div className="row justify-content-center pt-5">
                            <div className="col-md-8">
                                <div className="text-center">
                                    <div className="title-icon">
                                        <i className="mdi mdi-all-inclusive text-custom"></i>
                                    </div>
                                    <h3 className="section-title pt-5">Our Services</h3>
                                    <p className="section-subtitle pt-3 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-4">
                                <div className="service-box text-center p-4 mt-3">
                                    <div className="service-icon">
                                        <i className="mdi mdi-cube-outline text-custom"></i>
                                    </div>
                                    <div className="service-desc pt-4">
                                        <h5>Digital Design</h5>
                                        <p className="pt-2 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="service-box text-center p-4 mt-3">
                                    <div className="service-icon">
                                        <i className="mdi mdi-headset text-custom"></i>
                                    </div>
                                    <div className="service-desc pt-4">
                                        <h5>Unlimited Colors</h5>
                                        <p className="pt-2 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="service-box text-center p-4 mt-3">
                                    <div className="service-icon">
                                        <i className="mdi mdi-monitor text-custom"></i>
                                    </div>
                                    <div className="service-desc pt-4">
                                        <h5>Strategy Solutions</h5>
                                        <p className="pt-2 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="service-box text-center p-4 mt-3">
                                    <div className="service-icon">
                                        <i className="mdi mdi-cloud-outline text-custom"></i>
                                    </div>
                                    <div className="service-desc pt-4">
                                        <h5>Awesome Support</h5>
                                        <p className="pt-2 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="service-box text-center p-4 mt-3">
                                    <div className="service-icon">
                                        <i className="mdi mdi-cellphone-android text-custom"></i>
                                    </div>
                                    <div className="service-desc pt-4">
                                        <h5>Truly Multipurpose</h5>
                                        <p className="pt-2 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="service-box text-center p-4 mt-3">
                                    <div className="service-icon">
                                        <i className="mdi mdi-eyedropper text-custom"></i>
                                    </div>
                                    <div className="service-desc pt-4">
                                        <h5>Easy to customize</h5>
                                        <p className="pt-2 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolore magna aliqua.</p>
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

export default Services;   