import React, {Component, PropTypes} from 'react'
import merge from 'lodash/merge'

const rippleStyle = {
    position: 'absolute',
    borderRadius: '50%',
    opacity: 0,
    width: 40,
    height: 40,
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none'
};

const wrapStyle = {
    position: 'relative',
    overflow: 'hidden'
};

class Ripples extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rippleStyle: {},
            wrapStyle: {}
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.stopPropagation();
        const {onClick, color, during} = this.props;
        const {offsetWidth, offsetHeight} = event.currentTarget;
        const left = event.nativeEvent.offsetX;
        const top = event.nativeEvent.offsetY;
        this.setState({
            rippleStyle: {
                top, left,
                opacity: 1,
                backgroundColor: color
            }
        });
        setTimeout(()=> {
            const size = Math.max(offsetWidth, offsetHeight);
            this.setState({
                rippleStyle: {
                    left, top,
                    transform: `${rippleStyle.transform} scale(${size / 9})`,
                    opacity: 0,
                    transition: `all ${during}ms`
                }
            })
        }, 50);
        if (typeof onClick === 'function') {
            onClick(event)
        }
    }

    render() {
        let divStyle = merge({}, this.props.style, wrapStyle);
        let waveStyle = merge({}, rippleStyle, this.state.rippleStyle);
        return (
            <div style={divStyle} onClick={this.handleClick}>
                {this.props.children}
                <span style={waveStyle}/>
            </div>
        )
    }
}

Ripples.propTypes = {
    during: PropTypes.number,
    color: PropTypes.string
};

Ripples.defaultProps = {
    during: 600,
    color: 'rgba(0, 0, 0, .3)'
};


module.exports = Ripples;
