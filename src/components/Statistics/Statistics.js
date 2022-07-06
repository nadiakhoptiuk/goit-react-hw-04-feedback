import React from 'react';
// import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({
  reportTypes,
  goodValue,
  totalCount,
  positivePercentage,
}) {
  return (
    <>
      <ul className="reportList">
        {reportTypes.map(reportType => (
          <li key={reportType[0]} className={s.statItem}>
            <p className={s.reportType}>{reportType[0]}:</p>
            <span>{reportType[1]}</span>
          </li>
        ))}
        {totalCount ? (
          <li key="total" className={s.statItem}>
            <p className={s.total}>Total:</p>
            <span>{totalCount}</span>
          </li>
        ) : null}
        {goodValue ? (
          <li key="positivePer" className={s.statItem}>
            <p className={s.positive}>Positive Feedback:</p>
            <span>{positivePercentage}%</span>
          </li>
        ) : null}
      </ul>
    </>
  );
}

// Statistics.propTypes = {
//   reportTypes: PropTypes.arrayOf(PropTypes.string.isRequired),
//   state: PropTypes.shape({
//     good: PropTypes.number.isRequired,
//     neutral: PropTypes.number.isRequired,
//     bad: PropTypes.number.isRequired,
//   }),
//   onTotalCount: PropTypes.number.isRequired,
//   onPositivePercentage: PropTypes.number.isRequired,
// };
