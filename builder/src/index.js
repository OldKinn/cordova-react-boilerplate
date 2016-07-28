import './css/app.css'
import './css/helper.css'
import React from 'react'
import {render} from 'react-dom'
import {Router, hashHistory} from 'react-router'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import Dashboard from './components/Dashboard'

const store = configureStore();

const rootRoute = {
    childRoutes: [{
        path: '/',
        component: require('./components/App'),
        indexRoute: {component: Dashboard},
        childRoutes: [
            require('./routes/Explore'),
            require('./routes/Profile'),
            require('./routes/Relation')
        ]
    }]
}

render((
    <Provider store={store}>
        <Router history={hashHistory} routes={rootRoute}/>
    </Provider>
), document.getElementById('root'));
