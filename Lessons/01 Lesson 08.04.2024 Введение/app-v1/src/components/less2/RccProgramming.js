import React, { PureComponent } from 'react'

class RccProgramming extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    return (
			<>
				<p>Title: {this.props.title}</p>
				<p>Title: {this.props.price}</p>
			</>
		)
  }
}

export default RccProgramming