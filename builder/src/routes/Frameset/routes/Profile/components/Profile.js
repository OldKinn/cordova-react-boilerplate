import React, {Component} from 'react'
import Ripples from 'commons/components/Ripples'
import Card from 'commons/components/Card'
import {setStorage} from 'commons/utils'

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
                    <Ripples style={{display: 'inline-block'}} color="#eee">
                        <button className="btn btn-lg btn-success" onClick={this.logout.bind(this)}>退 出</button>
                    </Ripples>
                </Card>
            </div>
        )
    }

    logout() {
        const {actions} = this.props;
        actions.setCache('isLogin', false);
        setStorage('isLogin', false);
    }
}

module.exports = Profile
