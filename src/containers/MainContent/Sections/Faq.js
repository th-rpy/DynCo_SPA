import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';

class Faq extends Component{
    
    render(){
        return(
            <AUX>
                <section className="section bg-light" id="faq">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="text-center">
                                    <div className="title-icon">
                                        <i className="mdi mdi-comment-question-outline"></i>
                                    </div>
                                    <h3 className="section-title pt-5">Frequently Asked Questions</h3>
                                    <p className="section-subtitle pt-3 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center mt-5">
                            <div className="col-lg-6 faq-side"> 
                                <div className="faq pt-5">
                                    <p className="text-uppercase user-title mb-1">for user</p>
                                    <div className="faq-ans">
                                        <h3 className="faq-title"><i className="mdi mdi-help-circle"></i> What is Lorem Ipsum?</h3>
                                        <p className="faq-sub-title text-muted pt-2">You want customer to your store. Easily publish your coupans and when a user has manage to catch one of your coupens, the coupens will be deducted from your coupens account at Clooger.</p>
                                    </div>
                                </div> 
                                <div className="faq pt-5">
                                    <p className="text-uppercase user-title mb-1 mb-1">for user</p>
                                    <div className="faq-ans">
                                        <h3 className="faq-title"><i className="mdi mdi-help-circle"></i> Why use Lorem Ipsum?</h3>
                                        <p className="faq-sub-title text-muted pt-2">You want customer to your store. Easily publish your coupans and when a user has manage to catch one of your coupens, the coupens will be deducted from your coupens account at Clooger.</p>
                                    </div>
                                </div>
                                <div className="faq pt-5">
                                    <p className="text-uppercase user-title mb-1">for user</p>
                                    <div className="faq-ans">
                                        <h3 className="faq-title"><i className="mdi mdi-help-circle"></i> How many variations exist?</h3>
                                        <p className="faq-sub-title text-muted pt-2">You want customer to your store. Easily publish your coupans and when a user has manage to catch one of your coupens, the coupens will be deducted from your coupens account at Clooger.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 faq-side "> 
                                <div className="faq pt-5">
                                    <p className="text-uppercase user-title mb-1">for advertiser</p>
                                    <div className="faq-ans">
                                        <h3 className="faq-title"><i className="mdi mdi-help-circle"></i> What is Lorem Ipsum?</h3>
                                        <p className="faq-sub-title text-muted pt-2">You want customer to your store. Easily publish your coupans and when a user has manage to catch one of your coupens, the coupens will be deducted from your coupens account at Clooger.</p>
                                    </div>
                                </div> 
                                <div className="faq pt-5">
                                    <p className="text-uppercase user-title mb-1">for advertiser</p>
                                    <div className="faq-ans">
                                        <h3 className="faq-title"><i className="mdi mdi-help-circle"></i> Is safe use Lorem Ipsum?</h3>
                                        <p className="faq-sub-title text-muted pt-2">You want customer to your store. Easily publish your coupans and when a user has manage to catch one of your coupens, the coupens will be deducted from your coupens account at Clooger.</p>
                                    </div>
                                </div>
                                <div className="faq pt-5">
                                    <p className="text-uppercase user-title mb-1">for advertiser</p>
                                    <div className="faq-ans">
                                        <h3 className="faq-title"><i className="mdi mdi-help-circle"></i> When can be used?</h3>
                                        <p className="faq-sub-title text-muted pt-2">You want customer to your store. Easily publish your coupans and when a user has manage to catch one of your coupens, the coupens will be deducted from your coupens account at Clooger.</p>
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

export default Faq;   