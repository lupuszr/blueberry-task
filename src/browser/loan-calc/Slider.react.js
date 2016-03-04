import Component from 'react-pure-render/component';
import { connect } from 'react-redux';
import React, { PropTypes } from 'react';
import * as actions from '../../common/loan-calc/actions';
import './Slider.scss'

class Slider extends Component {
  static propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    defaultValue: PropTypes.number,
    value: PropTypes.number,
    desc: PropTypes.string,
    loanCalc: PropTypes.object,
    update: PropTypes.func.isRequired,
    fetchFirstLoanOffer: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.onUpdate = this.onUpdate.bind(this);
  }

  onUpdate(e) {
    const { update, fetchFirstLoanOffer, loanCalc, desc } = this.props;
    update(e.target.value);
    if (desc === "amount"){
      fetchFirstLoanOffer(e.target.value, loanCalc.get('term'));
    } else {
      fetchFirstLoanOffer(loanCalc.get('amount'), e.target.value);
    }
  }

  render() {
    const { min, max, step, defaultValue, value } = this.props;
    return (
      <div className="container">
        <input type="range" value={value || defaultValue} {...{ min, max, step, defaultValue }} onChange={this.onUpdate} />
      </div>
    );
  }
} 

export default connect(state => ({
  loanCalc: state.loanCalc
}), actions)(Slider);
