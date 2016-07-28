import React, {Component} from 'react'
import cloneDeep from 'lodash/cloneDeep'

class Card extends Component {
    render() {
        let props = cloneDeep(this.props);
        let className = ['card'];
        if (props.className) {
            className.push(props.className);
            delete props.className;
        }
        return (
            <div className={className.join(' ')} {...props}>
                {this.props.children}
            </div>
        )
    }
}

export default Card