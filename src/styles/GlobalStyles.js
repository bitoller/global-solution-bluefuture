import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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
menu, nav, output, ruby, section, summary,
time, mark, audio, video, button, input {
  margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
  box-sizing: border-box;
  text-decoration: none;
  /* font-family: var(--font-family-2); */
  list-style-type: none;
}

button, a, input {
  cursor: pointer;
}

body {
  height: 100vh;
  width: 100vw;
  font-size: 1rem;
}

/* :root {
  --color-primary: #0b0c12;
  --color-accent: #d02030;
} */
`;