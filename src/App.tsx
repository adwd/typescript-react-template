import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';

class App extends React.Component {
  handleClick = (ev: any) => {
    console.log('click', ev);
  };

  render() {
    return (
      <div>
        <Title>Hello React!</Title>
        <Button type="primary" onClick={this.handleClick}>
          Button
        </Button>
      </div>
    );
  }
}

const Title = styled.h1`
  color: blue;
`;

export default App;
