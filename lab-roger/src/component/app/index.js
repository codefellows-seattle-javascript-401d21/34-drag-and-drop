import React from 'react';
import {Provider} from 'react-redux';
import createStore from '../../lib/store';
import Dashboard from '../../component/dashboard';
import UIForm from '../../../ui-challenge/challenge-form/index';
import {BrowserRouter, Route} from 'react-router-dom';

const store = createStore();

class App extends React.Component {
  componentDidMount() {
    store.subscribe(() => console.log('__State__:', store.getState()));
  }

  render() {
    return (
      <main className='main-content'>
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Route exact path ="/" component={Dashboard}/>
              <Route exact path = "/ui" component={UIForm}/>
            </div>
          </BrowserRouter>
        </Provider>
      </main>
    );
  }
}

export default App;