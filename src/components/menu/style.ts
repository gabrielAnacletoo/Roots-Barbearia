import styled from "styled-components";


export const ImageFormated = styled.img`
width:90%;
height: auto;
margin: 0 0 5% 8%;
padding: 10% 0 0 0;
object-fit: cover;
`
export const DivBtnsMenu = styled.div`
margin-top: 10%;
display:flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;

.BtnsFormated{
background-color: transparent;
color: #fff;
border:none;
height: 3.2em;
font-size:1.1em;
&:active {
        background-color: transparent; /* Define a cor de fundo como transparente quando clicado */
    }
}
`


