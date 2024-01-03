import theme from './theme';

export const devices = {
  mobileS: `(minWidth: ${theme.breakpoints.size.mobileS})`,
  mobileM: `(minWidth: ${theme.breakpoints.size.mobileM})`,
  mobileL: `(minWidth: ${theme.breakpoints.size.mobileL})`,
  tablet: `(minWidth: ${theme.breakpoints.size.tablet})`,
  laptop: `(minWidth: ${theme.breakpoints.size.laptop})`,
  laptopL: `(minWidth: ${theme.breakpoints.size.laptopL})`,
  desktop: `(minWidth: ${theme.breakpoints.size.desktop})`,
  desktopL: `(minWidth: ${theme.breakpoints.size.desktopL})`,
};
