import './css/app.css'
import React from 'react'
import {render} from 'react-dom'
import {Router, browserHistory} from 'react-router'

global.ee = new EventEmitter();

const rootRoute = {
    childRoutes: [{
        path: '/',
        component: require('./components/App'),
        childRoutes: [
            require('./routes/Explore'),
            require('./routes/Messages'),
            require('./routes/Profile'),
            require('./routes/Relation')
        ]
    }]
}

render(<Router history={browserHistory} routes={rootRoute}/>, document.getElementById('root'));
