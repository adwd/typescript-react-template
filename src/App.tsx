import React from 'react';
import styled from 'styled-components';

class App extends React.Component {
  render() {
    return (
      <div>
        <Title>Hello React!</Title>
        <p className="test">hello</p>
      </div>
    );
  }
}

const Title = styled.h1`
  color: blue;
`;

export default App;
