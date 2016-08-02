import React, {Component, PropTypes} from 'react'
import Alert from 'react-s-alert'
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
                        <p className="margin-none padding">
                            <label className="margin-right">姓名</label>
                            {cache.userName}
                        </p>
                    </Ripples>
                    <Ripples>
                        <p className="margin-none padding">
                            <label className="margin-right">手机</label>
                            {cache.mobile}
                        </p>
                    </Ripples>
                    <Ripples color="#eee">
                        <button className="btn btn-success btn-lg btn-block" onClick={this.logout.bind(this)}>退 出
                        </button>
                    </Ripples>
                </Card>
            </div>
        )
    }

    logout() {
        const {actions} = this.props;
        actions.setCache('isLogin', false);
        utils.setStorage('isLogin', false);
        Alert.success('退出成功！');
        this.context.router.push('/');
    }
}


Profile.contextTypes = {
    router: PropTypes.object.isRequired
}

module.exports = Profile
