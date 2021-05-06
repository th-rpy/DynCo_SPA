import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';

class Counter extends Component{
    
    render(){
        return(
            <AUX>
             <section className="section bg-custom">
                <div className="container">
                    <div className="row justify-content-center" id="counter">
                        <div className="col-md-3 text-white text-center pt-3 pb-3">
                            <div className="counter-icon">
                                <i className="mdi mdi-timer"></i>
                            </div>
                            <h1 className="counter-value" data-count="1200">0</h1>
                            <h5 className="counter-name">Working Hours</h5>
                        </div>

                        <div className="col-md-3 text-white text-center pt-3 pb-3">
                            <div className="counter-icon">
                                <i className="mdi mdi-briefcase"></i>
                            </div>
                            <h1 className="counter-value" data-count="4900">10</h1>
                            <h5 className="counter-name">Completed Projects</h5>
                        </div>

                        <div className="col-md-3 text-white text-center pt-3 pb-3">
                            <div className="counter-icon">
                                <i className="mdi mdi-account"></i>
                            </div>
                            <h1 className="counter-value" data-count="5645">608</h1>
                            <h5 className="counter-name">No. of Clients</h5>
                        </div>
                        <div className="col-md-3 text-white text-center pt-3 pb-3"> 
                            <div className="counter-icon">
                                <i className="mdi mdi-account-multiple"></i>
                            </div>                       
                            <h1 className="counter-value" data-count="800">2</h1>
                            <h5 className="counter-name">team Member</h5>
                        </div>
                    </div>
                </div>
           </section>
           </AUX>
        );
    }
}

export default Counter;   