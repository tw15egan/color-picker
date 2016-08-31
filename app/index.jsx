require('./scss/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import CopyToClipboard from 'react-copy-to-clipboard';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="color">
        <h1 className="color__heading">Press any key to get new colors</h1>
        <ColorBox />
        <ColorBox />
        <ColorBox />
      </div>  
    )
  }
}

class ColorBox extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      red: 0,
      green: 0,
      blue: 0,
      copied: false,
    }
    document.addEventListener('keydown', this.getRandomColor.bind(this));
  }
  
  componentWillMount() {
    this.getRandomColor();
  }
  
  getRandomColor() {
    let red = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let green = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let blue = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    this.setState({
      red: red,
      green: green,
      blue: blue,
    })
  }
  
  handleChange(e) {
    this.setState({
      [e.target.name] : parseInt(e.target.value),
      copied: false
    })
  }
  
  render() {
    let divStyle = {
      backgroundColor: `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`
    }

    return (
      <div className="color__box" style={divStyle}>
        <CopyToClipboard text={divStyle.backgroundColor} onCopy={() => this.setState({copied:true})}>
          <p className="color__code">{ !this.state.copied ? divStyle.backgroundColor : "Copied!"}</p>
        </CopyToClipboard>
        <form className="color__form">
          <label className="color__slider--label" htmlFor="red">{this.state.red}
          <input className="color__slider" name="red" type="range" min="0" max="255" value={this.state.red} onChange={this.handleChange.bind(this)} /></label>
          <label className="color__slider--label" htmlFor="green">{this.state.green}
          <input className="color__slider" name="green" type="range" min="0" max="255" value={this.state.green} onChange={this.handleChange.bind(this)} /></label>
          <label className="color__slider--label" htmlFor="blue">{this.state.blue}
          <input className="color__slider" name="blue" type="range" min="0" max="255" value={this.state.blue} onChange={this.handleChange.bind(this)} /></label>
        </form>
      </div>
      )
  }
}



ReactDOM.render(<App />, document.getElementById('app'));
