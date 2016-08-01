import utils from 'commons/utils'

module.exports = {
    path: 'profile',
    onEnter: (nextState, replace) => {
        if (!utils.getStorage('isLogin', false)) {
            replace('/');
        }
    },
    onLeave: () => {
        window.scrollTo(0, 0);
    },
    getComponents(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, {
                navbar: require('commons/components/GlobalNav'),
                main: require('./components/Profile')
            })
        })
    }
}
