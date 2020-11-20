/** @jsx jsx */
import { css } from '@emotion/core';
import { colors } from './colors';
import { cssLayout } from './layout';

export const cssGlobal = css`
  ${cssLayout} /* layout imported in */

  h1 {
    color: ${colors.default};
  }
  h2 {
    color: ${colors.primary};
  }
  h3 {
    color: ${colors.textLight};
  }
  h4 {
    color: ${colors.textDark};
    margin: 1.33em 0 0.33em;
  }
  a {
    color: ${colors.primary};
    text-decoration: none;
  }
  pre {
    font-size: 0.6em;
    line-height: 1.5;
    color: ${colors.textLight};
  }
  hr {
    border: none;
    border-bottom: 1px dashed ${colors.greyLight};
  }
  button {
    display: flex !important;
    align-items: center;
    justify-content: flex-end;
    background: ${colors.primary};
    margin: 0 0.4rem !important;
  }
  fieldset {
    border: 0;
  }
`;
