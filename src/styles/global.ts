import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:focus {
    outline: none;
}

body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
}

body, input, button, textarea {
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 1rem;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Baloo 2', sans-serif;
    line-height: 1.1;
}

h1 {
    font-size: 3rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-title']};
}

h2, h3 {
    color: ${(props) => props.theme['base-subtitle']};
}

h2 {
    font-size: 2rem;
    font-weight: 800;
}

h3 {
    font-size: 1.25rem;
    font-weight: 700;
}

@media (max-width: 768px) {
    html {
        font-size: 87.5%;
    }

    h1 {
    font-size: 2.5rem;
    }
}
`
