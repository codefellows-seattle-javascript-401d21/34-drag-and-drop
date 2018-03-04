import React from 'react';
import {Provider} from 'react-redux';
import createStore from '../lib/store';
import Dashboard from './dashboard/dashboard';
import UI from './ui-challenge/ui';
import {BrowserRouter, Route} from 'react-router-dom';
import combineReducers from '../reducers/index';

const store = createStore();

class App extends React.Component {
  componentDidMount() {
    store.subscribe(() => console.log('__STATE__:', store.getState()));  
  }

  render() {
    return (
      <main className="main-content">
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Route exact path="/" component={Dashboard}/>
              <Route exact path="/ui" component={UI}/>
            </div>
          </BrowserRouter>
        </Provider>
      </main>
    );
  }
}

export default App;