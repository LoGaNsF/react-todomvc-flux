import React from 'react';

import TaskActions from '../actions/TaskActions';

const FILTER_TITLES = {
  'SHOW_ALL': 'All',
  'SHOW_ACTIVE': 'Active',
  'SHOW_COMPLETED': 'Completed'
};

export default class Footer extends React.Component {

  static propTypes = {
    activeCount: React.PropTypes.number.isRequired,
    completedCount: React.PropTypes.number.isRequired,
    onFilter: React.PropTypes.func.isRequired,
    filter: React.PropTypes.string.isRequired
  };

  renderFilterLink(filter) {
    const selectedClass = filter === this.props.filter ? 'selected' : '';

    return (
      <a className={selectedClass} onClick={() => this.props.onFilter(filter)} style={{cursor: 'pointer'}}>
        {FILTER_TITLES[filter]}
      </a>
    );
  }

  renderClearButton() {
    if (this.props.completedCount) {
      return (
        <button className="clear-completed" onClick={() => TaskActions.removeCompleted()}>
          Clear completed
        </button>
      );
    }
  }

  render() {
    let countText = this.props.activeCount > 1 ? 'items left' : 'item left';

    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{this.props.activeCount}</strong> {countText}
        </span>
        <ul className="filters">
          {['SHOW_ALL', 'SHOW_ACTIVE', 'SHOW_COMPLETED'].map(filter =>
            <li key={filter}>
              {this.renderFilterLink(filter)}
            </li>
          )}
        </ul>
        {this.renderClearButton()}
      </footer>
    );
  }

}
