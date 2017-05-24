export function coceMembersHasErrored(bool) {
  return {
    type: 'COCEMEMBERS_HAS_ERRORED',
    hasErrored: bool
  };
}

export function coceMembersIsLoading(bool) {
  return {
    type: 'COCEMEMBERS_IS_LOADING',
    isLoading: bool
  };
}

export function coceMembersFetchDataSuccess(coceMembers) {
  return {
    type: 'COCEMEMBERS_FETCH_DATA_SUCCESS',
    coceMembers
  };
}

export function coceMembersFetchData(url) {
  return(dispatch) => {
    dispatch(coceMembersIsLoading(true));

    fetch(url)
      .then((response) => {
        if(!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(coceMembersIsLoading(false));
        return response
      })
      .then((response) => response.json())
      .then((coceMembers) => dispatch(coceMembersFetchDataSuccess(coceMembers)))
      .catch(() => dispatch(coceMembersHasErrored(true)));
  };
}
