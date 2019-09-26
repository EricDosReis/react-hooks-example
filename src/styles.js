import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: #fdfcf4;
    color: #444;
    font-family: "Ubuntu", "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Oxygen", "Helvetica Neue", Arial, sans-serif;
    font-size: 100%;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    outline: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
  }

  p {
    line-height: 1.3;
  }

  a {
    text-decoration: none;
  }

  #root {
    width: 31.25rem;
    margin: 2rem auto 0;
    max-width: 90%;
  }

  input {
    background: none;
    border: 1px solid #2b5876;
    border-radius: 4px;
    color: #403e3e;
    font-family: inherit;
    outline: none;
    padding: .5rem;
  }

  .button {
    background: none;
    border: 2px solid #2b5876;
    border-radius: 4px;
    color: #2b5876;
    font-family: inherit;
    font-weight: bold;
    opacity: 1;
    outline: none;
    padding: .5rem 1rem;

    &.button--danger {
      border: none;
      color: red;
    }

    &:focus, &:hover {
      cursor: pointer;
      opacity: .75;
    }
  }
`;

export const Container = styled.main`
  form {
    display: flex;

    input {
      flex: 1;
      margin-right: 1em;
    }
  }
`;

export const Tasks = styled.ul`
  border: 1px dashed #cacaca;
  border-bottom: none;

  list-style: none;
  margin: 1.5rem 0;
  padding: 0;

  li {
    border-bottom: 1px dashed #cacaca;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5em 0 0.5em 1em;
  }
`;
