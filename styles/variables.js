// Fonts
export const fontPrimary = '"Univers", sans-serif'
export const fontSecondary = '"Univers", sans-serif'

// Colors
export const swatchBody = '#eeeeee'

// Device width
export const widthMobile = 768
export const widthTablet = 991
export const widthDesktop = 1199

// Media queries
export const mobile = `only screen and (max-width : ${widthMobile}px)`
export const tablet = `only screen and (min-width : ${widthMobile + 1}px) and (max-width : ${widthTablet}px)`
export const tabletUp = `only screen and (min-width : ${widthMobile + 1}px)`
export const tabletDown = `only screen and (max-width : ${widthTablet}px)`
export const desktop = `only screen and (min-width : ${widthTablet + 1}px) and (max-width : ${widthDesktop}px)`
export const desktopUp = `only screen and (min-width : ${widthTablet + 1}px)`
export const desktopDown = `only screen and (max-width : ${widthDesktop}px)`
export const desktopBig = `only screen and (min-width : ${widthDesktop + 1}px)`
