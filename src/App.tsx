import React from 'react';

import { Button } from 'antd';
import styled from 'styled-components';

class App extends React.Component {
  handleClick = (ev: any) => {
    console.log(ev);
  };

  render() {
    return (
      <div>
        <Title>Hello React!</Title>
        <p className="test">hello</p>
        <Button type="primary" onClick={this.handleClick}>
          button
        </Button>
      </div>
    );
  }
}

const Title = styled.h1`
  color: blue;
`;

export default App;
