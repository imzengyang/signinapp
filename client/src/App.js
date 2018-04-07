import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import SingleInComponent from './singleIn';
import AllSignInComponent from './allSignIn';
class App extends React.Component{
  render(){
    return(<Router>
      <div>
        <Route exact path="/" component={SingleInComponent} />
        <Route path="/allsignin" component={AllSignInComponent} />
        
      </div>
    </Router>)
  }
}

export default App;
