import React, { Component } from 'react';
import {
  BsFillEmojiFrownFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiSmileFill,
} from 'react-icons/bs';
import { GlobalStyle } from 'components/GlobalStyle';
import { Box } from 'components/Box';
import { Section } from 'components/Section';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';
import { Notification } from 'components/Notification';
import { theme } from 'constants';

const OPTIONS = {
  bad: BsFillEmojiFrownFill,
  neutral: BsFillEmojiNeutralFill,
  good: BsFillEmojiSmileFill,
};

export class App extends Component {
  state = {
    bad: 0,
    neutral: 0,
    good: 0,
  };

  countTotalFeedback = () => {
    const { bad, neutral, good } = this.state;
    return bad + neutral + good;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  onLeaveFeedback = name => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    const { bad, neutral, good } = this.state;
    return (
      <Box
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        padding={6}
      >
        <Section title="Please leave feedback" bgColor={theme.colors.bgLight}>
          <FeedbackOptions
            options={OPTIONS}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics" bgColor={theme.colors.bgPrimary}>
          {this.state.bad > 0 ||
          this.state.neutral > 0 ||
          this.state.good > 0 ? (
            <Statistics
              bad={bad}
              neutral={neutral}
              good={good}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no any feedback" />
          )}
        </Section>

        <GlobalStyle />
      </Box>
    );
  }
}
