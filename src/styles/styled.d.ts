import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primaryDark: string;
      secondary: string;
      secondaryLight: string;
      secondaryDark: string;
      lightest: string;
      lighter: string;
      light: string;
      mediumLight: string;
      medium: string;
      mediumDark: string;
      dark: string;
      darker: string;
      darkest: string;
      black: string;
      hover: string;
    };

    fontFamilies: {
      primary: string;
    };

    fontWheights: {
      thin: number;
      regular: number;
      bold: number;
      extraBold: number;
    };

    fontSizes: {
      small: string;
      normal: string;
      medium: string;
      mediumLarge: string;
      large: string;
      xLarge: string;
      xxLarge: string;
      xxxLarge: string;
      xxxxLarge: string;
    };

    spaces: {
      p500: string;
      p400: string;
      p300: string;
      p200: string;
      p100: string;
      p50: string;
      p25: string;
    };

    mq: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    media: {
      max: {
        xs: (...args: TemplateStringsArray[]) => ReturnType<typeof css>;
        sm: (...args: TemplateStringsArray[]) => ReturnType<typeof css>;
        md: (...args: TemplateStringsArray[]) => ReturnType<typeof css>;
        lg: (...args: TemplateStringsArray[]) => ReturnType<typeof css>;
        xl: (...args: TemplateStringsArray[]) => ReturnType<typeof css>;
        hover: (...args: TemplateStringsArray[]) => ReturnType<typeof css>;
      };
      min: {
        xs: (...args: TemplateStringsArray[]) => ReturnType<typeof css>;
        sm: (...args: TemplateStringsArray[]) => ReturnType<typeof css>;
        md: (...args: TemplateStringsArray[]) => ReturnType<typeof css>;
        lg: (...args: TemplateStringsArray[]) => ReturnType<typeof css>;
        xl: (...args: TemplateStringsArray[]) => ReturnType<typeof css>;
        hover: (...args: TemplateStringsArray[]) => ReturnType<typeof css>;
      };
    };
  }
}
