import React from 'react';
import PropTypes from 'prop-types';
import '../css/rateCheckbox.css';

const RATE1 = 0;
const RATE2 = 1;
const RATE3 = 2;
const RATE4 = 3;
const RATE5 = 4;

class RateCheckbox extends React.Component {
  render() {
    const { rate, onChange } = this.props;
    const checkedStar = (
      <span
        role="img"
        aria-label="rate"
        className="checkedStar"
      >
        ⭐
      </span>);
    const nocheckedStar = <span className="nocheckedStar">☆</span>;

    return (
      <main className="rate-container">
        <label htmlFor="ratePosition1" onClick={ onChange } aria-hidden="true">
          { (rate > RATE1) ? checkedStar : nocheckedStar }
          <input
            type="checkbox"
            name="rate"
            value="1"
            id="ratePosition1"
          />
        </label>
        <label htmlFor="ratePosition2" onClick={ onChange } aria-hidden="true">
          { (rate > RATE2) ? checkedStar : nocheckedStar }
          <input
            type="checkbox"
            name="rate"
            value="2"
            id="ratePosition2"
          />
        </label>
        <label htmlFor="ratePosition3" onClick={ onChange } aria-hidden="true">
          { (rate > RATE3) ? checkedStar : nocheckedStar }
          <input
            type="checkbox"
            name="rate"
            value="3"
            id="ratePosition3"
          />
        </label>
        <label htmlFor="ratePosition4" onClick={ onChange } aria-hidden="true">
          { (rate > RATE4) ? checkedStar : nocheckedStar }
          <input
            type="checkbox"
            name="rate"
            value="4"
            id="ratePosition4"
          />
        </label>
        <label htmlFor="ratePosition5" onClick={ onChange } aria-hidden="true">
          { (rate > RATE5) ? checkedStar : nocheckedStar }
          <input
            type="checkbox"
            name="rate"
            value="5"
            id="ratePosition5"
          />
        </label>
      </main>
    );
  }
}

RateCheckbox.propTypes = {
  rate: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RateCheckbox;
