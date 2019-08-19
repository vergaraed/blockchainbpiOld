import React, { Component } from 'react';
import NewUsers from './newUsers';

class App extends Component {

  state = {
    newusers : [
      {name: 'us1', email: 'name1@mailinator.com', password: 'pwd1' },
      {name: 'us2', email: 'name2@mailinator.com', password: 'pwd2' }
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
