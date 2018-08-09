import React, { Component } from 'react';

class AmountInput extends Component {
  constructor(props) {
    super(props);

    this.amountRef = React.createRef();
    this.expRef = React.createRef();
  }

  state = {
    value: 0,
  }

  onChange = () => {
    if (! this.props.onChange) {
      console.log('WARN: no onChange()');
      return;
    }
    const amount = Number(this.amountRef.current.value);
    const exp = Number(this.expRef.current.value);
    const answer = amount * 10 ** exp;
    this.setState({ value: answer });
    this.props.onChange(answer);
  }

  render() {
    return (
      <span>
        <label>
          $
        </label>
        <input ref={this.amountRef} onChange={this.onChange} defaultValue={0} />
        <label>
          e
        </label>
        <input ref={this.expRef} onChange={this.onChange} defaultValue={0} />
        ({this.state.value.toLocaleString()})
      </span>
    );
  }
}

export default AmountInput;
