import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';

class Contact extends Component{


    
    render(){
        return(
            <AUX>
                <section className="pt-5 bg-dark" id="contact">
                    <div className="container">
                        <div className="row justify-content-center pt-5">
                            <div className="col-md-8">
                                <div className="text-center">
                                    <div className="title-icon">
                                        <i className="mdi mdi-lock-open-outline"></i>
                                    </div>
                                    <h3 className="section-title text-white pt-5">Contact us</h3>
                                    <p className="section-subtitle pt-3 text-whte">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="row mt-5">
                                    <div className="col-lg-4">
                                        <div className="single-contact text-center text-white"> 
                                            <i className="mdi mdi-cellphone"></i>
                                            <h4>Phone</h4>
                                            <p>000-111-222 333</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="single-contact text-center text-white"> 
                                            <i className="mdi mdi-map-marker"></i>
                                            <h4>Address</h4>
                                            <p>011, Williams Lane USA</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="single-contact text-center text-white"> 
                                            <i className="mdi mdi-email-outline"></i>
                                            <h4>Email</h4>
                                            <p>info@example.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center mt-5">
                            <div className="col-lg-8 bg-white p-5 mt-4 rounded">
                                <div className="custom-form">
                                    <div id="message"></div>
                                    <form method="post"  name="contact-form" id="contact-form">
                                        <div className="row">
                                            <div className="col-lg-6 mt-3">
                                                <input type="text" id="name" className="form-control" placeholder="First name" /> 
                                            </div>
                                            <div className="col-lg-6 mt-3">
                                                <input type="text" id="email" className="form-control" value={this.state.email} onChange={this.handleChangeEmail} id="exampleInputEmail1" placeholder="Enter email" />
                                                <span id="err">{this.state.email_err}</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12 mt-3">
                                                <input type="text" id="subject" value={this.state.name} onChange={this.handleChangeName} className="form-control" id="subject" placeholder="Your Subject.." />
                                                <span id="err">{this.state.name_err}</span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12 mt-3">
                                                <textarea name="comments" id="comments" value={this.state.subject} onChange={this.handleChangeSubject} rows="6" className="form-control" placeholder="Your message..."></textarea>
                                                <span id="err">{this.state.subject_err}</span>
                                            </div>
                                        </div>
                                        <div className="mt-4 text-center">
                                            <input type="button" id="submit" name="send" onClick={this.handleSubmit1} className="submitBnt btn btn-custom" value="Submit" /> 
                                            <div id="simple-msg"></div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="col-md-8">
                                                <p className="text-center submit-terms mb-0 mt-3">Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5 pt-5 pb-2">
                            <div className="col-md-12">
                                <div className="text-white footer-alt">
                                    <div className="float-left">
                                        <p className="copyright-desc pb-0">{(new Date().getFullYear())} © Steix. All Rights Reserved</p>
                                    </div>
                                    <div className="float-right">
                                        <ul className="list-inline social pb-0">
                                            <li className="list-inline-item pl-2"><Link to="#" className="text-white"><i className="mdi mdi-facebook"></i></Link></li>
                                            <li className="list-inline-item pl-2"><Link to="#" className="text-white"><i className="mdi mdi-twitter"></i></Link></li>
                                            <li className="list-inline-item pl-2"><Link to="#" className="text-white"><i className="mdi mdi-instagram"></i></Link></li>
                                        </ul>
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

export default Contact;   