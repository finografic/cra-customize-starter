import { lighten, darken } from 'polished';

export const colors = {
  // BASE COLORS
  default: '#363636', // dark grey
  primary: darken(0.1, '#99d8d0'), // aqua
  secondary: '#b7efcd', // light green pastel
  // GREYS
  greyXLight: '#f0f0f0',
  greyLight: '#cccccc',
  grey: '#999999',
  greyMed: '#999999',
  greyDark: '#666666',
  greyXDark: '#333333',
  // TEXT
  text: '#333333',
  textLight: '#999999',
};

colors.primaryLight = lighten(0.15, colors.primary);
colors.primaryDark = darken(0.15, colors.primary);
colors.secondaryLight = lighten(0.15, colors.secondary);
colors.secondaryDark = darken(0.15, colors.secondary);

export default colors;
