import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { addModel } from './actions/addModel'

const data = {
  "Ivel Z3": {
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  "Bally Astrocade": {
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  "Sord M200 Smart Home Computer": {
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  "Commodore 64": {
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
}

class App extends Component {
  state = {
    value: ''
  }

  updateSelection = (event) => {
    this.setState({ value: event.target.value })
  }

  addComputer = () => {
    this.props.addModel(data[this.state.value])
  }

  render() {
    return (
      <div className="App">
        <h3>Computer models</h3>
        <select value={this.state.selected} onChange={this.updateSelection}>
          <option value="">-- pick a model --</option>
          {Object.entries(data).map(computer =>
            <option key={computer[0]} value={computer[0]}>
              {computer[0]} ({computer[1].year})
            </option>
          )}
        </select>
        <button onClick={this.addComputer}>Add</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = {
  addModel
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
