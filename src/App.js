import React, { Component } from 'react';
import './App.css';
import Car from './car/car.js';
import Counter from './counter/counter';
// import counter from './counter/counter';
export const ClicedComplex = React.createContext(false);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cliced: false,
      cars: [
        { name: 'Ford', year: 2018 },
        { name: 'Audi', year: 2016 },
        { name: 'Mazda', year: 2010 },
      ],
      pageTitle: 'React components',
      hiding: false,
    };
  }

  // changeTitleHandler = (newTitle) => {
  //   this.setState({ pageTitle: newTitle });
  // };

  onChangeName(name, index) {
    const cars = this.state.cars.concat();
    const car = this.state.cars[index];
    car.name = name;
    cars[index] = car;
    this.setState({
      cars,
    });
  }
  inputChage = (event) => {
    this.setState({
      pageTitle: event.target.value,
    });
  };
  toggleChange = () => {
    this.setState({
      hiding: !this.state.hiding,
    });
  };
  onDelete(index) {
    const cars = this.state.cars.concat();
    cars.splice(index, 1);
    this.setState({
      cars,
    });
    // console.log('object');
  }
  render() {
    console.log('App render');
    const divStyle = {
      textAlign: 'center',
    };
    return (
      <div className="App" style={divStyle}>
        <h1>{this.props.title}</h1>
        <ClicedComplex.Provider value={this.state.cliced}>
          <Counter />
        </ClicedComplex.Provider>

        <button onClick={this.toggleChange}>changeTitle</button>
        <button onClick={() => this.setState({ cliced: true })}>clicus</button>
        <div style={{ width: '400px', margin: 'auto', paddingTop: '20px' }}>
          {this.state.hiding
            ? this.state.cars.map((car, index) => {
                return (
                  <Car
                    key={index}
                    name={car.name}
                    year={car.year}
                    onChangeName={(event) =>
                      this.onChangeName(event.target.value, index)
                    }
                    delete={this.onDelete.bind(this, index)}
                  />
                );
              })
            : null}
        </div>
      </div>
    );
  }
}
export default App;
