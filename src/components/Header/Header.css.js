import { css } from '@emotion/core';

export const styles = css`
  h1 {
    margin: 0em 0;
    svg {
      transform: scale(0.9) translateY(-0.1em);
      margin-right: 0.1em;
    }
  }
  h2 {
    margin: 0em 0;
    svg {
      transform: scale(0.9) translateY(-0.1em);
      margin-right: 0.05em;
    }
  }
  .header-left {
    justify-content: flex-start;
  }
  .header-right {
    justify-content: flex-end;
    text-align: right;
  }
`;
