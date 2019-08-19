import React, { Component } from 'react';
import NewUsers from './newUsers';

class App extends Component {

  state = {
    newusers : [
      {name: 'ed', email: 'vergara@ed.com', password: 'pwd1' },
      {name: 'ed', email: 'vergara@ed.com', password: 'pwd2' },
      {name: 'ed', email: 'vergara@ed.com', password: 'pwd' },
      {name: 'ed', email: 'vergara@ed.com', password: 'pwd' },
      {name: 'ed', email: 'vergara@ed.com', password: 'pwd' }
    ]
  }
  render() {
    return (
      <div className="App">
      <h1>Blockchain BPI</h1>
      <p>Welcome User</p>
      <NewUsers newusers={ this.state.newusers } />
      <p></p>
      </div>
    );
  }
}


export default App;
