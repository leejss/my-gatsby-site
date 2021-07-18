import { theme } from "./theme";
import { createGlobalStyle } from "styled-components";

const reset = () => `
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}

*[hidden] {
    display: none;
}

body {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}

`;

const styles = () => `

html, body {
   
}

body {
    background: ${theme.colors.primaryDark};
    color: ${theme.colors.light}
}

* {
    box-sizing: border-box;
    line-height: 1.4em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-kerning: auto;
}

a {
    cursor: pointer;
    text-decoration: none;
    color: ${theme.colors.light};
    transition: 0.1s;
}

a:hover {
  color: ${theme.colors.hover};
}

::selection {
    color: ${theme.colors.secondary};
    background: transparent;
}

p {
  line-height: 1.5;
}
`;

export const GlobalStyle = createGlobalStyle`
    ${reset()}
    ${styles()}
`;
