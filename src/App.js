import React, { Component } from 'react';
// import {Switch,Route} from "react-router-dom";
// import logo from './logo.svg';
// import './App.css';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Details from './components/Details';
// import VipContacts from './components/VipContacts';
// import Default from './components/Default';
   import Counterss from './components/counterss'; 
   import Header from './components/Header'; 
   

import 'bootstrap/dist/css/bootstrap.min.css'; 
class App extends Component {
  render() {
    return (
		
      <div> 
	  
		<Header />
		  <h2>INCREMENT THE LIST OF ITEMS TO PURCHASE</h2>
		<Counterss />
	  </div>
        // <React.Fragment>
        //   <Navbar />
        //   <Switch>
        //   <Route exact path="/" component={Home} />
        //     <Route path="/details" component={Details} />
        //     <Route path="/VipContacts" component={VipContacts} />
        //     <Route path="/contacts" component={PhoneBook} />

        //     <Route component={Default} />
        //   </Switch> 
        // </React.Fragment>

    );
  }
}

export default App;
