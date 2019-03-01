/**
 * Manage Fantasy Team Reducer
 * 
 * @param {Object} state
 * @param {Object} action
 * @returns {Object} 
 */
const manageFantasyTeamReducer = (state, action) => {
  if (action.type === 'addRider') {
    const newBalance = state.team.balance - action.rider.cost;

    return {
      ...state,
      team: {
        ...state.team,
        riders: state.team.riders.concat(action.rider),
        balance: Number(newBalance.toFixed(1))
      },
      blankRiders: state.blankRiders - 1
    };
  } else if (action.type === 'removeRider') {
    const newBalance = state.team.balance + action.rider.cost;

    return {
      ...state,
      team: {
        ...state.team,
        riders: state.team.riders.filter((r) => r._id !== action.rider._id),
        balance: Number(newBalance.toFixed(1))
      },
      blankRiders: state.blankRiders + 1
    };
  } else if (action.type === 'stage') {
    return { ...state, stage: action.stage };
  } else if (action.type === 'deadline') {
    return { ...state, deadline: action.deadline, isLocked: action.isLocked };
  } else if (action.type === 'pageChange') {
    return {
      ...state,
      riders: action.riders,
      totalItemsCount: action.totalItemsCount,
      activePage: action.activePage
    };
  } else if (action.type === 'teamRiders') {
    return {
      ...state,
      team: action.team,
      blankRiders: state.blankRiders - action.blankRiders,
      riders: action.riders,
      totalItemsCount: action.totalItemsCount,
      dataReady: action.dataReady
    };
  }

  return state;
};

export default manageFantasyTeamReducer;