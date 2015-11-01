import React, {Component} from 'react';

class Viewport extends Component {
  constructor(props) {
    super(props);

    this.state = {
      containerWidth: 0,
      containerHeight: 0
    };

    this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions() {
    this.setState({containerWidth: window.innerWidth, containerHeight: window.innerHeight});
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  scaleHeightToFit = () => {
    var scaleFactor = 1.0;
    var height = this.props.height;

    if (height > this.state.containerHeight) {
      scaleFactor = this.state.containerHeight / height;
    }

    return scaleFactor;
  }

  scaleWidthToFit = () => {
    var scaleFactor = 1.0;
    var width = this.props.width;

    if (width > this.state.containerWidth) {
      scaleFactor = this.state.containerHeight / width;
    }

    return scaleFactor;
  }

  render() {
    var autoSize = false;
    var scaleFactor = 1.0;

    switch (this.props.mode) {
      case 'scaleToFit': {
        scaleFactor = Math.min(this.scaleWidthToFit(), this.scaleHeightToFit());
        break;
      }
      case 'scaleWidthToFit': {
        scaleFactor = this.scaleWidthToFit();
        break;
      }
      case 'scaleHeightToFit': {
        scaleFactor = this.scaleHeightToFit();
        break;
      }
      case 'fill':
        autoSize = true;
      default:
        break;
    }

    var width = this.props.width + 'px';
    var height = this.props.height + 'px';

    if (autoSize) {
      width = '100%';
      height = '100%';
    }

    var transform = `scale(${scaleFactor}, ${scaleFactor})`;

    var position = 'absolute';
    var overflow = 'hidden';

    var style = {position, overflow, width, height, transform};

    if (!autoSize && this.props.center) {
      style.left = '50%';
      style.top = '50%';
      style.marginLeft = (this.props.width / (-2)) + 'px';
      style.marginTop = (this.props.height / (-2)) + 'px';
    }

    return (
      <div className="viewport" style={style}>
        {this.props.children}
      </div>
    );
  }
}

Viewport.defaultProps = {
  width: 800,
  height: 480,
  mode: 'scaleToFit',
  center: true
};

Viewport.propTypes = {
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  mode: React.PropTypes.string.isRequired,
  center: React.PropTypes.bool.isRequired
};

export default Viewport;
