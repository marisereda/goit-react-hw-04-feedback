import PropTypes from 'prop-types';
import {
  BsFillEmojiFrownFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiSmileFill,
} from 'react-icons/bs';
import { Box } from 'components/Box';
import { theme } from 'constants';
import { Number, NumberTotal, Text } from './Statistics.styled';

export const Statistics = ({
  total,
  positivePercentage,
  bad,
  neutral,
  good,
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-start"
      padding={0}
      gridGap={0}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        mb={5}
        gridGap={5}
      >
        <p>
          <BsFillEmojiFrownFill
            size={theme.sizes.icon}
            style={{ fill: theme.colors.iconBad }}
          />
          <Number>{bad}</Number>
        </p>
        <p>
          <BsFillEmojiNeutralFill
            size={theme.sizes.icon}
            style={{ fill: theme.colors.iconNeutral }}
          />
          <Number>{neutral}</Number>
        </p>
        <p>
          <BsFillEmojiSmileFill
            size={theme.sizes.icon}
            style={{ fill: theme.colors.iconGood }}
          />
          <Number>{good}</Number>
        </p>
      </Box>
      <Box>
        <Text>
          Total:<NumberTotal>{total}</NumberTotal>
        </Text>
        <Text>
          Positive feedback:
          <NumberTotal>{positivePercentage}%</NumberTotal>
        </Text>
      </Box>
    </Box>
  );
};

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
};
