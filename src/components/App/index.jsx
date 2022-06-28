import React from 'react'
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom'
import Header from '../Header'
import Landing from '../Landing'
import Footer from '../Footer'
import Login from '../Login'
import Welcome from '../welcome'
import Signup from '../signup'
import ForgetPassword from '../forgetPassword'
import Errorpage from '../Errorpage'

import '../../App.css'


function APP() {
    return (
        <Router className="App-container">
            <Header />

            <Switch >
            <Route exact path="/" component={Landing} />
            <Route path="/Welcome" component={Welcome} />
            <Route path="/Login" component={Login} />
            <Route path="/Signup" component={Signup} />
            <Route path="/forgetpassword" component={ForgetPassword} />
            <Route component={Errorpage} />
            </Switch>


            <Footer />

        </Router>
    )
}

export default APP
