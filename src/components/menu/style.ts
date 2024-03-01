import styled from "styled-components";


export const ImageFormated = styled.img`
width:100%;
height: auto;
margin: 0 0 5% 8%;
padding: 30% 0 0 0;
object-fit: cover;
`
export const DivBtnsMenu = styled.div`
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

export const BtnDiv = styled.div`
background-color: black;
display:flex;
align-items:center;
justify-content: space-between;
width: 98%;
border-radius: 5px;
margin: 2% 0;
box-shadow: 0 0 10px rgba(0, 0, 0, 1);

.netflix {
    border-radius: 5px;
    width: 13%;
    height: 3.4em;
    object-fit: contain;
    margin-left: 3%;
}
.Roots {
    border-radius: 5px;
    width: 22%;
    height: 3.3em;
    object-fit: contain;
    margin-left: 3%;

}

.Whats {
    border-radius: 5px;
    width: 26%;
    height: 3.3em;
    object-fit: contain;
}

`
