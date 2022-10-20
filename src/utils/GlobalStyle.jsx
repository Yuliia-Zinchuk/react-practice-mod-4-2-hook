import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
   box-sizing: border-box;
   width: 100vw;
   overflow-x: hidden;
  }

  *,
  *::before,
  *::after {
   box-sizing: inherit;
  }

  body {
  margin: 0;
  text-align: center;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #212121;
  background-color: rgba(132, 200, 243, .5);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

ul, ol{
  padding: 0;
  margin: 0;
  list-style: none;
}

h1, h2, h3, p{
  margin: 0;
}

button{
    cursor: pointer;
    display: block;
    color: #ffffff;
    background-color: #3636bb;
    border: none;
    border-radius: 2px;
    padding: 10px 15px;
    margin: 10px auto;
    font-size: 16px;
    transition: background-color 500ms cubic-bezier(0.075, 0.82, 0.165, 1), box-shadow 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
    &:hover{
    background-color: rgba(58,19,214,0.66);
    box-shadow: 3px 3px 4px 0px rgba(58,19,214,0.66);
    }
}
`;
