import React from 'react'
import {Provider} from 'react-redux'
import createStore from '../lib/store'
import Dashboard from './dashboard/dashboard'
import Uichallenge from './uichallenge'
import {BrowserRouter, Route} from 'react-router-dom'

const store = createStore()

class App extends React.Component {

  render() {
    return (
      <main className="application">
        <Provider store={store}>
          <BrowserRouter>
          <div>
            <Route exact path='/' component={Dashboard}/>
            <Route exact path='/ui' component={Uichallenge}/>
            </div>
          </BrowserRouter>
        </Provider>
      </main>
    )
  }
}

export default App
