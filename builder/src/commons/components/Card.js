import React, {Component} from 'react'
import cloneDeep from 'lodash/cloneDeep'

class Card extends Component {
    render() {
        let props = cloneDeep(this.props);
        let className = 'card';
        if (props.className) {
            className += ' ' + props.className;
            delete props.className;
        }
        return (
            <div className={className} {...props}>
                {this.props.children}
            </div>
        )
    }
}

export default Card