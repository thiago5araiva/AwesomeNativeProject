/**
 * @COLORS
 * dark (boolean): Whether this is a dark theme or a light theme
 * primary (string): The primary color of the app used to tint various elements. Usually you'll want to use your brand color for this.
 * background (string): The color of various backgrounds, such as background color for the screens.
 * card (string): The background color of card-like elements, such as headers, tab bars etc.
 * text (string): The text color of various elements.
 * border (string): The color of borders, e.g. header border, tab bar border etc.
 * notification (string): The color of Tab Navigator badge.
 */

const LIGHT_COLORS = {
  primary: 'rgb(255, 45, 85)',
  background: 'rgb(242, 242, 242)',
  card: 'rgb(255, 255, 255)',
  text: 'rgb(28, 28, 30)',
  border: 'rgb(199, 199, 204)',
  notification: 'rgb(255, 69, 58)',
};

const DARK_COLORS = {
  primary: 'rgb(255, 45, 85)',
  background: 'rgb(242, 242, 242)',
  card: 'rgb(255, 255, 255)',
  text: 'rgb(28, 28, 30)',
  border: 'rgb(199, 199, 204)',
  notification: 'rgb(255, 69, 58)',
};

export const LightTheme = {
  dark: false,
  colors: LIGHT_COLORS,
};

export const DarkTheme = {
  dark: true,
  colors: DARK_COLORS,
};
