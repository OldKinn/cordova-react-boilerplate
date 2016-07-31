import {getStorage} from 'commons/utils'

module.exports = {
    path: 'frameset',
    onEnter: (nextState, replace) => {
        if (!getStorage('isLogin', false)) {
            replace('/');
        }
    },
    onLeave: () => {
        window.scrollTo(0, 0);
    },
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/Frameset'))
        })
    },
    indexRoute: {
        component: require('./components/Dashboard')
    },
    childRoutes: [
        require('./routes/Explore'),
        require('./routes/Profile'),
        require('./routes/Relation')
    ]
}
