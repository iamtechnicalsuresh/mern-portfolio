import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: inherit;
    }

    :root {
        --black-color: #171214;
        --blue-color: #6320EE;
        --state-blue-color: #8075FF;
        --white-color: #F8F0FB;
        --ash-grey-color: #CAD5CA;
        --font-color: #808080;
    }

    body {
        font-family: 'Poppins', sans-serif;
        /* background: linear-gradient(to top, var(--blue-color), var(--state-blue-color)) ; */
        background-color: var(--state-blue-color);
    }

    img {
        width: 100%;
    }

    .a {
      text-decoration: none;
    }

    .toggle {
        transform: translateX(0);
        opacity: 1;
    }

    .btn {
      display: inline-block;
      width: 100%;
      padding: 0.3rem;
      cursor: pointer;
      border-radius: 5px;
      font-size: 1rem;
    }

    .btn-transparent {
      background-color: transparent;
      border: var(--white-color) solid 2px;
      outline: none;
      transition: all 0.5s ease;
    }

    .btn-transparent:hover {
      background-color: var(--blue-color);
      color: var(--white-color);
    }

    @keyframes typewriter {
    to {
      left: 100%;
    }
  }

  @keyframes slide {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export default GlobalStyle;
