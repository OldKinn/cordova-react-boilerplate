import React, {Component} from 'react'

class Loader extends Component {
    render() {
        const {active} = this.props;
        if (active) {
            return (
                <div className="loading-wrapper">
                    <div className="spinner">
                        <div className="double-bounce1"></div>
                        <div className="double-bounce2"></div>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default Loader