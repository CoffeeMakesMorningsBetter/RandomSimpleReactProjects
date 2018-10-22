export default function locationReducer(state = 'San Francisco, CA', action) {
  // return Object.assign({}, state, { location: action.payload })
  // return { location: action.payload } DONT DO will destroy ALL state
  if(action.type === 'SET_LOCATION') {
    return action.payload
  } else {
    return state;
  }
}

// Always must have a default state if state null will become SFO

// test("locationReducer", () => {
//   expect(locationReducer("Seatle WA", {type: "SET_LOCATION", payload: "San Francisco, CA"}))
//   .toBe("San Francisco, CA")
// })