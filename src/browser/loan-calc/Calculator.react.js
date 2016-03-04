import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';


class Calculator extends Component {
  static propTypes = {
    totalPrincipal: PropTypes.string,
    term: PropTypes.string,
    totalCostOfCredit: PropTypes.number,
    totalRepayableAmount: PropTypes.number,
    monthlyPayment: PropTypes.number
  };

  render() {
    const { totalPrincipal, term,  totalCostOfCredit, totalRepayableAmount, monthlyPayment } = this.props;

    return (
      <div>
        <p>Total Principal: { totalPrincipal }</p>
        <p> Term: { term }</p>
        <p> Total cost of credit:  { totalCostOfCredit }</p>
        <p> Total Repayable Amount: { totalRepayableAmount }</p>
        <p> Monthly Payment: { monthlyPayment }</p>
      </div>
    );
  }
} 

export default Calculator;