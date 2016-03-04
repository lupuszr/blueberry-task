export const FETCH_CONSTRAINTS_ERROR = 'FETCH_CONSTRAINTS_ERROR ';
export const FETCH_CONSTRAINTS_START = 'FETCH_CONSTRAINTS_START';
export const FETCH_CONSTRAINTS_SUCCESS = 'FETCH_CONSTRAINTS_SUCCESS';
export const FETCH_FIRST_LOAN_OFFER_ERROR = 'FETCH_FIRST_LOAN_OFFER_ERROR';
export const FETCH_FIRST_LOAN_OFFER_START = 'FETCH_FIRST_LOAN_OFFER_START';
export const FETCH_FIRST_LOAN_OFFER_SUCCESS = 'FETCH_FIRST_LOAN_OFFER_SUCCESS';
export const SET_AMOUNT = 'SET_AMOUNT';
export const SET_TERM = 'SET_TERM';

export function fetchConstraints() {
  return ({ fetch }) => ({
    type: 'FETCH_CONSTRAINTS',
    payload: {
      promise: fetch('https://js-developer-second-round.herokuapp.com/api/v1/application/constraints')
        .then(response => response.json())
    }
  });
}

// export function fetchFirstLoanOffer(amount, term) {
//   return ({ fetch }) => ({
//     type: 'FETCH_FIRST_LOAN_OFFER',
//     payload: {
//       promise: fetch(`https://js-developer-second-round.herokuapp.com/api/v1/application/first-loan-offer?amount=${amount}&term=${term}`)
//         .then(response => response.json())
//     }
//   });
// }

export function fetchFirstLoanOffer(amount, term) {
  return ({ fetch }) => ({
    type: 'FETCH_FIRST_LOAN_OFFER',
    payload: {
      promise: fetch(`https://js-developer-second-round.herokuapp.com/api/v1/application/real-first-loan-offer?amount=${amount}&term=${term}`)
        .then(response => response.json())
    }
  });
}

export function setAmount(amount) {
  return {
    type: SET_AMOUNT,
    payload: { amount }
  };
}

export function setTerm(term) {
  return {
    type: SET_TERM,
    payload: { term }
  };
}
