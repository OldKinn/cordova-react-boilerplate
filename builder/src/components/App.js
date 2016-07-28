import React, {Component, PropTypes} from 'react'
import QueueAnim from 'rc-queue-anim'
import Dashboard from './Dashboard'
import GlobalNav from './GlobalNav'

class App extends Component {
    render() {
        const {location} = this.props;
        const props = {
            key: location.pathname.split('/')[1] || 'root'
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
                    {React.cloneElement(this.props.children || <Dashboard/>, props)}
                </QueueAnim>
            </div>
        )
    }
}

module.exports = App;
