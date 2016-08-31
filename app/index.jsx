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
        <Icon />
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

class Icon extends React.Component{
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="social">
        <a className="social__link" href="https://twitter.com/TJ_egan">
          <img className="social__icon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDQ5LjY1MiA0OS42NTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5LjY1MiA0OS42NTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjQuODI2LDBDMTEuMTM3LDAsMCwxMS4xMzcsMCwyNC44MjZjMCwxMy42ODgsMTEuMTM3LDI0LjgyNiwyNC44MjYsMjQuODI2YzEzLjY4OCwwLDI0LjgyNi0xMS4xMzgsMjQuODI2LTI0LjgyNiAgICBDNDkuNjUyLDExLjEzNywzOC41MTYsMCwyNC44MjYsMHogTTM1LjkwMSwxOS4xNDRjMC4wMTEsMC4yNDYsMC4wMTcsMC40OTQsMC4wMTcsMC43NDJjMCw3LjU1MS01Ljc0NiwxNi4yNTUtMTYuMjU5LDE2LjI1NSAgICBjLTMuMjI3LDAtNi4yMzEtMC45NDMtOC43NTktMi41NjVjMC40NDcsMC4wNTMsMC45MDIsMC4wOCwxLjM2MywwLjA4YzIuNjc4LDAsNS4xNDEtMC45MTQsNy4wOTctMi40NDYgICAgYy0yLjUtMC4wNDYtNC42MTEtMS42OTgtNS4zMzgtMy45NjljMC4zNDgsMC4wNjYsMC43MDcsMC4xMDMsMS4wNzQsMC4xMDNjMC41MjEsMCwxLjAyNy0wLjA2OCwxLjUwNi0wLjE5OSAgICBjLTIuNjE0LTAuNTI0LTQuNTgzLTIuODMzLTQuNTgzLTUuNjAzYzAtMC4wMjQsMC0wLjA0OSwwLjAwMS0wLjA3MmMwLjc3LDAuNDI3LDEuNjUxLDAuNjg1LDIuNTg3LDAuNzE0ICAgIGMtMS41MzItMS4wMjMtMi41NDEtMi43NzMtMi41NDEtNC43NTVjMC0xLjA0OCwwLjI4MS0yLjAzLDAuNzczLTIuODc0YzIuODE3LDMuNDU4LDcuMDI5LDUuNzMyLDExLjc3Nyw1Ljk3MiAgICBjLTAuMDk4LTAuNDE5LTAuMTQ3LTAuODU0LTAuMTQ3LTEuMzAzYzAtMy4xNTUsMi41NTgtNS43MTQsNS43MTMtNS43MTRjMS42NDQsMCwzLjEyNywwLjY5NCw0LjE3MSwxLjgwNCAgICBjMS4zMDMtMC4yNTYsMi41MjMtMC43MywzLjYzLTEuMzg3Yy0wLjQzLDEuMzM1LTEuMzMzLDIuNDU0LTIuNTE2LDMuMTYyYzEuMTU3LTAuMTM4LDIuMjYxLTAuNDQ0LDMuMjgyLTAuODk5ICAgIEMzNy45ODcsMTcuMzM0LDM3LjAxOCwxOC4zNDEsMzUuOTAxLDE5LjE0NHoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
        </a>
        <a className="social__link" href="https://github.com/tw15egan">
          <img className="social__icon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDk2IDk2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA5NiA5NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPgo8Zz4KCTxwYXRoIGQ9Ik00OC4wNyw0Ny43NDZjLTAuMDIyLDAtMC4wNDctMC4wMDEtMC4wNy0wLjAwMmMtMC4wMjQsMC4wMDEtMC4wNDksMC4wMDItMC4wNzEsMC4wMDIgICBjLTUuOTU3LDAtMTEuMjA2LTEuNTA4LTE0LjMwOCwxLjM0Yy0xLjg1OSwxLjcwOS0yLjY0MiwzLjc2OC0yLjY0Miw1Ljk4NWMwLDkuMjYxLDcuNDIsMTAuMzk4LDE2Ljk0OSwxMC4zOThoMC4xNDIgICBjOS41MjksMCwxNi45NDktMS4xMzgsMTYuOTQ5LTEwLjM5OGMwLTIuMjE4LTAuNzgzLTQuMjc2LTIuNjQyLTUuOTg1QzU5LjI3NSw0Ni4yMzgsNTQuMDI3LDQ3Ljc0Niw0OC4wNyw0Ny43NDZ6IE0zOS45NjgsNjAuNDAxICAgYy0xLjgxMywwLTMuMjgzLTIuMDM2LTMuMjgzLTQuNTQ3czEuNDctNC41NDYsMy4yODMtNC41NDZzMy4yODUsMi4wMzUsMy4yODUsNC41NDZTNDEuNzgxLDYwLjQwMSwzOS45NjgsNjAuNDAxeiBNNTYuMDMxLDYwLjQwMSAgIGMtMS44MTQsMC0zLjI4NS0yLjAzNi0zLjI4NS00LjU0N3MxLjQ3MS00LjU0NiwzLjI4NS00LjU0NmMxLjgxMiwwLDMuMjgzLDIuMDM1LDMuMjgzLDQuNTQ2UzU3Ljg0NCw2MC40MDEsNTYuMDMxLDYwLjQwMXogTTQ4LDAgICBDMjEuNDg5LDAsMCwyMS40OSwwLDQ4czIxLjQ4OSw0OCw0OCw0OGMyNi41MDksMCw0OC0yMS40OSw0OC00OFM3NC41MDksMCw0OCwweiBNNTIuMzc4LDY3LjcwMWMtMC44NiwwLTIuNTcsMC4wMDItNC4zNzgsMC4wMDQgICBjLTEuODA5LTAuMDAyLTMuNTItMC4wMDQtNC4zNzktMC4wMDRjLTMuODAzLDAtMTguODYzLTAuMjkxLTE4Ljg2My0xOC40NDVjMC00LjE3NywxLjQzMi03LjIzMywzLjc3NS05Ljc3OCAgIGMtMC4zNzQtMC45MjMtMC4zOTMtNi4xNjUsMS42MDItMTEuMTgzYzAsMCw0LjU3NiwwLjUwMiwxMS41LDUuMjUzYzEuNDUxLTAuNDAxLDMuOTA4LTAuNjAxLDYuMzY1LTAuNjAxICAgYzIuNDU1LDAsNC45MTIsMC4xOTksNi4zNjUsMC42MDFjNi45MjMtNC43NTEsMTEuNDk4LTUuMjUzLDExLjQ5OC01LjI1M2MxLjk5NSw1LjAxOCwxLjk3NywxMC4yNiwxLjYwMywxMS4xODMgICBjMi4zNDQsMi41NDUsMy43NzYsNS42MDIsMy43NzYsOS43NzhDNzEuMjQyLDY3LjQxLDU2LjE4MSw2Ny43MDEsNTIuMzc4LDY3LjcwMXoiIGZpbGw9IiMwMDAwMDAiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
        </a>
      </div>
    )
  }
}



ReactDOM.render(<App />, document.getElementById('app'));
