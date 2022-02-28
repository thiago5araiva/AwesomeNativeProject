import {
  DefaultTheme,
  NavigationContainerProps,
  Theme,
} from '@react-navigation/native';
console.log('🚀 DefaultTheme', DefaultTheme);

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

type CustomTheme = {
  colors: {
    black: 'rgba(34, 34, 34, 1)';
    grey: 'rgba(155, 155, 155, 1)';
    error: 'rgba(240, 31, 14, 1)';
    success: 'rgba(42, 169, 82, 1)';
    white: 'rgba(255, 255, 255, 1)';
  };
} & Theme;

export const LightTheme: CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgba(219, 48, 34, 1)',
    background: 'rgba(249, 249, 249, 1)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
    black: 'rgba(34, 34, 34, 1)',
    grey: 'rgba(155, 155, 155, 1)',
    error: 'rgba(240, 31, 14, 1)',
    success: 'rgba(42, 169, 82, 1)',
    white: 'rgba(255, 255, 255, 1)',
  },
};

export const DarkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgba(219, 48, 34, 1)',
    background: 'rgba(249, 249, 249, 1)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
    black: 'rgba(34, 34, 34, 1)',
    grey: 'rgba(155, 155, 155, 1)',
    error: 'rgba(240, 31, 14, 1)',
    success: 'rgba(42, 169, 82, 1)',
    white: 'rgba(255, 255, 255, 1)',
  },
};
