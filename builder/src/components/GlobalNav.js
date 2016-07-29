import React, {Component} from 'react'
import {Link, IndexLink} from 'react-router'
import Ripples from 'commons/components/Ripples'

class GlobalNav extends Component {

    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-bottom">
                <ul className="toolbar">
                    <li>
                        <Ripples center>
                            <IndexLink to="/" activeClassName="active">
                                <span className="glyphicon glyphicon-home"/>
                                <span className="center-block">首页</span>
                            </IndexLink>
                        </Ripples>
                    </li>
                    <li>
                        <Ripples center>
                            <Link to="/relation" activeClassName="active">
                                <span className="glyphicon glyphicon-heart-empty"/>
                                <span className="center-block">朋友圈</span>
                            </Link>
                        </Ripples>
                    </li>
                    <li>
                        <Ripples center>
                            <Link to="/explore" activeClassName="active">
                                <span className="glyphicon glyphicon-search"/>
                                <span className="center-block">发现</span>
                            </Link>
                        </Ripples>
                    </li>
                    <li>
                        <Ripples center>
                            <Link to="/profile" activeClassName="active">
                                <span className="glyphicon glyphicon-user"/>
                                <span className="center-block">我</span>
                            </Link>
                        </Ripples>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default GlobalNav
