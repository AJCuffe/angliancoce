export function benchMembersHasErrored(bool) {
  return {
    type: 'BENCHMEMBERS_HAS_ERRORED',
    hasErrored: bool
  };
}

export function benchMembersIsLoading(bool) {
  return {
    type: 'BENCHMEMBERS_IS_LOADING',
    isLoading: bool
  };
}

export function benchMembersFetchDataSuccess(benchMembers) {
  return {
    type: 'BENCHMEMBERS_FETCH_DATA_SUCCESS',
    benchMembers
  };
}

export function benchMembersFetchData(url) {
  return(dispatch) => {
    dispatch(benchMembersIsLoading(true));

    fetch(url)
      .then((response) => {
        if(!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(benchMembersIsLoading(false));
        return response
      })
      .then((response) => response.json())
      .then((benchMembers) => dispatch(benchMembersFetchDataSuccess(benchMembers)))
      .catch(() => dispatch(benchMembersHasErrored(true)));
  };
}
