import { Image, Button, Container, Row, Col } from "react-bootstrap";
import Logo from "../../assets/images/icons/roots.png";
import * as D from "./style";
import Fachada from "../../assets/images/backgrounds/fachada2.png";
import Whatsapp from '../../assets/images/icons/whatsapp.png'
import Rlogo from '../../assets/images/icons/letraR.png'
import { Link } from "react-router-dom";

// fonts sora, red hah , popins
export const StarterMenu = () => {



  return (
    <>
      <Container fluid className="BackGround">
        <Row>
          <Col className="d-flex justify-content-center align-items-center">
            <D.ImageFormated
              src={Logo}
              className="imagem-com-sombra  mt-5 my-5"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <D.DivBtnsMenu>
              <D.BtnDiv>
              
              <Image src={Rlogo} className="netflix" rounded />

                <Button className="my-1 BtnsFormated rounded-2">
                    <Link to="https://celcash.celcoin.com.br/landingpage312445/rootsbauru" className="linkss">Assinatura</Link>
                  
                </Button>
              </D.BtnDiv>

              <D.BtnDiv>
              <Image src={Fachada} className="Roots" rounded />
                <Button className="my-1 BtnsFormated rounded-2">
                  <Link to="https://admin.frizzar.com.br/app/rootsbauru"  className="linkss">Agendar Horário</Link>
                </Button>
              </D.BtnDiv>

              <D.BtnDiv>
              <Image src={Whatsapp} className="Whats" rounded />
                <Button className="my-1 BtnsFormated rounded-2">
                  Fale no Whatsapp
                </Button>
              </D.BtnDiv>
            </D.DivBtnsMenu>
          </Col>
        </Row>
      </Container>
    </>
  );
};
