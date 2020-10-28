import { css } from '@emotion/core';
import { colors } from 'styles';

export const styles = css`
  ol {
    margin: 0;
  }
  li {
    font-size: 1.1em;
    padding: 0em 0;
    &::before {
      content: none;
    }
    a {
      display: block;
      padding: 0.3em;
      color: ${colors.default};
      font-weight: 500;
    }
    a.selected {
      color: ${colors.primary};
    }
  }
`;
