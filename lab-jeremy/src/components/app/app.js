import '../../style/main.scss';
import React from 'react';
import {Provider} from 'react-redux';
import createStore from '../../lib/store';
import Dashboard from '../dashboard/dashboard';
import UIChallenge from '../../../ui-challenge/ui-challenge';
import {BrowserRouter, Route} from 'react-router-dom';

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
              <Route exact path="/ui" component={UIChallenge}/>
            </div>
          </BrowserRouter>
        </Provider>
      </main>
    );
  }
}

export default App;
