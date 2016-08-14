import React from 'react';

import TaskActions from '../actions/TaskActions';

export default class Header extends React.Component {

  handleKeyDown = (event) => {
    if (13 === event.keyCode) {
      event.preventDefault();
      TaskActions.addTask(event.target.value);
      event.target.value = '';
    }
  };

  render() {
    return (
      <header>
        <h1>todo</h1>
        <input
          type="text"
          className="new-todo"
          onKeyDown={this.handleKeyDown}
          placeholder="What needs to be done?"
          autoFocus
        />
      </header>
    );
  }

}
