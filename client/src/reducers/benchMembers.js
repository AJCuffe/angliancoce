export function benchMembersHasErrored(state = false, action) {
  switch(action.type) {
    case 'BENCHMEMBERS_HAS_ERRORED':
      return action.hasErrored;

    default:
      return state;
  }
}

export function benchMembersIsLoading(state = false, action) {
  switch(action.type) {
    case 'BENCHMEMBERS_IS_LOADING':
      return action.isLoading;

    default:
      return state;
  }
}

export function benchMembers(state = [], action) {
  switch(action.type) {
    case 'BENCHMEMBERS_FETCH_DATA_SUCCESS':
      return action.benchMembers;

    default:
      return state;
  }
}
