import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import QueueAnim from 'rc-queue-anim'
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
        const animateConfig = [
            {opacity: [1, 0], translateX: [0, '100%']},
            {opacity: [0, 1], translateX: [0, '-100%']}
        ];
        const createContent = () => {
            if (navbar && main) {
                return (
                    <div>
                        <QueueAnim
                            className="router-main"
                            animConfig={animateConfig}
                            duration={300}
                            ease='easeOutQuart'>
                            {React.cloneElement(main, props)}
                        </QueueAnim>
                        {navbar}
                    </div>
                )
            } else if (children) {
                return (
                    <QueueAnim
                        className="router-main"
                        animConfig={animateConfig}
                        duration={300}
                        ease='easeOutQuart'>
                        {React.cloneElement(children, props)}
                    </QueueAnim>
                )
            }
        }
        return (
            <div className="app-main">
                {createContent()}
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
