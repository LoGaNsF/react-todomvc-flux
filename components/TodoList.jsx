import React from 'react';

import TaskActions from '../actions/TaskActions';

import TodoItem from './TodoItem'

export default class TodoList extends React.Component {

  static propTypes = {
    dataSource: React.PropTypes.array.isRequired
  };

  renderToggleAll() {
    const completed = this.props.dataSource.reduce((count, task) => task.completed ? count + 1 : count, 0);

    if (this.props.dataSource.length) {
      return (
        <input
          type="checkbox"
          className="toggle-all"
          checked={completed === this.props.dataSource.length}
          onClick={(event) => TaskActions.toggleAllTask(event.target.checked)}
        />
      );
    }
  }

  render() {
    return (
      <section className="main">
        {this.renderToggleAll()}
        <label htmlFor='toggle-all'>Mark all as complete</label>
        <ul className="todo-list">
          {this.props.dataSource.map(task => <TodoItem key={task.id} data={task} />)}
        </ul>
      </section>
    );
  }

}
