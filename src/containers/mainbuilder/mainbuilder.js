import React , { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import HomeOne from '../MainContent/Pages/HomeOne';
import HomeTwo from '../MainContent/Pages/HomeTwo';
import HomeThree from '../MainContent/Pages/HomeThree';
import HomeFour from '../MainContent/Pages/HomeFour';
import HomeFive from '../MainContent/Pages/HomeFive';
import HomeSix from '../MainContent/Pages/HomeSix';
import HomeSeven from '../MainContent/Pages/HomeSeven';
import HomeEight from '../MainContent/Pages/HomeEight';
import HomeNine from '../MainContent/Pages/HomeNine';
import HomeTen from '../MainContent/Pages/HomeTen';
import Login from '../MainContent/Pages/Login';
import PasswordForget from '../MainContent/Pages/PasswordForget';
import SignUp from '../MainContent/Pages/SignUp';

class mainbuilder extends Component{
    render(){
        return(
                <Switch>  
                    
                    <Route exact path="/" component={HomeTwo} />
                    <Route exact path="/index_1" component={HomeOne} />
                    <Route exact path="/index_2" component={HomeTwo} />
                    <Route exact path="/index_3" component={HomeThree} />
                    <Route exact path="/index_4" component={HomeFour} />
                    <Route exact path="/index_5" component={HomeFive} />
                    <Route exact path="/index_6" component={HomeSix} />
                    <Route exact path="/index_7" component={HomeSeven} />
                    <Route exact path="/index_8" component={HomeEight} />
                    <Route exact path="/index_9" component={HomeNine} />
                    <Route exact path="/index_10" component={HomeTen} />

                    <Route path={`${process.env.PUBLIC_URL}/login`} component={Login} />
                    <Route path={`${process.env.PUBLIC_URL}/password_forget`} component={PasswordForget} />
                    <Route path={`${process.env.PUBLIC_URL}/signup`} component={SignUp} /> 
                   
                </Switch>
        );
    }
}

export default mainbuilder;