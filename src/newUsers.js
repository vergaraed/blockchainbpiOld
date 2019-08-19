import React, { Component } from 'react';

class newUsers extends Component {
  render() {
    const { newusers } = this.props;
    const newuserList = newusers.map((newuser) => (
      <div className="newuser">
        <div>
Name:
          { newuser.name }
          {' '}

        </div>
        <div>
Email:
          { newuser.email }
          {' '}

        </div>
        <div>
Password:
          { newuser.password }
        </div>
      </div>
    ));
    return (
      <div className="newuser-list">
        { newuserList }
      </div>
    );
  }
}

export default newUsers;
