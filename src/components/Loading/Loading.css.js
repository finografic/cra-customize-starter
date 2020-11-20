import { css } from '@emotion/core';
import { layout } from 'styles';

export const styles = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: ${layout.header.height};
  padding-bottom: ${layout.footer.height};
`;
