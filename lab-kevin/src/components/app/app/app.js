import React from 'react';
import {Route} from 'react-router-dom';
import {Header, Footer} from '../';
import {Dashboard} from '../../dashboard';
import {UIChallenge} from '../../ui-challenge';
import {Provider} from 'react-redux';
import store from '../../../lib/store.js';

class App extends React.Component{
  
  render(){
    return (
      <div>
        <Header/>
        <Provider store={store}>
          <main>
            <Route exact path='/' component={Dashboard} />
            <Route path='/dashboard' component={Dashboard} />
            <Route exact path='/ui-challenge' component={UIChallenge} />
          </main> 
        </Provider>
        <Footer/> 
      </div>
    );  
  }
}

export default App;

