import { SEARCH_ORGS, GET_ALL_ORGS, ADD_ORG } from './constants'

export default function organization9state(state = [], action) {
  switch(action.type) {
    case GET_ALL_ORGS:
    case ADD_ORG:
    case SEARCH_ORGS:
    default:
      return state;
  }
}