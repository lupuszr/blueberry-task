import * as actions from './actions';
import Interval from './interval';
import Offer from './offer';
import { Map, Record } from 'immutable';

const InitialState = Record({
  amountInterval: Interval(),
  termInterval: Interval(),
  offer: Offer(),
  amount: 400,
  term: 15
});
const initialState = new InitialState;

const revive = ({ amountInterval, termInterval,offer }) => initialState.merge({
  amountInterval: Interval(amountInterval),
  termInterval: Interval(termInterval),
  offer: Offer(offer),
  amount: amountInterval.defaultValue,
  term: termInterval.defaultValue
});

export default function loanCalcReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return revive(state);

  switch (action.type) {

    case actions.FETCH_CONSTRAINTS_SUCCESS: {
      const amountInterval = new Interval(action.payload.amountInterval);
      const termInterval = new Interval(action.payload.termInterval);
      const amount = action.payload.amountInterval.defaultValue
      const term = action.payload.termInterval.defaultValue
      return state.set('amountInterval', amountInterval).set('termInterval', termInterval).set('amount', amount).set('term', term);
    }

    case actions.FETCH_FIRST_LOAN_OFFER_SUCCESS: {
      const offer = new Offer(action.payload);
      return state.set('offer', offer);
    }

    case actions.SET_AMOUNT: {
      return state.set('amount', action.payload.amount);
    }

    case actions.SET_TERM: {
      return state.set('term', action.payload.term);
    }

  }

  return state;
}
