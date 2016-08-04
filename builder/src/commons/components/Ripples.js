import React, {Component, PropTypes} from 'react'
import merge from 'lodash/merge'

const rippleStyle = {
    position: 'absolute',
    borderRadius: '50%',
    opacity: 0,
    width: 50,
    height: 50,
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
        this.timer = null;
    }

    componentWillUnmount() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    }

    handleClick(event) {
        event.stopPropagation();
        const {onClick, color, during, center} = this.props;
        const {offsetWidth, offsetHeight} = event.currentTarget;
        let {left, top} = {
            left: '50%',
            top: '50%'
        };
        if (!center) {
            left = event.nativeEvent.offsetX;
            top = event.nativeEvent.offsetY;
        }
        this.setState({
            rippleStyle: {
                top, left,
                opacity: 0.6,
                backgroundColor: color
            }
        });
        this.timer = setTimeout(()=> {
            const size = Math.max(offsetWidth, offsetHeight);
            this.setState({
                rippleStyle: {
                    left, top,
                    transform: `${rippleStyle.transform} scale(${size / 9})`,
                    opacity: 0,
                    backgroundColor: color,
                    transition: `all ${during}ms`
                }
            })
        }, 10);
        if (typeof onClick === 'function') {
            onClick(event)
        }
    }

    render() {
        let divStyle = merge({}, this.props.style, wrapStyle);
        let waveStyle = merge({}, rippleStyle, this.state.rippleStyle);
        return (
            <div style={divStyle} className={this.props.className} onMouseDown={this.handleClick}>
                {this.props.children}
                <span style={waveStyle}/>
            </div>
        )
    }
}

Ripples.propTypes = {
    during: PropTypes.number,
    color: PropTypes.string,
    center: PropTypes.bool
};

Ripples.defaultProps = {
    during: 450,
    color: 'rgba(0, 0, 0, .1)',
    center: false
};


module.exports = Ripples;
