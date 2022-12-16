import React, { useState } from 'react';
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

export const App = () => {
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [good, setGood] = useState(0);

  const countTotalFeedback = () => {
    return bad + neutral + good;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const onLeaveFeedback = name => {
    switch (name) {
      case 'bad':
        setBad(bad => bad + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'good':
        setGood(good => good + 1);
        break;
      default:
        return;
    }
  };

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
        <FeedbackOptions options={OPTIONS} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section title="Statistics" bgColor={theme.colors.bgPrimary}>
        {bad > 0 || neutral > 0 || good > 0 ? (
          <Statistics
            bad={bad}
            neutral={neutral}
            good={good}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="There is no any feedback" />
        )}
      </Section>

      <GlobalStyle />
    </Box>
  );
};
