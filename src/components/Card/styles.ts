import styled from 'styled-components';
import pokeball from '../../assets/pokeball.svg'


export const Container = styled.div`
max-width: 350px;
width: 100%;
height: 150px;
border-radius: 1rem;
display: flex;
align-items: center;
justify-content: center;
position: relative;
background: whitesmoke;
`

export const Content = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 150px;
background: url(${pokeball}) no-repeat 0% 80% / clamp(25rem,25rem,25rem);
overflow: hidden;
gap: 1rem;
border-radius: 1rem;
`

export const Info = styled.div`
display: flex;
align-items: center;
flex-direction: column;

`

export const Name = styled.strong`
font-size: 1.5rem;
font-weight: 500;
margin-bottom: 0.5rem;
`

export const TypesContainer = styled.div`
display: flex;
gap: 5px;
`

export const Type = styled.img`
width: 70px;
height: 30px;
`
export const PokemonImageContainer = styled.div`
width: 140px;
height: 140px;
`

export const PokemonImage = styled.img`
width: 100%;
height: 100%;
-webkit-transition: -webkit-transform .5s ease;
transition: transform .5s ease;
cursor: pointer;

&:hover{
    -webkit-transform: scale(1.1);
   transform: scale(1.1);
}
`

export const PokedexNumber = styled.span`
display: block;
position: absolute;
top: 1rem;
right: 1rem;
font-weight: 500;
`