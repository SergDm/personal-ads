import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './data/reduxStore'
import MainContainer from './components/Main/MainContainer'
import Header from './components/Header/Header'
import Admin from './components/Admin/Admin'
import Login from './components/Login/Login'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store} >
        <div className='app-wrapper'>
          <Header />
          <Switch>
            <Route exact path='/' render={() => <MainContainer />} />
            <Route exact path='/profile' render={() => <Admin />} />
            <Route exact path='/login' render={() => <Login />} />
          </Switch>
          <Footer />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
