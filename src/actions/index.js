export const KCAL_FUNC = 'KCAL_FUNC'
export const BPM_FUNC = 'BPM_FUNC'

export const kcalFunc = (e) => dispatch => {
  let data = Math.ceil(e)
  dispatch({type: KCAL_FUNC,data})
}

export const bpmFunc = (e) => dispatch => {
  let data = Math.ceil(e)
  dispatch({type: BPM_FUNC,data})
}
