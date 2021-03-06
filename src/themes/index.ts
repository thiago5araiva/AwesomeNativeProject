import { DefaultTheme, Theme } from '@react-navigation/native';

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

export type CustomTheme = {
  colors: {
    black: string;
    grey: string;
    error: string;
    success: string;
    white: string;
  };
} & Theme;

export type DefaultThemeType = {
  colors: {
    primary: string;
    background: string;
    card: 'rgb(255, 255, 255)';
    text: 'rgb(28, 28, 30)';
    border: 'rgb(199, 199, 204)';
    notification: 'rgb(255, 69, 58)';
    black: string;
    grey: string;
    error: string;
    success: string;
    white: string;
  };
  spacing: {
    sm: {
      primary: number;
      secondary: number;
      tertiary: number;
    };
    md: {
      primary: number;
      secondary: number;
      tertiary: number;
    };
    lg: {
      primary: number;
      secondary: number;
      tertiary: number;
    };
  };
};

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

export const DEFAULT_THEME = {
  colors: {
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
  spacing: {
    sm: {
      primary: 3,
      secondary: 6,
      tertiary: 9,
    },
    md: {
      primary: 15,
      secondary: 24,
      tertiary: 39,
    },
    lg: {
      primary: 55,
      secondary: 94,
      tertiary: 149,
    },
  },
};
