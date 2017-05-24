import { combineReducers } from 'redux';
import { coceMembers, coceMembersHasErrored, coceMembersIsLoading } from './coceMembers';
import { benchMembers, benchMembersHasErrored, benchMembersIsLoading } from './benchMembers';

export default combineReducers({
  coceMembers,
  benchMembers,
  coceMembersHasErrored,
  benchMembersHasErrored,
  coceMembersIsLoading,
  benchMembersIsLoading
});
