import { Record } from 'immutable';

const Interval = Record({
  min: 0,
  max: 30,
  step: 10,
  defaultValue: 15
});

export default Interval;
