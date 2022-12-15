import PropTypes from 'prop-types';
import { Component } from 'react';
import { Box } from 'components/Box';
import { Button, Input } from './FeedbackOptions.styled';
import { theme } from 'constants';

export class FeedbackOptions extends Component {
  state = {
    feedback: '',
  };

  static propTypes = {
    options: PropTypes.shape({
      bad: PropTypes.func.isRequired,
      neutral: PropTypes.func.isRequired,
      good: PropTypes.func.isRequired,
    }),
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.feedback.value;
    this.setState({ feedback: '' });
    this.props.onLeaveFeedback(name);
  };

  handleChange = e => {
    this.setState({ feedback: e.target.value });
  };

  render() {
    const { options } = this.props;
    const { feedback } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mb={5}
          gridGap={5}
        >
          {Object.entries(options).map(([value, Icon]) => {
            return (
              <label key={value}>
                <Input
                  type="radio"
                  name="feedback"
                  value={value}
                  onChange={this.handleChange}
                  checked={value === feedback}
                />
                <Icon size={theme.sizes.icon} />
              </label>
            );
          })}
        </Box>
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}
