import { css } from '@emotion/core';
import { colors } from 'styles';

export const styles = css`
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
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
      font-weight: 700;
    }
    a.selected {
      color: ${colors.primary};
    }
  }
`;
