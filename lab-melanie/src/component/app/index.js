import React from 'react';
import {Provider} from 'react-redux';
import createStore from '../../lib/store';
import Dashboard from '../dashboard/index';
import UIChallenge from '../ui-challenge/ui-challenge';
import {BrowserRouter, Route, Link} from 'react-router-dom';

const store = createStore();

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <header>
                <nav>
                  <ul>
                    <li><Link to='/'>Dashboard</Link></li>
                    <li><Link to='/ui'>UI Challenge</Link></li>
                  </ul>
                </nav>
              </header>
              <main className="main-content">
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/ui" component={UIChallenge} />
              </main>
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
