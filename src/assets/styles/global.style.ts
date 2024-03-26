import { createGlobalStyle } from "styled-components";
import Fachada from '../images/backgrounds/bg1pb.jpg'


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  html, body, #root {
    height: 100vh;
    overflow: auto;
    /* font-family: "Sora", sans-serif; */
    /* font-family: "Poppins", sans-serif; */
    font-family: "Red Hat Display", sans-serif;


  }

  body {
    /* background-image: url(${Fachada});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; */
    background-color: black;
}

.imagem-com-sombra{
  filter: drop-shadow(5px 0 3px rgba(0, 0,0, 0.5));
}

.linkss{
  text-decoration:none;
  color: #FFF;
}

.linkss:hover{
  text-decoration:none;
  color: #FFF;
}



.BtnDiv{
background-color: black;
display:flex;
align-items:center;
justify-content: space-between;
width: 98%;
border-radius: 5px;
margin: 2% 0;
box-shadow: 0 0 10px rgba(42, 44, 48, 1);
}

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