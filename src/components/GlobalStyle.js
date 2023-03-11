import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
 body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          margin: 0;
          padding: 0;
        }
        img {
          display: block;
          max-width: 100%;
          height: auto;
        }
        ul {
          list-style: none;
          margin: 0;
          padding-left: 0;
        }
        a {
          text-decoration: none;
          cursor: pointer;
        }
        a:focus {
          outline: none;
        }
        button {
          display: block;
          margin: 0 auto;
          cursor: pointer;
          border: none;
        }
        button:focus {
          outline: none;
        }
         button:focus {
          outline: none;
        }





code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;
