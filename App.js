class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
	        minutes: 0,
	        seconds: 0,
	        miliseconds: 0,
	        running: false
		}
	}
	format(times) {
    return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(
      Math.floor(times.miliseconds)
    )}`;
  }
	start() {
		if (!this.state.running) {
			this.setState({running: true});
			console.log(this.state.running);
      this.watch();
    }
	}
	stop() {
    if (this.state.running) {
      this.setState({running: false});
      clearInterval(this.watch);
    } else {
      this.reset();
    }
  }
  reset() {
    if (!this.state.running) {
      this.setState({
        minutes: 0,
        seconds: 0,
        miliseconds: 0
      });
    }
  }
	watch() {
    setInterval(() => this.step(), 10);
	}
  step() {
    if (!this.state.running) return;
    this.calculate();
  }
  calculate() {
    this.setState({miliseconds: this.state.miliseconds + 1});
    if (this.state.miliseconds >= 100) {
      this.setState({seconds: this.state.seconds + 1});
      this.setState({miliseconds: 0});
    }
    if (this.state.seconds >= 60) {
      this.setState({minutes: this.state.minutes + 1});
      this.setState({seconds: 0});
    }
  }
  shot() {
    let timeshot = this.format(this.state);
    console.log(timeshot);
    let shotItem = <li>{timeshot}</li>
    return shotItem;
  }
  clear() {
    resultsList.innerHTML = "";
  }
  render() {
    return (
      <div>
        <Controls start={this.start.bind(this)} stop={this.stop.bind(this)}/>
        <Container display={this.format(this.state)} output={this.shot.bind(this)}/>
        <ResultsList item={this.shot.bind(this)}/>
      </div>
    );
  }
}

let app = <App />
ReactDOM.render(app, document.getElementById('app'));