import React, {Component} from 'react'

class Cover extends Component {
    render() {
        const {isBlock} = this.props;
        if (isBlock) {
            return <div className="page-block"></div>
        } else {
            return false;
        }
    }
}
export default Cover