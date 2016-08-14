import AppDispatcher from '../dispatcher/AppDispatcher';
import TodoConstants from '../constants/TodoConstants';

const TaskActions = {

  addTask(text) {
    AppDispatcher.dispatch({
      type: TodoConstants.ADD_TASK,
      text: text
    });
  },

  editTask(id, text) {
    AppDispatcher.dispatch({
      type: TodoConstants.EDIT_TASK,
      id: id,
      text: text
    });
  },

  removeTask(id) {
    AppDispatcher.dispatch({
      type: TodoConstants.REMOVE_TASK,
      id: id
    });
  },

  removeCompleted() {
    AppDispatcher.dispatch({
      type: TodoConstants.REMOVE_TASKS_COMPLETED
    });
  },

  toggleTask(id) {
    AppDispatcher.dispatch({
      type: TodoConstants.TOGGLE_TASK,
      id: id
    });
  },

  toggleAllTask(value) {
    AppDispatcher.dispatch({
      type: TodoConstants.TOGGLE_TASKS,
      value: value
    });
  }

};

export default TaskActions;
