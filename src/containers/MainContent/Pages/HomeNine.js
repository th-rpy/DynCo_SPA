import React , {Component } from 'react';
import Services from '../Sections/Services';
import Features from '../Sections/Features';
import Counter from '../Sections/Counter';
import Pricing from '../Sections/Pricing';
import Client from '../Sections/Client';
import Faq from '../Sections/Faq';
import { Link } from 'react-router-dom';
import AUX from '../../../hoc/Aux_';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/action';
import Modal from "react-responsive-modal";
import Typing from 'react-typing-animation';


class HomeNine extends Component{

    state = {
        open: false
      };
     
      onOpenModal = () => {
        this.setState({ open: true });
      };
    
      onCloseModal = () => {
        this.setState({ open: false });
      };

    componentDidMount() {
        if(this.props.islight === false)
        {
          this.props.UpdateLight();
        }
       }

    render(){

        const { open } = this.state;

        var mystyle1 = {
            opacity : "0.8"
        }
        var modal_style = {
            backgroundColor: "black"
        }

        return(
            <AUX>
                
           <Modal open={open} style={modal_style}  onClose={this.onCloseModal} center>
          <video  width={550} height={230} style={mystyle1} autoPlay  muted loop>
            <source   src="http://www.html5rocks.com/en/tutorials/video/basics/devstories.mp4"   type="video/mp4" />
            </video>
        </Modal>

                <section className="home-bg-color" id="home">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10 text-center text-white">

                            <h1 className="mt-5 pt-5 home-title">
                                            
                                            <Typing speed={50} >
                                                We help startups launch their awesome website
                                                <Typing.Reset count={1} delay={800} />
                                                We are Creative
                                                <Typing.Reset count={1} delay={800} />
                                                We are Modern
                                            </Typing>

                                            </h1>                                <p className="home-subtitle mx-auto pt-2">It is a long established fact that a reader will be of a page when looking at its layout.</p>
                                <div className="mt-5">
                                    <Link to="#" className="btn btn-custom">Free Signup</Link>
                                </div>
                                 <span  onClick={this.onOpenModal} className="pt-4 video-play-icon watch-overview d-inline-block text-white">Watch the overview &nbsp;<i className="mdi mdi-chevron-right"></i></span>
                                 <div className=""> 
                                    <img src="images/macbook.png" alt="" className="img-fluid center-block home-dashboard" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                

            <Features />
            <Counter />
            <Services />
            <Pricing />
            <Client />
            <Faq />
        </AUX>
        );
    }
}



const mapStatetoProps = state => {
    return {
        islight: state.ui_red.islight
    };
}

const mapDispatchtoProps = dispatch => {
    return {
        UpdateLight: () => dispatch({ type: actionTypes.ISLIGHT, value: true })
    };
}

export default connect(mapStatetoProps, mapDispatchtoProps)(HomeNine);
