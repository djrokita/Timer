class Controls extends React.Component {
  static propTypes: {
    name: React.PropTypes.array.isRequired,
    start: React.PropTypes.func.isRequired,
    stop: React.PropTypes.func.isRequired
  };
  render() {
    return (
      <nav className="controls">
        <button className="button" onClick={this.props.start}>
          start
        </button>
        <button className="button" onClick={this.props.stop}>
          stop
        </button>
      </nav>
    );
  }
}

class Display extends React.Component {
  static propTypes: {
    display: React.PropTypes.string.isRequired
  };
  render() {
    return (
      <div className="stopwatch" onClick={this.props.output}>
        {this.props.display}
      </div>
    );
  }
}

class ResultsList extends React.Component {
  static propTypes: {
    results: React.PropTypes.object.isRequired
  };
  render() {
    let setItem = this.props.results.map(item => {
      return <li key={item.id}>{item.time}</li>;
    });
    return (
      <ul className="results" id="list" onClick={this.props.clear}>
        {setItem}
      </ul>
    );
  }
}

const pad0 = value => {
  let result = value.toString();
  if (result.length < 2) result = "0" + result;
  return result;
};
