import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';

class Pricing extends Component{
    
    render(){
        return(
            <AUX>
                <section className="section bg-light" id="pricing">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="text-center">
                                    <div className="title-icon">
                                        <i className="mdi mdi-note-multiple-outline"></i>
                                    </div>
                                    <h3 className="section-title pt-5">Our Pricing</h3>
                                    <p className="section-subtitle pt-3 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-4">
                                <div className="price-box p-5 bg-white text-center mt-4">
                                    <div className="plan-price">
                                        <h2><sup>$</sup>00</h2>
                                    </div>
                                    <div className="plan-name mt-4">
                                        <h6>Free</h6>
                                    </div>
                                    <div className="plan-desc mt-4">
                                        <p className="mb-0 text-muted">Basic version with unique design & strong sound quality.</p>
                                    </div>
                                    <div className="mt-5">
                                        <Link to="#" className="btn btn-custom btn-rounded">Sign Up</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="price-box p-5 bg-white text-center mt-1">
                                    <div className="plan-lable">
                                        <p className="mb-3 text-uppercase">Popular</p>
                                    </div>
                                    <div className="plan-price">
                                        <h2><sup>$</sup>190</h2>
                                    </div>
                                    <div className="plan-name mt-4">
                                        <h6>Deluxe</h6>
                                    </div>
                                    <div className="plan-desc mt-4">
                                        <p className="mb-0 text-muted">Basic version with unique design & strong sound quality.</p>
                                    </div>
                                    <div className="mt-5">
                                        <Link to="#" className="btn btn-custom btn-rounded">Sign Up</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="price-box p-5 bg-white text-center mt-4">
                                    <div className="plan-price">
                                        <h2><sup>$</sup>290</h2>
                                    </div>
                                    <div className="plan-name mt-4">
                                        <h6>Ultimate</h6>
                                    </div>
                                    <div className="plan-desc mt-4">
                                        <p className="mb-0 text-muted">Basic version with unique design & strong sound quality.</p>
                                    </div>
                                    <div className="mt-5">
                                        <Link to="#" className="btn btn-custom btn-rounded">Sign Up</Link>
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

export default Pricing;   