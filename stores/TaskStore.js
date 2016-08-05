import TodoConstants from '../constants/TodoConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';
import EventEmitter from 'events';

const CHANGE_EVENT = 'change';

const create = (text) => {
  let tasks = localStorage.getItem('tasks');
  tasks.push({
    id: (+new Date() + Math.floor(Math.random() * 999999)).toString(36),
    text: text,
    completed: false,
    created_at: new Date()
  });

  localStorage.setItem('tasks', tasks);
};

const edit = (id, text) => {
  let tasks = localStorage.getItem('tasks').map((task) => {
    if (task.id === id) {
      task.text = text;
    }

    return task;
  });

  localStorage.setItem('tasks', tasks);
};

const remove = (id) => {
  let tasks = localStorage.getItem('tasks').filter((task) => task.id !== id);

  localStorage.setItem('tasks', tasks);
};

const toggleTask = (id) => {
  let tasks = localStorage.getItem('tasks').map((task) => {
    if (task.id === id) {
      task.completed = !task.completed;
    }

    return task;
  });

  localStorage.setItem('tasks', tasks);
};

const toggleTasks = (value) => {
  let tasks = localStorage.getItem('tasks').map((task) => {
    if (task.id === id) {
      task.completed = value;
    }

    return task;
  });

  localStorage.setItem('tasks', tasks);
};

const removeCompleted = () => {
  let tasks = localStorage.getItem('tasks').map((task) => !task.completed);

  localStorage.setItem('tasks', tasks);
};

class TaskStore extends EventEmitter {

  constructor() {
    super();
    localStorage.setItem('tasks', []);

    AppDispatcher.register(this.handle.bind(this));
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  getAll() {
    return localStorage.getItem('tasks');
  }

  handle(payload) {
    switch (payload.type) {
      case TodoConstants.ADD_TASK:
        create(payload.text);
        this.emitChange();
        break;

      case TodoConstants.EDIT_TASK:
        edit(payload.id, payload.text);
        this.emitChange();
        break;

      case TodoConstants.REMOVE_TASK:
        remove(payload.id);
        this.emitChange();
        break;

      case TodoConstants.TOGGLE_TASK:
        toggleTask(payload.id);
        this.emitChange();
        break;

      case TodoConstants.TOGGLE_TASKS:
        toggleTasks(value);
        this.emitChange();
        break;

      case TodoConstants.REMOVE_TASKS_COMPLETED:
        removeCompleted();
        this.emitChange();
        break;

      default:
        break;
    }
  }

}

const taskStore = new TaskStore();

export default taskStore;
