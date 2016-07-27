import './css/app.css'
import React from 'react'
import {render} from 'react-dom'
import {Router, hashHistory} from 'react-router'

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

render(<Router history={hashHistory} routes={rootRoute}/>, document.getElementById('root'));
