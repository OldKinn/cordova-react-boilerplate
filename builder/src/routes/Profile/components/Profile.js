import React, {Component, PropTypes} from 'react'
import Ripples from 'commons/components/Ripples'
import Card from 'commons/components/Card'
import utils from 'commons/utils'

class Profile extends Component {
    render() {
        const {cache} = this.props;
        return (
            <div className="padding">
                <Card className="padding">
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
        utils.setStorage('isLogin', false);
        this.context.router.push('/');
    }
}


Profile.contextTypes = {
    router: PropTypes.object.isRequired
}

module.exports = Profile
