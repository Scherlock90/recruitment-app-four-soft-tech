import { css } from 'styled-components';
import { TCssStylesByDeviceWidth } from './types';

export const SIZE = {
  smartphoneMin: 320,
  smartphoneMax: 480,
  smallTablet: 767,
  tabletMin: 768,
  tabletMax: 1024,
  laptopMin: 1025,
  laptopMax: 1280,
  desktop: 1281
};

export const MEDIA_QURIES = {
  /*
    ##Device = Most of the Smartphones Mobiles (Portrait)
    ##Screen = B/w 320px to 479px
  */
  smartphones: `(min-width: ${SIZE.smartphoneMin}px)`,
  /*
    ##Device = Low Resolution Tablets, Mobiles (Landscape)
    ##Screen = B/w 481px to 767px
  */
  smallTablet: `(min-width: ${SIZE.smartphoneMax + 1}px)`,
  /*
    ##Device = Tablets
    ##Screen = B/w 768px to 1024px
  */
  tablet: `(min-width: ${SIZE.tabletMin}px)`,
  /*
    ##Device = Laptops, Desktops
    ##Screen = B/w 1025px to 1280px
  */
  laptop: `(min-width: ${SIZE.laptopMin}px)`,
  /*
    ##Device = Desktops
    ##Screen = 1281px to higher resolution desktops
  */
  desktop: `(min-width: ${SIZE.desktop}px)`
};

export const cssStylesByDeviceWidth: TCssStylesByDeviceWidth = (typeDevice, props) => css`
  @media ${MEDIA_QURIES[typeDevice]} {
    ${props}
  }
`;
