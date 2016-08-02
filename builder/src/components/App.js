import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import QueueAnim from 'rc-queue-anim'
import Alert from 'react-s-alert'
import Cover from 'commons/components/Cover'
import Loader from 'commons/components/Loader'
import * as Actions from '../actions'

class App extends Component {

    render() {
        const {location, actions, cache, children, navbar, main} = this.props;
        const props = {
            key: location.pathname.split('/')[1] || 'root',
            actions: actions,
            cache: cache
        };
        const style = {
            minHeight: window.innerHeight
        };
        const animConfig = [
            {opacity: [1, 0], translateX: [0, '100%']},
            {opacity: [0, 1], translateX: [0, '-100%']}
        ];
        // easeOutBounce, easeInBounce, easeInOutElastic, easeInOutQuint
        const ease = 'easeInOutQuint';
        const createContent = () => {
            if (navbar && main) {
                return (
                    <div>
                        <QueueAnim style={style} className="router-main" type={['right', 'left']} ease={ease}>
                            {React.cloneElement(main, props)}
                        </QueueAnim>
                        {navbar}
                    </div>
                )
            } else if (children) {
                return (
                    <QueueAnim className="router-main" animConfig={animConfig} ease={ease}>
                        {React.cloneElement(children, props)}
                    </QueueAnim>
                )
            }
        }
        return (
            <div className="app-main">
                {createContent()}
                <Cover active={cache.isBlock}/>
                <Loader active={cache.isLoading}/>
                <Alert
                    stack={{limit: 1}}
                    position="bottom"
                    effect="stackslide"
                    timeout={1500}
                    offset={50}
                />
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
