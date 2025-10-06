export const BREAKPOINTS = {
    mobileMax: 767,
    tabletMin: 768,
    tabletMax: 1023,
    desktopMin: 1024,
}

export const MEDIA = {
    mobile: `(max-width: ${BREAKPOINTS.mobileMax}px)`,
    tablet: `(min-width: ${BREAKPOINTS.tabletMin}px) and (max-width: ${BREAKPOINTS.tabletMax}px)`,
    desktop: `(min-width: ${BREAKPOINTS.desktopMin}px)`,
};

export const MAIN_CONTENT = 'main-content';