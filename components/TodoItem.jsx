import React from 'react';

import TaskActions from '../actions/TaskActions';

export default class TodoItem extends React.Component {

  static propTypes = {
    data: React.PropTypes.object.isRequired
  };

  state = {
    editing: false,
    editText: this.props.data.text
  };

  constructor(props) {
    super(props);

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this);
  }

  handleEdit() {
    this.setState({editing: true});
  }

  handleSubmit() {
    let val = this.state.editText.trim();

    if (val) {
      this.setState({editing: false, editText: val});
      TaskActions.editTask(this.props.data.id, val);
    } else {
      TaskActions.removeTask(this.props.data.id);
    }
  }

  handleToggle() {
    TaskActions.toggleTask(this.props.data.id);
  }

  handleDestroy() {
    TaskActions.removeTask(this.props.data.id);
  }

  handleKeyDown(event) {
    if (event.which === 27) {
      this.setState({editing: false, editText: this.props.data.text});
    } else if (event.which === 13) {
      this.handleSubmit();
    }
  }

  handleChange(event) {
    this.setState({editText: event.target.value});
  }

  render() {
    let className = '';
    if (this.props.data.completed) { className += ' completed' }
    if (this.state.editing) { className += ' editing' }

    return (
      <li className={className}>
        <div className="view">
          <input
            type="checkbox"
            className="toggle"
            checked={this.props.data.completed}
            onChange={this.handleToggle}
          />
          <label onDoubleClick={this.handleEdit}>{this.props.data.text}</label>
          <button className="destroy" onClick={this.handleDestroy}/>
        </div>
        <input
          type="text"
          className="edit"
          value={this.state.editText}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
      </li>
    );
  }

}
