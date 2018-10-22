export const ADD_TODO = "ADD_TODO"
export const REMOVE_TODO = "REMOVE_TODO"
export const UPDATE_STATUS = "UPDATE_STATUS"

export function addTodo(task) {
  return({
    type: ADD_TODO,
    payload: task
  })
}

export function removeTodo(id) {
  return({
    type: REMOVE_TODO,
    payload: id
  })
}

export function updateStatus(id) {
  return({
    type: UPDATE_STATUS,
    payload: id
  })
}