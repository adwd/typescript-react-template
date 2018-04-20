import { Button } from 'antd';
import React from 'react';

class App extends React.Component {
  handleClick = (ev: any) => {
    console.log('click', ev);
  };

  render() {
    return (
      <div>
        <h1>Hello React!</h1>
        <Button type="primary" onClick={this.handleClick}>
          Button
        </Button>
      </div>
    );
  }
}

export default App;
