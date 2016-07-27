module.exports = {
    path: 'relation',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/Relation'))
        })
    }
}
