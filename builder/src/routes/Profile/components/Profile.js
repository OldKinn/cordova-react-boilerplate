import React, {Component} from 'react'
import Card from 'commons/components/Card'

class Profile extends Component {
    render() {
        const {cache} = this.props;
        return (
            <div>
                <Card className="padding margin">
                    <p>姓名:{cache.userName}</p>
                    <p>手机:{cache.mobile}</p>
                </Card>
            </div>
        )
    }
}

module.exports = Profile
