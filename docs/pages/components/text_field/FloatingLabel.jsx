import React, {PropTypes} from 'react'
import Textfield from '../../../../src/Textfield/Textfield'

class FloatingLabel extends React.PureComponent {

  constructor(props){
    super(props);
    this.state={city: ''};
  }

  render () {
    return (
      <Textfield
        floatingLabel="City"
        value={this.state.city}
        onChange={({target : {value : city}}) => {
          this.setState({ city })
        }}
      />
    )
  }
}
export default FloatingLabel;
