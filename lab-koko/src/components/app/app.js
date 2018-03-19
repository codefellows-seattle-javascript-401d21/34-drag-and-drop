import React from 'react';
import {Provider} from 'react-redux';
import createStore from '../../lib/store';
import Dashboard from '../dashboard/dashboard';
import Challenge from '../ui-challenge/main';
import {BrowserRouter, Route} from 'react-router-dom';

const store = createStore();

class App extends React.Component {
  render() { 
    return (
      <div className='app'>
        <Provider store={store}>
          <BrowserRouter>
            <section>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/challenge" component={Challenge} />
            </section>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}
export default App;