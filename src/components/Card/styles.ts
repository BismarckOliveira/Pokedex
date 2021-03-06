import styled from 'styled-components';
import pokeball from '../../assets/pokeball.svg'
import { typesTheme } from '../../utils/typesTheme';

interface IType {
    type: string;
}

export const Container = styled.div<IType>`
max-width: 500px;
width: 100%;
height: 180px;
border-radius: 1rem;
display: flex;
align-items: center;
justify-content: center;
position: relative;
background: whitesmoke;
background: ${props => typesTheme(props.type)};
`

export const Content = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 180px;
background: url(${pokeball}) no-repeat -10% 60% / clamp(28rem,25rem,25rem);
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
font-size: 1.8rem;
font-weight: 900;
margin-bottom: 0.5rem;
-webkit-text-stroke-width: 1px; /* largura da borda */
-webkit-text-stroke-color: #000; /* cor da borda */
color: #F0FFFF ;

`

export const TypesContainer = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
position: relative;
`
export const Type = styled.img`
width: 79px;
height: 27px;
`
export const PokemonImageContainer = styled.div`
width: 180px;
height: 180px;
`

export const Button = styled.button`
background: inherit;
border: none;
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
font-size: 1.8rem;
display: block;
position: absolute;
top: 1rem;
right: 1rem;
font-weight: 900;
-webkit-text-stroke-width: 1px; /* largura da borda */
-webkit-text-stroke-color: #000; /* cor da borda */
color: #F0FFFF ;
`