
export const colors = {

    primary: '#2A9D8F', // Warm teal for trust and growth
    secondary: '#F4A261', // Soft orange for energy and optimism
    accent: '#E76F51', // Warm red for highlights and important actions

    pink: '#DE0D92',
    yellow: '#FDCA40',
    peach: '#FF715B',
    teal: '#34D1BF',
    green: '#7ED321',
    red: '#ED0423',
    absolute_red: '#FF0000',
    purple: '#6665DD',
    orange: '#F17105',
    azure: '#0496FF',
    blue: '#2662F0',
    electro: '#29E7CD',
    gray: '#636D73',

    primary_gray: '#F5F5F5',
    light_gray: '#E4EAF0',
    dark: '#25292D',
    success: '#2e7d32',
    error: '#d32f2f',
    brown: '#795548',
    white: '#fff',
    black: '#000',
    gray_50: '#f0f4f8',
    gray_100: '#d9e2ec',
    gray_200: '#bcccdc',
    gray_300: '#9fb3c8',
    gray_400: '#829ab1',
    gray_500: '#627d98',
    gray_600: '#486581',
    gray_700: '#334e68',
    gray_800: '#243b53',
    gray_900: '#102a43',
    text: {
        primary: '#212121',
        secondary: '#757575',
        disabled: '#9E9E9E',
        hint: '#BDBDBD',
        white: '#FFFFFF',
    },

    // chart colors
    male: "#36a2eb",
    female: "#ff6384",
    other: "#ffce56"
}

export const roleColors = {
    admin: colors.primary,
    member: colors.secondary,
    crp: colors.accent,
}


export const chipColors = {
    surgery: '#FF0303',
    consultation: colors.purple,
    diagnosis: '#ff9500',
    therapy: '#86A3B8',
    followup: colors.peach,
    checkup: colors.azure,
    emergency: colors.red,
    new: '#76BA99',
    repeat: '#4E6E81',
    attended: '#65C18C',
    missed: '#2C3639',
    rejected: '#2C3639',
    clickable: '#dae0e0',
    female: '#E8A0BF',
    male: '#19A7CE',
    other: colors.yellow,
}

export const tilesColors = {
    members: {
        primary: '#F4A261',
        secondary: '#F9B97F',
    },
    information: {
        primary: '#2A9D8F',
        secondary: '#54B0A1',
    },
    dashboard: {
        primary: '#2662F0',
        secondary: '#4B82F3',
    },
    contributions: {
        primary: '#DE0D92',
        secondary: '#A3E554',
    },
    loans: {
        primary: '#E76F51',
        secondary: '#EA8A71',
    },
    edit: {
        primary: '#34D1BF',
        secondary: '#60E1D3',
    }
}

export const languageColors = {

    marathi: colors.peach,
    hindi: colors.success,
    english: colors.azure,
    french: colors.purple,
}


export const confirmedPalette = {
    cold: colors.peach,
    fracture: colors.green,
    concussion: colors.azure,
    hepatitis: colors.purple,
    dermatitis: colors.electro,
    diabetes: colors.pink
}

export const fonts = {
    accent: '"Rubik", sans-serif',
    body: '"Roboto", sans-serif'
}

export const fontWeight = {
    light: 300,
    regular: 400,
    bold: 700,
}

export const textSizes = {
    8: '0.5rem',
    10: '0.625rem',
    12: '0.75rem',
    14: '0.875rem',
    16: '1rem',
    18: '1.125rem',
    20: '1.25rem',
    24: '1.5rem',
    26: '1.625rem',
    28: '1.75rem',
    32: '2rem',
    40: '2.5rem',
}

export const light = {
    bodyBg: '#F1F5F8',
    widgetBg: '#fff',
    highlight: '#FAFBFD',
    text: '#414D55',
    shadow: 'linear-gradient(270deg, rgba(255, 255, 255, 0.0001) 0%, #fff 100%)'
}

export const dark = {
    bodyBg: '#090A0A',
    widgetBg: '#171819',
    highlight: '#131414',
    text: '#9EA7AC',
    shadow: 'linear-gradient(270deg, rgba(23, 24, 25, 0.0001) 0%, #171819 100%)',
    shadowDarker: 'linear-gradient(270deg, rgba(23, 24, 25, 0.0001) 0%, #090A0A 100%)'
}

export const effects = {
    dashedDark: `1px dashed ${colors.dark}`,
    dashedLight: `1px dashed #A2C0D4`,
    widgetShadow: '0 1px 8px rgba(20, 46, 110, 0.1)',
    darkerShadow: '0 1px 8px rgba(0, 0, 0, 0.3)',
}

export const breakpoints = {
    mobileS: '@media screen and (min-width: 320px)',
    landscapeS: '@media screen and (min-width: 567.98px)',
    mobileM: '@media screen and (min-width: 374.98px)',
    mobileL: '@media screen and (min-width: 413.98px)',
    tablet: '@media screen and (min-width: 767.98px)',
    laptop: '@media screen and (min-width: 1023.98px)',
    laptopL: '@media screen and (min-width: 1279.98px)',
    desktop: '@media screen and (min-width: 1599.98px)',
}

export const flex = {
    col: `
      display: flex;
      flex-direction: column;
    `,
    center: `
     align-items: center;
     justify-content: center;
    `,
    between: `
     align-items: center;
     justify-content: space-between;
    `,
    full: `
      width: 100%;
      height: 100%;
    `,
}