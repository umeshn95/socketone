import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import SignUp from './pages/SignUp/SignUp';
import Webdev from './pages/Webdev/Webdev';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';
import Chatbot from './pages/Chatbot/Chatbot';
import SchoolManage from './pages/SchoolManage/SchoolManage';
import About from './pages/About/About';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/webdev' component={Webdev} />
        <Route path='/chatbot' component={Chatbot} />
        <Route path='/schoolmanage' component={SchoolManage} />
        <Route path='/about' component={About} />



      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
