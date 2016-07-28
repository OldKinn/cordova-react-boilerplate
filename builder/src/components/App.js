import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import QueueAnim from 'rc-queue-anim'
import * as Actions from '../actions'
import GlobalNav from './GlobalNav'

class App extends Component {
    render() {
        const {location, actions, cache} = this.props;
        const props = {
            key: location.pathname.split('/')[1] || 'root',
            actions: actions,
            cache: cache
        };
        const animateConfig = [
            {opacity: [1, 0], translateX: [0, '100%']},
            {opacity: [0, 1], translateX: [0, '-100%']}
        ];
        let style = {minHeight: window.innerHeight};
        return (
            <div style={style}>
                <GlobalNav />
                <QueueAnim
                    className="router-main"
                    animConfig={animateConfig}
                    duration={300}
                    ease='easeOutQuart'>
                    {React.cloneElement(this.props.children, props)}
                </QueueAnim>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(App);
