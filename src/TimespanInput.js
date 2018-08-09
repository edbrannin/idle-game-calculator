import React, { Component } from 'react';

class TimespanInput extends Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();
  }

  onChange = (event) => {
    if (! this.props.onChange) {
      return;
    }
    this.props.onChange(Number(this.ref.current.value));
  }

  render() {
    return (
      <select defaultValue={1} ref={this.ref} onChange={this.onChange}>
        <option value={ 1 } >Second</option>
        <option value={ 60 }>Minute</option>
        <option value={ 60 * 60 }>Hour</option>
        <option value={ 60 * 60 * 24 }>Day</option>
      </select>
    );
  }
}

export default TimespanInput;
