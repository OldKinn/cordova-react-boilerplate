import React, {Component} from 'react'
import Card from 'commons/components/Card'

class Dashboard extends Component {

    componentDidMount() {
        const {actions} = this.props;
        actions.setCache('isLogin', true);
    }

    render() {
        return (
            <div>
                <Card style={{padding: 20, margin: 5}}>
                    <h3>我悄悄的来</h3>
                    <p>我悄悄的来，</p>
                    <p>只想握着你的手悄悄的离开！</p>
                    <p>你轻轻的问候，</p>
                    <p>在我脑海里徘徊。</p>
                    <p>看到你的微笑，</p>
                    <p>我的心像腊梅一样绽开！</p>
                    <p>你悄悄的来，</p>
                    <p>像一缕和煦的风，</p>
                    <p>像一阵温柔的雨，</p>
                    <p>轻柔地向我飘来。</p>
                    <p>我好想拉着你的手，</p>
                    <p>从此永远永远不松开！</p>
                </Card>
            </div>
        )
    }
}

module.exports = Dashboard
