import React, {Component} from 'react'
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
            {translateX: [0, '100%']},
            {translateX: [0, '-100%']}
        ];
        return (
            <div>
                <GlobalNav />
                <QueueAnim
                    className="router-main"
                    animConfig={animateConfig}
                    duration={400}
                    ease='easeOutCubic'>
                    {React.cloneElement(this.props.children || <Dashboard/>, props)}
                </QueueAnim>
            </div>
        )
    }
}

module.exports = App
