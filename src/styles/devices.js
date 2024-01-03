import theme from './theme';

export const devices = {
  mobileS: `(min-width: ${theme.breakpoints.size.mobileS})`,
  mobileM: `(min-width: ${theme.breakpoints.size.mobileM})`,
  mobileL: `(min-width: ${theme.breakpoints.size.mobileL})`,
  tablet: `(min-width: ${theme.breakpoints.size.tablet})`,
  laptop: `(min-width: ${theme.breakpoints.size.laptop})`,
  laptopL: `(min-width: ${theme.breakpoints.size.laptopL})`,
  desktop: `(min-width: ${theme.breakpoints.size.desktop})`,
  desktopL: `(min-width: ${theme.breakpoints.size.desktopL})`,
};
