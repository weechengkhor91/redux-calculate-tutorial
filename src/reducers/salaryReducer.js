import { INCREASE, DECREASE } from '../actions/type'

//initial state
const initialState = {
  salary: 1000,
}

const salaryReducer = (state = initialState, action) => {
  //  console.log('reducer')
    //handle function
  switch (action.type) {
    case INCREASE:
      return { ...state, salary: (state.salary += 100) }
    case DECREASE:
      return {
        ...state,
        salary: (state.salary -= 100),
      }

    default:
      return state
  }
}

export default salaryReducer
