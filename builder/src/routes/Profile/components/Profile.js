import React, {Component} from 'react'
import Ripples from 'commons/components/Ripples'
import Card from 'commons/components/Card'

class Profile extends Component {
    render() {
        const {cache} = this.props;
        return (
            <div>
                <Card className="padding margin">
                    <Ripples>
                        <p className="margin padding">姓名:{cache.userName}</p>
                    </Ripples>
                    <Ripples>
                        <p className="margin padding">手机:{cache.mobile}</p>
                    </Ripples>
                    <Ripples style={{display: 'inline-block'}}>
                        <button className="btn btn-lg btn-success">Hello</button>
                    </Ripples>
                </Card>
            </div>
        )
    }
}

module.exports = Profile
