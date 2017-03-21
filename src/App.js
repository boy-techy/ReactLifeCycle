    import React, { Component } from 'react';
    import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
    import Home from './components/Home'
    import AboutUs from './components/AboutUs'
    import ContactUs from './components/ContactUS'
    import UserDisplay from './components/UserDisplay'

    import './App.css';

    class App extends Component {

        render(){
            return(
              <div>
                  <Router>
                      <div>
                        <div className="header">
                            <ol>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/ContactUs" >ContactUs</Link></li>
                                <li><Link to="/AboutUs">About Us</Link></li>
                                <li><Link to="/user1/2323gg3434" >User1</Link></li>
                                <li><Link to="/user1/8732hg2424" >User2</Link></li>
                            </ol>
                  </div>
                      <div>
                          <Route exact path="/" component={Home}/>
                          <Route path="/ContactUs" component={ContactUs}/>
                          <Route path="/AboutUs" component={AboutUs}/>
                          <Route path="/user1/:id" component={UserDisplay}/>
                      </div>
                      </div>
                  </Router>
              </div>
            );
        }

    }

    export default App;
