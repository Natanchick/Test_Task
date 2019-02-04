import React, { Component } from 'react';
import AppRouter from './AppRouter';
import { BrowserRouter } from 'react-router-dom';
import '../styles/app.scss';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <AppRouter />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
