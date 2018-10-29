export const idReducer = (state = 0, action) => {
  switch(action.type) {
    case 'GET_ID':
      return action.id
    case 'LOG_OUT':
      return 0
    default:
      return state
  }
}