import {EventEmitter} from 'events';
import createNodeTree from '../../../createNodeTree'

import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.nodes = [];
    this.nLevels = 0;
    this.nNodes = 0;
  }

  createTodo(text) {
    const id = Date.now();

    this.todos.push({
      id,
      text,
      complete: false
    });

    this.emit('change');
  }

  buildNodes(nNodes, nLevels) {

    this.nNodes = parseInt(nNodes);
    this.nLevels = parseInt(nLevels);
    this.nodes = createNodeTree(nLevels, nNodes);

    this.emit('change');

    return this.nodes;
  }

  handleActions(action) {
    switch (action.type) {
    case 'CREATE_TODO': {
      this.createTodo(action.text);
      break;
    }
    case 'RECEIVE_TODOS': {
      this.todos = action.todos;
      this.emit('change');
      break;
    }
    }
  }

}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;
