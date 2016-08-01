import React, {Component, PropTypes} from 'react'
import utils from 'commons/utils'

class Login extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        const {cache} = this.props;
        return (
            <div>
                <form className="login-form padding" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>手机号码</label>
                        <input
                            type="text"
                            value={cache.mobile}
                            placeholder="请输入手机号码"
                            className="form-control input-bottom-line"
                            onChange={this.handleChange.bind(this, 'mobile')}
                        />
                    </div>
                    <div className="form-group">
                        <label>登录密码</label>
                        <input
                            type="password"
                            placeholder="请输入登录密码"
                            className="form-control input-bottom-line"
                            onChange={this.handleChange.bind(this, 'password')}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg btn-block">登 录</button>
                </form>
            </div>
        )
    }

    handleChange(key, event) {
        const {actions} = this.props;
        actions.setCache(key, event.target.value);
    }

    handleSubmit(event) {
        event.preventDefault();
        const {actions} = this.props;
        actions.setCache('isLogin', true);
        utils.setStorage('isLogin', true);
        this.context.router.push('/home');
    }
}

Login.contextTypes = {
    router: PropTypes.object.isRequired
}

module.exports = Login