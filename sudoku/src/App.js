import './App.css';
import React from 'react';

const styles = {
  width: '2.5rem',
  height: '2.5rem',
  resize: 'none',
  lineHeight: '2.5rem',
  border: '1px solid black',
  // These two props are for the main number
  // Disable them for notes
  // text-align: 'center',
  // line-height: '2.5rem',
  // color: 'grey',
};

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="Sudoku Cell"></label>
        <textarea type="textarea" style={styles} value={this.state.value} onChange={this.handleChange}></textarea>
      </form>
    );
  }
}

function App() {
  return (
    <div className="App">
      <div className="header">Welcome to Tic Tac Toe!</div>
      <div className="row"><Cell></Cell><Cell></Cell><Cell></Cell></div>
      <div className="row"><Cell></Cell><Cell></Cell><Cell></Cell></div>
      <div className="row"><Cell></Cell><Cell></Cell><Cell></Cell></div>
    </div>

  );
}

export default App;
