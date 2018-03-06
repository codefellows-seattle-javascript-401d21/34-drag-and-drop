import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import UiBuildForm from '../ui-build-form';

class App extends React.Component {
  render() {
    return (
      <main>
        <BrowserRouter>
          <Route exact path='/' component={UiBuildForm}/>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;