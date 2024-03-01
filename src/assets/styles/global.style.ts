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
    background-image: url(${Fachada});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
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

`