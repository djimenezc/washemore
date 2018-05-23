import {EventEmitter} from 'events';
import createNodeTree from '../../../createNodeTree'

import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.nodes = [];
    this.nLevels = 0;
    this.nNodes = 0;
    this.name = '';
  }

  setName(name) {
    this.name = name;
  }

  setNodesNumber(nNodes) {
    this.nNodes = parseInt(nNodes) || 0;
  }

  setLevelsNumber(nLevels) {
    this.nLevels = parseInt(nLevels) || 0;
  }

  buildNodes(nNodes, nLevels) {

    this.setLevelsNumber(nLevels);
    this.setNodesNumber(nNodes);
    this.nodes = createNodeTree(nLevels, nNodes);

    return this.nodes;
  }

  handleActions(action) {
    switch (action.type) {
    case 'CHANGE_NAME': {
      this.setName(action.name);
      this.emit('attributeChanged');
      break;
    }
    case 'CHANGE_NODES_NUMBER': {
      this.setNodesNumber(action.nNodes);
      this.emit('attributeChanged');
      this.emit('change');
      break;
    }
    case 'CHANGE_LEVELS_NUMBER': {
      this.setLevelsNumber(action.nLevels);
      this.emit('attributeChanged');
      this.emit('change');
      break;
    }
    case 'BUILD_NODES': {
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
