import styled from 'styled-components'

export const Container = styled.div`
height: 50px;
background: whitesmoke;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 1.5rem;

`;

export const Search = styled.div`
display: flex;
align-items: center;
justify-content: center;
border-radius: 0.75rem;
background: white;
padding: 2px;
border: 1px solid black;


input {
    border: none;
    height: 25px;
    padding: 1rem;
    background: transparent;
}

button{
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
}

`;

export const Image = styled.img`
width: 30px;
height: 30px;

`;

