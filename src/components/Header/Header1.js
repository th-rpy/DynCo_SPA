import React, {Component} from 'react';
import AUX from '../../hoc/Aux_';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class Header1 extends Component{

    componentDidMount() {
        $('.navbar-toggle').on('click', function(event) {
            $(this).toggleClass('open');
            $('#navigation').slideToggle(400);
        });
        
        $('.navigation-menu>li').slice(-2).addClass('last-elements');
        
        $('.menu-arrow,.submenu-arrow').on('click', function(e) {
            if ($(window).width() < 992) {
                e.preventDefault();
                $(this).parent('li').toggleClass('open').find('.submenu:first').toggleClass('open');
            }
        });
    }

    
    render(){
        return(
            <AUX>
        <header id="topnav" className="defaultscroll sticky fixed-top">
        <div className="container">
        <div>
            <Link to="index_1" className="logo">
                Steix
            </Link>
        </div>
        <div className="menu-extras">
            <div className="menu-item">
                <Link to="#" className="navbar-toggle">
                    <div className="lines">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </Link>
            </div>
        </div>

        <div id="navigation">
            <ul className="navigation-menu ">
                <li className="has-submenu active">
                    <Link to="#home">Home</Link>
                    <span className="menu-arrow"></span>
                    <ul className="submenu">
                        <li>
                            <Link to="index_1">Home Default</Link>
                        </li>
                        <li>
                            <Link to="index_2">Home Text-Typed</Link>
                        </li>
                        <li>
                            <Link to="index_3">Home Text-Rotate </Link>
                        </li>
                        <li>
                            <Link to="index_4">Home Image</Link>
                        </li>
                        <li>
                            <Link to="index_5">Home Video</Link>
                        </li>
                        <li>
                            <Link to="index_6">Home Half-Screen</Link>
                        </li>
                        <li>
                            <Link to="index_7">Home Slider</Link>
                        </li>
                        <li>
                            <Link to="index_8">Home Animate</Link>
                        </li>                                
                        <li>
                            <Link to="index_9">Home Lightbar</Link>
                        </li>                                  
                        <li>
                            <Link to="index_10">Home Animation</Link>
                        </li>
                    </ul>
                </li>

                <li className="has-submenu ">
                    <a href="#features">Features</a>
                </li>

                <li className="has-submenu">
                    <a href="#services">Services</a>
                </li>

                <li className="has-submenu">
                    <a href="#pricing">Pricing</a>
                </li>

                <li className="has-submenu">
                    <a href="#client">Client</a>
                </li>

                <li className="has-submenu">
                    <a href="#faq">FAQ</a>
                </li>

                <li className="has-submenu">
                    <a href="#contact">Contact</a>
                </li>
                <li className="has-submenu mobile-block">
                    <Link to="login">Log in</Link>
                </li>

                <li className="has-submenu mobile-block">
                    <Link to="signup">Try It Free</Link>
                </li>
            </ul>
            <ul className="navigation-menu menu-right">
                <li className="mobile-none">
                    <Link to="login">Log in</Link>
                </li>
                <li className="mobile-none">
                    <Link to="signup">Try It Free</Link>
                </li>
            </ul>
        </div>
    </div>
</header>
            </AUX>
        );
    }
}

export default Header1;   