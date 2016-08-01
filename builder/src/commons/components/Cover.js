import React, {Component} from 'react'

class Cover extends Component {
    render() {
        const {active} = this.props;
        if (active) {
            return <div className="page-block"></div>
        } else {
            return false;
        }
    }
}
export default Cover