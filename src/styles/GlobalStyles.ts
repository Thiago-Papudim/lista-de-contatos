import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
  }

  button {
    cursor: pointer;
  }

  button, input {
    padding: 10px;
    margin: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
  }

  input {
    width: 100%;
  }

  @media (max-width: 768px) {
    button, input {
      width: 100%;
      margin: 8px 0;
    }
  }
`

export default GlobalStyles
