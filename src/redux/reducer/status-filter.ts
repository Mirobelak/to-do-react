import { SET_FILTER } from '../actionsTypes';
import { STATUS_FILTER } from '../../utils/STATUS_FILTER';
import { AnyAction } from 'redux';

const initialState = STATUS_FILTER.ALL;

const statusFilter = (state = initialState, action:AnyAction) => {
  switch(action.type) {
    case SET_FILTER: {
      return action.payload.filter
    }
    default: {
      return state
    }
  }
}

export default statusFilter;