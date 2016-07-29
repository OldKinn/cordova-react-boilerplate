import './css/app.css'
import './css/helper.css'
import React from 'react'
import {render} from 'react-dom'
import {Router, hashHistory} from 'react-router'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import {getStorage} from 'commons/utils'
import 'commons/bus'

const store = configureStore();

const rootRoute = {
    childRoutes: [{
        path: '/',
        component: require('./components/App'),
        indexRoute: {
            onLeave: () => {
                window.scrollTo(0, 0);
            },
            getComponent: (nextState, cb) => {
                if (getStorage('isLogin')) {
                    return require.ensure([], (require) => {
                        cb(null, require('./components/Dashboard'))
                    })
                } else {
                    return require.ensure([], (require) => {
                        cb(null, require('./components/Login'))
                    })
                }
            }
        },
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
