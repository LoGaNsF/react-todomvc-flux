import React from 'react';

import TaskStore from '../stores/TaskStore';

import Header from './Header';
import Footer from './Footer';
import TodoList from './TodoList';

const TODO_FILTERS = {
  'SHOW_ALL': () => true,
  'SHOW_ACTIVE': (task) => !task.completed,
  'SHOW_COMPLETED': (task) => task.completed
};

export default class App extends React.Component {

  state = {
    tasks: TaskStore.getAll(),
    filter: 'SHOW_ALL'
  };

  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  componentDidMount() {
    TaskStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    TaskStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({tasks: TaskStore.getAll()});
  }

  handleFilter(filter) {
    this.setState({filter: filter});
  }

  renderFooter() {
    const active = this.state.tasks.reduce((count, task) => !task.completed ? count + 1 : count, 0);
    const completed = this.state.tasks.length - active;

    if (this.state.tasks.length) {
      return (
        <Footer
          activeCount={active}
          completedCount={completed}
          onFilter={this.handleFilter}
          filter={this.state.filter}
        />
      );
    }
  }

  render() {
    const tasks = this.state.tasks.filter(TODO_FILTERS[this.state.filter]);

    return (
      <div>
        <Header />
        <TodoList dataSource={tasks} />
        {this.renderFooter()}
      </div>
    );
  }

}
