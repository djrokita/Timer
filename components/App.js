class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 0,
      seconds: 0,
      miliseconds: 0,
      running: false,
      change: 0
    };
  }
  format(times) {
    return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(
      Math.floor(times.miliseconds)
    )}`;
  }
  start() {
    if (!this.state.running) {
      this.setState({ running: true });
      this.watch();
    }
  }
  stop() {
    if (this.state.running) {
      this.setState({ running: false });
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
    this.setState((prevState) => ({
      miliseconds: prevState.miliseconds + 1
    }));
    if (this.state.miliseconds >= 100) {
      this.setState((prevState) => ({ 
        seconds: prevState.seconds + 1
        }));
      this.setState({ miliseconds: 0 });
    }
    if (this.state.seconds >= 60) {
      this.setState((prevState) => ({
      minutes: prevState.minutes + 1
      }));
      this.setState({ seconds: 0 });
    }
  }
  shot() {
    this.setState((prevState) => ({
     change: prevState.change + 1 }));
    if (this.state.change > 9) {
      let ask = confirm("Too many results. Do You want to clear results list?");
      if (ask) this.clear();
    } else {
      let timeshot = { time: this.format(this.state), id: this.state.change };
      itemArray = [...itemArray, timeshot];
    }
  }
  clear() {
    itemArray = [];
    this.setState({ change: 0 });
  }
  render() {
    return (
      <div>
        <Controls start={this.start.bind(this)} stop={this.stop.bind(this)} />
        <Display
          display={this.format(this.state)}
          output={this.shot.bind(this)}/>
        <ResultsList results={itemArray} clear={this.clear.bind(this)} />
      </div>
    );
  }
}

let itemArray = [];

let app = <App />;
ReactDOM.render(app, document.getElementById("app"));
