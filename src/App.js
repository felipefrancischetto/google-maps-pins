import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Home from './containers/home/Home';

class App extends Component {
  render() {
    return (
      <Container>
        <Home/>
      </Container>
    );
  }
}

export default App;
