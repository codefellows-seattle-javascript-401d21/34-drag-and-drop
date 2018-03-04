import React from 'react';
import createStore from '../../lib/store';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Dashboard from '../dashboard/index';
import CustomForm from '../custom-form/index';


const store = createStore();

class App extends React.Component{
  render(){
    return(
      <main className="app">
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/customform" component={CustomForm} />
            </div>
          </BrowserRouter>
        </Provider>
      </main>
    );
  }
}

export default App;
