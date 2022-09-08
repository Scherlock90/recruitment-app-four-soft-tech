const size = {
  mobileSmall: '320px',
  mobileMedium: '375px',
  mobileLarge: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopLarge: '1440px',
  desktop: '2560px'
};

export const device = {
  mobileSmall: `(min-width: ${size.mobileSmall})`,
  mobileMedium: `(min-width: ${size.mobileMedium})`,
  mobileLarge: `(min-width: ${size.mobileLarge})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopLarge: `(min-width: ${size.laptopLarge})`,
  desktop: `(min-width: ${size.desktop})`
};
