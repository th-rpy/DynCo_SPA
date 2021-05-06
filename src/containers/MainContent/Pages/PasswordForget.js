import React , {Component } from 'react';
import { Link } from 'react-router-dom';
import AUX from '../../../hoc/Aux_';
import * as actionTypes from '../../../store/action';
import { connect } from 'react-redux';

class PasswordForget extends Component{
    componentDidMount() {
        if(this.props.loginpage === false)
        {
          this.props.UpdateLogin();
        }
        window.onpopstate  = (e) => {
          this.props.UpdateLoginAgain();    
        }
       }
    
    render(){
        return(
            <AUX>
                <div className="bg-custom1">
                <section className="">
                    <div className="container-fluid">
                        <div className="col-lg-12">
                            <div className="home-icon">
                                <a href="index_1" onClick={()=>this.props.UpdateLoginAgain()} id="my_icon" className="text-white"><i className="mdi mdi-home"></i></a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-custom section">
                    <div className="login-table">
                        <div className="login-table-cell">
                            <div className="container">
                                <div className="row justify-content-center mt-4">
                                    <div className="col-lg-4">
                                        <div className="text-center">
                                            <h1 className="text-white">Steix</h1>
                                            <p className="text-white-50 text-center">Reset Password</p>
                                        </div>
                                        <div className="bg-white p-4 mt-4 rounded">
                                            <div className="alert alert-custom forgot-pass-txt text-center" role="alert">
                                                Enter your email address and we'll send you an email with instructions to reset your password.
                                            </div>
                                            <form className="login-form" action="index_1"> 
                                                <div className="row">
                                                    <div className="col-lg-12 mt-2">
                                                        <input type="email" className="form-control" placeholder="Email" required="" />
                                                    </div>
                                                    <div className="col-lg-12 mt-4 mb-2">
                                                        <button className="btn btn-custom w-100">Reset your Password</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   </section>
                    </div>
           </AUX>
        );
    }
}



const mapStatetoProps = state => {
    return {
        loginpage: state.ui_red.loginpage
    };
}

const mapDispatchtoProps = dispatch => {
    return {
        UpdateLogin: () => dispatch({ type: actionTypes.LOGINPAGE, value: true }),
        UpdateLoginAgain: () => dispatch({ type: actionTypes.LOGINPAGE, value: false })
    };
}

export default connect(mapStatetoProps, mapDispatchtoProps)(PasswordForget);
