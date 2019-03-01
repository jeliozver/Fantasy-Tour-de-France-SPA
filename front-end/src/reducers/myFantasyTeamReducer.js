/**
 * My Fantasy Team Reducer
 * 
 * @param {Object} state
 * @param {Object} action
 * @returns {Object} 
 */
const myFantasyTeamReducer = (state, action) => {
  if (action.type === 'team') {
    return { ...state, team: action.team };
  } else if (action.type === 'blanks') {
    return { ...state, blanks: state.blanks - action.blanks };
  }

  return state;
};

export default myFantasyTeamReducer;