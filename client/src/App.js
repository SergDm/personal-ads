import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Admin from './components/Admin/Admin'
import Login from './components/Login/Login'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Navbar />
        <Header />
        <Switch>
          <Route exact path='/' render={() => <Main />} />
          <Route exact path='/profile' render={() => <Admin />} />
          <Route exact path='/login' render={() => <Login />} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
