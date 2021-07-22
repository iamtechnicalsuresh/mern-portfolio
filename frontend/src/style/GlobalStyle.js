import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: inherit;
    }

    :root {
        --bg-color: #10121b;
        --nav-color: #191d2b;
        --primary-font-color: #a4acc4;
        --black-color: #14242C;
        --blue-color: #14242C;
        --state-blue-color: #1C344C;
        --white-color: #F8F0FB;
        --ash-grey-color: #1C344C;
        --font-color: #808080;
    }

    body {
        font-family: 'Poppins', sans-serif;
        background-color: var(--bg-color);
        color: var(--primary-font-color);

        .nav-toggle {
        transform: translateX(0);
        opacity: 1;
    }
    }

    img {
        width: 100%;
    }

    .a {
      text-decoration: none;
    }

    /* .nav-toggle {
        transform: translateX(0);
        opacity: 1;
    } */

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
      color: var(--white-color);
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
