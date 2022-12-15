import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  margin-right: auto;
  margin-left: auto;
  padding: ${p => p.theme.space[3]}px;
  min-width: ${p => p.theme.sizes.buttonWidth};
  border: none;
  outline: none;
  border-radius: ${p => p.theme.radii.primary};
  color: ${p => p.theme.colors.textPrimary};
  background-color: ${p => p.theme.colors.bgButton};
  font-weight: bold;
  font-size: ${p => p.theme.fontSizes.button};
  cursor: pointer;
`;

export const Input = styled.input`
  display: none;

  & + svg {
    fill: ${p => p.theme.colors.textLight};
    cursor: pointer;
  }

  &:checked {
    & + svg {
      fill: ${p => p.theme.colors.iconNeutral};
    }
  }
`;
