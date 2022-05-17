import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
} 
button {
  font-family: inherit;
  border: 0;
  background: none;
  outline: none;
}
input {
  border: none;
  &:focus {
    outline: none;
  }
}
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}`;

export default GlobalStyles;
