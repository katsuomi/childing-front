import {
  BPM_FUNC
} from '../actions'
  
  
const initialState = { 
  bpm: 0,
}
  
export default (state = initialState, action) => {
  switch (action.type){
    case BPM_FUNC:
      return {
        bpm: action.data
      }
    default:
      return state
  }
}
  