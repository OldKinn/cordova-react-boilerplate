import React from 'react'
import QueueAnim from 'rc-queue-anim'
import GlobalNav from 'commons/components/GlobalNav'

class Explore extends React.Component {

    render() {
        const style = {
            minHeight: window.innerHeight,
            paddingBottom: 60
        }
        let props = {
            key: this.props.location.pathname,
            actions: this.props.actions,
            cache: this.props.cache
        };
        return (
            <div className="frameset-main" style={style}>
                <GlobalNav/>
                <QueueAnim
                    className="frameset-routers"
                    type={['bottom', 'top']}
                    duration={300}
                    ease='easeOutQuart'>
                    {React.cloneElement(this.props.children, props)}
                </QueueAnim>
            </div>
        )
    }
}

module.exports = Explore
