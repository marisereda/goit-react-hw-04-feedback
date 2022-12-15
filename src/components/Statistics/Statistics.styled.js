import styled from 'styled-components';

export const Number = styled.span`
  display: block;
  margin-top: ${p => p.theme.space[3]}px;
  text-align: center;
  font-size: ${p => p.theme.fontSizes.numbers};
  color: ${p => p.theme.fontSizes.textAccent};
  font-weight: bold;
`;

export const NumberTotal = styled.span`
  display: inline-block;
  margin-top: ${p => p.theme.space[3]}px;
  margin-left: ${p => p.theme.space[3]}px;
  text-align: center;
  font-size: ${p => p.theme.fontSizes.numbers};
  color: ${p => p.theme.fontSizes.textAccent};
  font-weight: bold;
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.text};
  color: ${p => p.theme.fontSizes.textAccent};
`;
