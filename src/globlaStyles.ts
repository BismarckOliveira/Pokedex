import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    user-select: none;
	font-weight: 300;
    -webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
}

body, textarea, input, button{
    font-family: 'Roboto';
    font-weight: 400;
}

button{
    cursor: pointer;
}

textarea:focus, input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
}

`

export default GlobalStyle