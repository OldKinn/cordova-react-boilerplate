module.exports = {
    path: 'register',
    onLeave: () => {
        window.scrollTo(0, 0);
    },
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/Register'))
        })
    }
}
