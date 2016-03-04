import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';
import fetch from '../../common/components/fetch';
import * as actions from '../../common/loan-calc/actions';
import { connect } from 'react-redux';
import Slider from './Slider.react';
import SelectBox from './SelectBox.react';
import Calculator from './Calculator.react';

class Page extends Component {


  static propTypes = {
    msg: PropTypes.object,
    loanCalc: PropTypes.object,
    setAmount: PropTypes.func.isRequired,
    setTerm: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this.getInterval = this.getInterval.bind(this);
    this.getOffer = this.getOffer.bind(this);
  }

  getInterval(interval) {
    return {
      min: interval.get('min'),
      max: interval.get('max'),
      step: interval.get('step'),
      defaultValue: interval.get('defaultValue')
    };
  }

  getOffer() {
    const offer = this.props.loanCalc.offer;
    return {
      totalPrincipal: offer.get('totalPrincipal'),
      term: offer.get('term'),
      totalCostOfCredit: offer.get('totalCostOfCredit'),
      totalRepayableAmount: offer.get('totalRepayableAmount'),
      monthlyPayment: offer.get('monthlyPayment'),
    }
  }

  render() {
    const { msg, loanCalc } = this.props;

    return (
      <div className="loan-page">
        <Helmet title={msg.title} />
        <Slider
          desc="amount"
          value={loanCalc.get('amount')}
          update={this.props.setAmount}
          { ...{ ...this.getInterval(loanCalc.get('amountInterval')) } }
        />
        <SelectBox
          desc="amount"
          value={loanCalc.get('amount') }
          update={this.props.setAmount}
          { ...{ ...this.getInterval(loanCalc.get('amountInterval')) } }
        />
        <br/>
        <Slider
          desc="term"
          value={loanCalc.get('term')}
          update={this.props.setTerm}
          { ...{ ...this.getInterval(loanCalc.get('termInterval')) } }
        />
        <SelectBox
          desc="term"
          value={loanCalc.get('term')}
          update={this.props.setTerm}
          { ...{ ...this.getInterval(loanCalc.get('termInterval')) } }
        />
        <button onClick={e => this.props.fetchFirstLoanOffer(loanCalc.get('amount'), loanCalc.get('term'))}>Get offer</button>
        <Calculator {...{...this.getOffer()}} />
      </div>
    );
  }

}

Page = fetch(actions.fetchConstraints)(Page);

export default connect(state => ({
  msg: state.intl.msg.loanCalc,
  loanCalc: state.loanCalc
}), actions)(Page);
