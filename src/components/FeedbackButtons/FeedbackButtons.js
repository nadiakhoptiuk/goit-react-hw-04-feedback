import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackButtons.module.css';

export default class FeedbackButtons extends Component {
  static propTypes = {
    btnTypes: PropTypes.arrayOf(PropTypes.string.isRequired),
    onIncrease: PropTypes.func.isRequired,
  };

  render() {
    const { btnTypes, onIncrease } = this.props;
    return (
      <ul className="btnList">
        {btnTypes.map((btnType, index) => {
          return (
            <li key={index}>
              <button
                type="button"
                className={s[btnType]}
                onClick={() => onIncrease(btnType)}
              >
                {btnType}
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
