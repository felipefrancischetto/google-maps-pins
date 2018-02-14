import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Home from './containers/home/Home';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isGettingPosition: true
    }
  }

  render() {
    return (
      <Container>
        <Home/>
      </Container>
    );
  }
}

export default App;
