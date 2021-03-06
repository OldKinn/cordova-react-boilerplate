import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import Alert from 'react-s-alert'
import get from 'lodash/get'
import Ripples from 'commons/components/Ripples'
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
                    <div className="center-block text-center padding">
                        <img src="public/resources/icon.png"/>
                    </div>
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
                    <div className="clearfix padding-top">
                        <Ripples style={{display: 'inline-block'}} className="pull-left">
                            <Link to="/register" className="btn btn-link">现在注册</Link>
                        </Ripples>
                        <Ripples style={{display: 'inline-block'}} className="pull-right">
                            <Link to="/forgot" className="btn btn-link">忘记密码？</Link>
                        </Ripples>
                    </div>
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
        const {actions, cache} = this.props;
        if (get(cache, 'mobile', '') == '') {
            Alert.error('请输入手机号码');
            return false;
        }
        if (get(cache, 'password', '') == '') {
            Alert.error('请输入登录密码');
            return false;
        }
        utils.setStorage('mobile', cache.mobile);
        actions.setCache('isBlock', true);
        actions.setCache('isLoading', true);

        bus.emit('login', {mobile: cache.mobile, password: cache.password}, (error, data) => {
            actions.setCache('isBlock', false);
            actions.setCache('isLoading', false);
            if (error) {
                Alert.error(error.message);
                return false;
            }
            Alert.success(data.message);
            actions.setCache('isLogin', true);
            utils.setStorage('isLogin', true);
            this.context.router.push('/home');
        });
    }
}

Login.contextTypes = {
    router: PropTypes.object.isRequired
}

module.exports = Login