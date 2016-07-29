import React, {Component} from 'react'

class Loader extends Component {
    render() {
        const {isLoading} = this.props;
        if (isLoading) {
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