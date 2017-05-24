export function coceMembersHasErrored(state = false, action) {
  switch(action.type) {
    case 'COCEMEMBERS_HAS_ERRORED':
      return action.hasErrored;

    default:
      return state;
  }
}

export function coceMembersIsLoading(state = false, action) {
  switch(action.type) {
    case 'COCEMEMBERS_IS_LOADING':
      return action.isLoading;

    default:
      return state;
  }
}

export function coceMembers(state = [], action) {
  switch(action.type) {
    case 'COCEMEMBERS_FETCH_DATA_SUCCESS':
      return action.coceMembers;

    default:
      return state;
  }
}
