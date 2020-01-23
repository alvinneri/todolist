import React ,{Component} from 'react';
import Dashboard from './components/dashboard';
import About from './components/about';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/navbar'


class App extends Component {
  
  render() { 
    return ( 
      <Router>
      
      {/* <Navbar /> */}

      <Route path= '/'  exact component={Dashboard} />
      <Route path='/about' component={About} />
       </Router>
     );
  }
}
 
export default App;