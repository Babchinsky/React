import React, { PureComponent } from 'react'

class Counter2 extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }
    console.log('constructor');
    console.log(this);
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    return (
      <div style={{
        border: '1px solid #ddd',
        margin: '20px',
        padding: '20px',
      }}>
        <p>{this.state.count}</p>
        <button onClick={() =>this.handleClick()}>Click</button>
      </div>
    )
  }
}

export default Counter2