import { css, DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primaryDark: "#090f17",
    secondary: "#ebc86e",
    secondaryLight: "#f6dea5",
    secondaryDark: "#6b6349",
    lightest: "#FFFFFF",
    lighter: "#F8F8F8",
    light: "#F3F3F3",
    mediumLight: "#EEEEEE",
    medium: "#DDDDDD",
    mediumDark: "#999999",
    dark: "#666666",
    darker: "#444444",
    darkest: "#333333",
    black: "#000000",
    hover: "#47eb5d",
  },
  fontFamilies: {
    primary:
      '"Roboto", stack-sans, "Open Sans", "Lato", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  fontWheights: {
    thin: 200,
    regular: 400,
    bold: 600,
    extraBold: 800,
  },
  fontSizes: {
    small: ".8rem",
    normal: "1rem",
    medium: "1.25rem",
    mediumLarge: "1.5rem",
    large: "1.7rem",
    xLarge: "2rem",
    xxLarge: "36px",
    xxxLarge: "48px",
    xxxxLarge: "72px",
  },
  spaces: {
    p500: "5rem",
    p400: "4rem",
    p300: "3rem",
    p200: "2rem",
    p100: "1rem",
    p50: ".5rem",
    p25: ".25rem",
  },
  mq: {
    xs: "22em",
    sm: "40em",
    md: "54em",
    lg: "78em",
    xl: "125em",
  },
  media: {
    max: {
      xs: (...args: TemplateStringsArray[]) => css`
        @media (max-width: ${theme.mq.xs}) {
          ${
            //@ts-expect-error needed
            css(...args)
          }
        }
      `,
      sm: (...args: TemplateStringsArray[]) => css`
        @media (max-width: ${theme.mq.sm}) {
          ${
            //@ts-expect-error needed
            css(...args)
          }
        }
      `,
      md: (...args: TemplateStringsArray[]) => css`
        @media (max-width: ${theme.mq.md}) {
          ${
            //@ts-expect-error needed
            css(...args)
          }
        }
      `,
      lg: (...args: TemplateStringsArray[]) => css`
        @media (max-width: ${theme.mq.lg}) {
          ${
            //@ts-expect-error needed
            css(...args)
          }
        }
      `,
      xl: (...args: TemplateStringsArray[]) => css`
        @media (max-width: ${theme.mq.xl}) {
          ${
            //@ts-expect-error needed
            css(...args)
          }
        }
      `,
      hover: (...args: TemplateStringsArray[]) => css`
        @media not all and (hover: none) {
          ${
            //@ts-expect-error needed
            css(...args)
          }
        }
      `,
    },
    min: {
      xs: (...args: TemplateStringsArray[]) => css`
        @media (min-width: ${theme.mq.xs}) {
          ${
            //@ts-expect-error needed
            css(...args)
          }
        }
      `,
      sm: (...args: TemplateStringsArray[]) => css`
        @media (min-width: ${theme.mq.sm}) {
          ${
            //@ts-expect-error needed
            css(...args)
          }
        }
      `,
      md: (...args: TemplateStringsArray[]) => css`
        @media (min-width: ${theme.mq.md}) {
          ${
            //@ts-expect-error needed
            css(...args)
          }
        }
      `,
      lg: (...args: TemplateStringsArray[]) => css`
        @media (min-width: ${theme.mq.lg}) {
          ${
            //@ts-expect-error needed
            css(...args)
          }
        }
      `,
      xl: (...args: TemplateStringsArray[]) => css`
        @media (min-width: ${theme.mq.xl}) {
          ${
            //@ts-expect-error needed
            css(...args)
          }
        }
      `,
      hover: (...args: TemplateStringsArray[]) => css`
        @media not all and (hover: none) {
          ${
            //@ts-expect-error needed
            css(...args)
          }
        }
      `,
    },
  },
};
