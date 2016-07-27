module.exports = {
    path: 'explore',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/Explore'))
        })
    }
}
