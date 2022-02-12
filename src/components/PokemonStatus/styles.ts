import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-around;
padding: 2rem;
height: 100vh;
`

export const SumaryHeader = styled.header`
position: absolute;
left: 2.5rem;
top: 2.5rem;
max-width: 300px;
width: 100%;
transform: calc(0.5,0.8);
height: 3.5rem;
background: #fff;
transform: skewY(-3deg);
border-radius: 1rem;
display: flex;
padding: 1rem;
align-items: center;
box-shadow: 5px 10px 15px 2px black;

`;



export const PokemonSprite = styled.img``

export const StatusContainer = styled.div`

width: fit-content;
height: fit-content;

`

export const Type = styled.img`
width: 79px;
height: 27px;
`


export const TableNature = styled.table`

width: 100%;
border-spacing: 0.1rem;


tbody td{
   background: #e8f8ee;
   border-radius: 0.25rem;
   padding: 1rem;
   font-size: 1.5rem;
   font-weight: 500;
   color: #a4aeaa;
}

`

export const PokemonSpriteContainer = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
width: max-content;
height: max-content;
`

export const SectionSprite = styled.section`
display: flex;

`

export const TableSkills = styled.table`
width: 650px;
border-spacing: 0.1rem;
height: 50px;


thead th {
   background:  #39b5ab;
   border-radius: 0.25rem  0.25rem 0 0 ;
   padding: 1rem;
   font-size: 1.5rem;
   color: #fff;
   display: flex;
   align-items: center;
   justify-content: space-around;
}

thead th td {
 font-weight: 900;

}

tbody{
    overflow-y: scroll;
    height: 450px;
    display: flex;
    flex-direction: column;
}

tbody td{
   background: #e8f8ee;
   border-radius: 0.25rem;
   padding: 1rem;
   font-size: 1.5rem;
   font-weight: 500;
   color: #a4aeaa;
   width: 650px;
}
`

export const SectionDescription = styled.section`
table {
    width: 650px;
    border-spacing: 0.1rem;
thead th {
   background:  #39b5ab;
   border-radius: 0.25rem  0.25rem 0 0 ;
   padding: 1rem;
   font-size: 1.5rem;
   color: #fff;
   display: flex;
   align-items: center;
   justify-content: space-around;
}

thead th td {
 font-weight: 900;

}

tbody td{
   background: #e8f8ee;
   border-radius: 0.25rem;
   padding: 1rem;
   font-size: 1.5rem;
   font-weight: 500;
   color: #a4aeaa;
}
}

`
