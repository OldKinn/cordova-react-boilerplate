import 'react-s-alert/dist/s-alert-default.css'
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css'
import './css/app.css'
import './css/helper.css'
import './css/form.css'

import React from 'react'
import {render} from 'react-dom'
import {Router, hashHistory} from 'react-router'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import utils from 'commons/utils'

const store = configureStore();

const rootRoute = {
    childRoutes: [
        {
            path: '/',
            component: require('./components/App'),
            indexRoute: {
                onEnter: (nextState, replace) => {
                    if (utils.getStorage('isLogin', false)) {
                        replace('/home');
                    }
                },
                component: require('./components/Login')
            },
            childRoutes: [
                require('./routes/Home'),
                require('./routes/Explore'),
                require('./routes/Profile'),
                require('./routes/Relation')
            ]
        }
    ]
}

render((
    <Provider store={store}>
        <Router history={hashHistory} routes={rootRoute}/>
    </Provider>
), document.getElementById('root'));
