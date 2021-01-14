/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { css, jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import Color from 'color';
import { colors } from 'styles';
import { styles } from './Button.css';

const isColor = (strColor) => {
  try {
    return Color(strColor);
  } catch (error) {
    console.error(error);
  }
};

export const Button = ({ type = 'button', variant = 'solid', color, label, ...props }) => {
  // LABEL ================================================== //

  const Content = () => <React.Fragment>{label && <span>{label}</span>}</React.Fragment>;

  // GENERATE SMART COLOR-SCHEME =================================== //

  let colorAlt;
  let stylesColor;
  let hoverFactor = 0.25;
  if (color && colors[color]) {
    color = Color(colors[color]);
  } else if (color && isColor(color)) {
    color = Color(color);
  } else {
    color = colors.default ? Color(colors.default).lighten(0.75) : Color(colors.primary);
  }

  // GET BG COLOR LUMINOSITY AND INTELLIGENTLY SET TEXT+ICON COLOR
  colorAlt = color.luminosity() <= 0.7 ? Color('white') : Color(colors.text);

  // DIMENSIONS, PADDING ETC... ====================================== //

  let borderRadius;
  let buttonScale;
  let buttonPadding;

  // GENERATE CSS, DEPENDING ON variant PROP ========================== //

  switch (variant) {
  case 'outline':
    stylesColor = css`
        & {
          background-color: ${color.alpha(0).string()};
          color: ${color.hex()};
          border-color: ${color.hex()};
          padding: ${buttonPadding};
          border-radius: ${borderRadius};
          transform: scale(${buttonScale});
        }
        &:not([disabled]):hover {
          background-color: ${color.alpha(hoverFactor).string()};
          color: ${color.darken(hoverFactor).hex()};
          border-color: ${color.darken(hoverFactor).hex()};
        }
      `;
    break;
  case 'clear':
    stylesColor = css`
        & {
          background-color: ${color.alpha(0).string()};
          color: ${color.hex()};
          border-color: ${color.alpha(0).string()};
          padding: ${buttonPadding};
          border-radius: ${borderRadius};
          transform: scale(${buttonScale});
        }
        &:not([disabled]):hover {
          background-color: ${color.alpha(hoverFactor).string()};
          color: ${color.darken(hoverFactor).hex()};
          border-color: ${color.alpha(0).string()};
        }
      `;
    break;
  case 'solid':
  default:
    stylesColor = css`
        & {
          background-color: ${color.hex()};
          color: ${colorAlt.hex()};
          border-color: ${color.hex()};
          padding: ${buttonPadding};
          border-radius: ${borderRadius};
          transform: scale(${buttonScale});
        }
        &:not([disabled]):hover {
          background-color: ${color.darken(hoverFactor).hex()};
          color: ${colorAlt.hex()};
        }
      `;
    break;
  }

  // =============================================================== //

  // CSS STYLES
  const buttonStyles = new Set();
  buttonStyles.add(styles);
  buttonStyles.add(stylesColor);

  // =============================================================== //

  return (
    <button type={type} aria-label={label} {...props} css={[...buttonStyles]}>
      <Content />
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.string,
};

// =============================================================== //

export const ButtonLink = (props) => (
  <Link to={props.to}>
    <Button {...props} />
  </Link>
);

ButtonLink.propTypes = {
  to: PropTypes.string,
};
