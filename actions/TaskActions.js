import AppDispatcher from '../dispatcher/AppDispatcher';
import TodoConstants from '../constants/TodoConstants';

export default function addTask(text) {
  AppDispatcher.dispatch({
    type: TodoConstants.ADD_TASK,
    text: text
  });
}

export default function editTask(id, text) {
  AppDispatcher.dispatch({
    type: TodoConstants.EDIT_TASK,
    id: id,
    text: text
  });
}

export default function removeTask(id) {
  AppDispatcher.dispatch({
    type: TodoConstants.REMOVE_TASK,
    id: id
  });
}

export default function removeCompleted() {
  AppDispatcher.dispatch({
    type: TodoConstants.REMOVE_TASKS_COMPLETED
  });
}

export default function toggleTask(id) {
  AppDispatcher.dispatch({
    type: TodoConstants.TOGGLE_TASK,
    id: id
  });
}

export default function toggleAllTask() {
  AppDispatcher.dispatch({
    type: TodoConstants.TOGGLE_TASKS
  });
}
