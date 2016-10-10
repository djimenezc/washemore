import dispatcher from '../dispatcher/dispatcher';

export function deleteTodo(id) {
  dispatcher.dispatch({
    type: 'DELETE_TODO',
    id
  });
}

export function reloadTodos() {
}
