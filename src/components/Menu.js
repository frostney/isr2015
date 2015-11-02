import React, {Component} from 'react';
import MenuItem from './MenuItem';
import Button from './Button';

class Menu extends Component {
  static defaultProps = {
    onFilter: function() { return true; }
  }

  constructor(props) {
    super(props);

    this.state = {
      invisible: true,
    };
  }

  componentDidMount() {
    this.setState({invisible: true});

    setTimeout(() => this.setState({invisible: false}), 50);
  }

  componentWillUnmount() {
    this.setState({invisible: true});
  }

  onClose = () => {
    this.setState({invisible: true}, () => {
      setTimeout(() => {
        if (this.props.onClose) {
          this.props.onClose.apply(this, arguments);
        }
      }, 400);
    });
  }

  render() {
    const items = this.props.items
    .filter(this.props.onFilter)
    .map((item, index) => {
      const enabled = (() => {
        if (this.props.onFilterEnabled) {
          return this.props.onFilterEnabled(item, index);
        }

        return true;
      })();

      const onClick = () => {
        if (!enabled) {
          return;
        }

        if (this.props.onMenuItem) {
          this.props.onMenuItem(item, index);
        }
      }

      return <MenuItem key={index} onClick={onClick} enabled={enabled} {...item} />;
    });

    let className = 'menu-container';

    if (this.state.invisible) {
      className += ' invisible';
    }

    if (this.props.className) {
      className += ` ${this.props.className}`;
    }

    return (
      <div className={className}>
        <div className="menu-overlay" onClick={this.onClose} />
        <div className="menu">
          <h2>{this.props.title}</h2>
          <div className="menu-inner">{items}</div>
          <div className="menu-bottom"><Button onClick={this.onClose}>Close</Button></div>
        </div>
      </div>
    );
  }
}

export default Menu;
