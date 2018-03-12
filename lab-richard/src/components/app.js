import React from 'react';
import {Provider} from 'react-redux';
import createStore from '../lib/store.js';
import Dashboard from './dashboard/dashboard.js';
import {BrowserRouter, Route} from 'react-router-dom';
import UI_Challenge from '../../ui-challenge/ui-challenge';

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
                        <React.Fragment>
                            <Route exact path="/" component={Dashboard}/>
                            <Route exact path="/ui" component={UI_Challenge}/>
                        </React.Fragment>
                    </BrowserRouter>
                </Provider>
            </main>
        );
    }
}

export default App;