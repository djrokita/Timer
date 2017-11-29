class Controls extends React.Component {
  static propTypes: {
    name: React.PropTypes.array.isRequired
  }
  render() {
    return (
      <nav className='controls'>
        <button className='button' onClick={this.props.start}>start</button>
        <button className='button' onClick={this.props.stop}>stop</button>
      </nav>
    );
  }
}

class Container extends React.Component {
  render() {
    return (
      <div className='stopwatch' onClick={this.props.output}>
      	{this.props.display}
      </div>
    );
  }
}

class ResultsList extends React.Component {
  render() {
    let setItem = this.props.results.map((item) => {
      return <li>{item}</li>
    });
    return (
      <ul className='results' id='list'>
        {setItem}
      </ul>
    );
  }
}

const buttonsName = ['start', 'stop'];

function pad0(value) {
  let result = value.toString();
  if (result.length < 2) result = "0" + result;
  return result;
}

/*
  constructor(props) {
    super(props);
    this.state = {
      change: 0
    }
  }
  componentWillReceiveProps() {
    this.setState({
      change: this.state.change + 1
    });
  }

  */