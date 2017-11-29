class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
	        minutes: 0,
	        seconds: 0,
	        miliseconds: 0,
	        running: false,
          change: 0
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
    itemArray = [...itemArray, timeshot]; //Wrzucamy stringi z czasem do tablicy
    console.log(itemArray);
    this.setState({change: this.state.change + 1});
  }
  clear() {
    itemArray = [];
    this.setState({change: 0});
  }
  render() {
    return (
      <div>
        <Controls start={this.start.bind(this)} stop={this.stop.bind(this)}/>
        <Container display={this.format(this.state)} output={this.shot.bind(this)}/>
        <ResultsList results={itemArray} clear={this.clear.bind(this)}/>
      </div>
    );
  }
}

let itemArray = [];

let app = <App />
ReactDOM.render(app, document.getElementById('app'));