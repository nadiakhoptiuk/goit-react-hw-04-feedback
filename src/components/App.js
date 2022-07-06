import React, { Component } from 'react';

import Section from './Section';
import FeedbackButtons from './FeedbackButtons';
import Statistics from './Statistics';
import Notification from './Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increase = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback = () => {
    const countsArr = Object.values(this.state);

    return countsArr.reduce((prevVal, currVal) => {
      return prevVal + currVal;
    });
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const types = Object.keys(this.state);
    const {
      state,
      increase,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    const totalCount = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackButtons btnTypes={types} onIncrease={increase} />
        </Section>

        <Section title="Statistics">
          {!totalCount ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              reportTypes={types}
              state={state}
              onTotalCount={totalCount}
              onPositivePercentage={positivePercentage}
            />
          )}
        </Section>
      </>
    );
  }
}
