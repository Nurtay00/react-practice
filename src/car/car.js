import React from 'react';
// import Radium from 'radium';
import './car.css';
import withClass from '../hoc/withClass';
class Car extends React.Component {
  render() {
    const inputClasses = ['input'];

    if (this.props.name !== '') {
      inputClasses.push('green');
    } else {
      inputClasses.push('red');
    }
    if (this.props.name.length > 4) {
      inputClasses.push('bold');
    }

    return (
      <React.Fragment>
        <h2>car name:{this.props.name}</h2>
        <h2>number: {this.props.year}</h2>
        <input
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
          className={inputClasses.join(' ')}
        />
        <button onClick={this.props.delete}>delete</button>
      </React.Fragment>
    );
  }
}

export default withClass(Car, 'car');
