import React, {Component} from 'react';
import AUX from '../../hoc/Aux_';
import TopBar from '../Topbar/Topbar';
import Header from '../Header/Header';
import HeaderLight from '../Header/HeaderLight';
import TopbarLight from '../Header/TopbarLight';
import Footer from '../Footer/Footer';

class Layout extends Component{
    
    render(){
        return(
            <AUX>
            {this.props.loginpage  ? this.props.children :
                <main>
                {this.props.islight ?  <TopbarLight /> : <TopBar />  }  
                {this.props.islight ?   <HeaderLight />  :  <Header /> }
                {this.props.children}
                <Footer />
                </main>
            }  
            </AUX>
        );
    }
}

export default Layout;   