import React from 'react';
import { Provider } from 'react-redux';
import createStore from '../lib/store';
import Dashboard from './dashboard/dashboard';
import { BrowserRouter, Route } from 'react-router-dom';

const store = createStore();

class App extends React.Component {
  render() {
    return (
      <main className='application'>
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <header>
                <div className='container'>
                  <img className='logo' src='../../assets/logo.png' alt='logo' />
                  <nav>
                    <ul>
                      <li><a href='/'>Home</a></li>
                      <li><a href='/'>Dashboard</a></li>
                      <li><a href='/'>CustomCSS</a></li>
                    </ul>
                  </nav>
                </div>
              </header>
              <Route exact path='/' component={Dashboard} />
            </div>
          </BrowserRouter>
        </Provider>
      </main>
    );
  }
}

// color: #7AC795
// color green light: #F2FFF7
export default App;
