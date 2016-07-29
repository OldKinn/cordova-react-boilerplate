import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import QueueAnim from 'rc-queue-anim'
import Cover from 'commons/components/Cover'
import Loader from 'commons/components/Loader'
import * as Actions from '../actions'
import GlobalNav from './GlobalNav'

class App extends Component {

    componentDidMount() {
        const {actions} = this.props;
        EVENT_BUS.addListener('deviceReady', () => {
            alert('设备启动...');
            actions.setCache('deviceReady', true);
        });
    }

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
        let style = {minHeight: window.innerHeight, paddingBottom: 60};
        return (
            <div style={style}>
                <GlobalNav/>
                <QueueAnim
                    className="router-main"
                    animConfig={animateConfig}
                    duration={300}
                    ease='easeOutQuart'>
                    {React.cloneElement(this.props.children, props)}
                </QueueAnim>
                <Cover isBlock={cache.isBlock}/>
                <Loader isLoading={cache.isLoading}/>
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
