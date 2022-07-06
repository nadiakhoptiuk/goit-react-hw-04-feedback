import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default class Statistics extends Component {
  static propTypes = {
    reportTypes: PropTypes.arrayOf(PropTypes.string.isRequired),
    state: PropTypes.shape({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    }),
    onTotalCount: PropTypes.number.isRequired,
    onPositivePercentage: PropTypes.number.isRequired,
  };

  render() {
    const { reportTypes, state, onTotalCount, onPositivePercentage } =
      this.props;

    return (
      <>
        <ul className="reportList">
          {reportTypes.map(reportType => (
            <li key={reportType} className={s.statItem}>
              <p className={s.reportType}>{reportType}:</p>
              <span>{state[reportType]}</span>
            </li>
          ))}
          {onTotalCount ? (
            <li key="total" className={s.statItem}>
              <p className={s.total}>Total:</p>
              <span>{onTotalCount}</span>
            </li>
          ) : null}
          {state.good ? (
            <li key="positivePer" className={s.statItem}>
              <p className={s.positive}>Positive Feedback:</p>
              <span>{onPositivePercentage}%</span>
            </li>
          ) : null}
        </ul>
      </>
    );
  }
}
