import {
  KCAL_FUNC
} from '../actions'
  
  
const initialState = { 
  kcal: 0,
}
  
export default (state = initialState, action) => {
  switch (action.type){
    case KCAL_FUNC:
      return {
        kcal: action.data
      }
    default:
      return state
  }
}
  