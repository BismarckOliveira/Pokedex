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



body{
    background: no-repeat linear-gradient(to left bottom, #c1dcd8, #ace0d4, #9ae3ca, #8ce6bc, #85e7a9, #82e7a9, #7fe7a8, #7ce7a8, #7de6ba, #86e3c9, #94e0d3, #a6dcd8);
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