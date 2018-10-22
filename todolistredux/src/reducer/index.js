import { ADD_TODO, REMOVE_TODO, UPDATE_STATUS} from '../actions'
import uuidv4 from 'uuid/v4';

const initital = {
  task: [{task: "walk dog", status: "incomplete", id: uuidv4()}, {task: "walk fluffy the cat", status: "complete", id: uuidv4()}]
}

export default function reducer(state=initital, action) {
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        task: [...state.task, {...action.payload}]
      }
    case REMOVE_TODO:
      let task = state.task.filter(task => task.id !== action.payload)
      return {...state, task}
    case UPDATE_STATUS:
      let updateStatus = {...state.task.filter(task => task.id === action.payload)[0]}
      updateStatus.status = updateStatus.status === "complete" ? "incomplete": "complete"
      task = state.task.filter(task => task.id !== action.payload).concat([updateStatus])
      return {...state, task}
    default: 
      return state
  }
}