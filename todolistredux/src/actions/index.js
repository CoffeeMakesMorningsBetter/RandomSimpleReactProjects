export const ADD_TODO = "ADD_TODO"
export const REMOVE_TODO = "REMOVE_TODO"

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