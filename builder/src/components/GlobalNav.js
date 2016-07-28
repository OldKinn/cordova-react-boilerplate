import React, {Component} from 'react'
import {Link} from 'react-router'

class GlobalNav extends Component {

    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-bottom">
                <ul className="nav bottom-nav">
                    <li>
                        <Link to="/home" activeClassName="active">
                            <span className="glyphicon glyphicon-home"/>
                            <span className="center-block">首页</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/relation" activeClassName="active">
                            <span className="glyphicon glyphicon-apple"/>
                            <span className="center-block">朋友圈</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/explore" activeClassName="active">
                            <span className="glyphicon glyphicon-search"/>
                            <span className="center-block">发现</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile" activeClassName="active">
                            <span className="glyphicon glyphicon-user"/>
                            <span className="center-block">我</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default GlobalNav
