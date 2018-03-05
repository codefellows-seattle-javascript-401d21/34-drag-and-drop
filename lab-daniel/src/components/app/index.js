import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import UiBuild from './components/ui-build';

class App extends React.Component {
  render() {
    return (
      <main>
        <BrowserRouter>
          <Route exact path='/' component={UiBuild}/>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;