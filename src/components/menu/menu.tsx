import { Image, Button, Container, Row, Col } from "react-bootstrap";
import Logo from "../../assets/images/backgrounds/final verde.png";
import * as D from "./style";
import Fachada from "../../assets/images/backgrounds/fachada2.png";
import Whatsapp from '../../assets/images/icons/whatsapp.png'
import Rlogo from '../../assets/images/icons/letraR.png'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
            {/* <motion.div
                initial={{ x: -400 }}
                animate={{ x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                style={{width: '100%'}}
              > */}
              <div className="BtnDiv">
              
              <Image src={Rlogo} className="netflix" rounded />

                <Button className="my-1 BtnsFormated rounded-2">
                    <Link to="https://celcash.celcoin.com.br/landingpage312445/rootsbauru" className="linkss">Assinatura</Link>
                  
                </Button>
              </div>
            {/* </motion.div> */}

            {/* <motion.div
                initial={{ x: -750 }}
                animate={{ x: 0 }}
                transition={{ duration: 1.1, delay: 0.5 }}
                style={{width: '100%'}}
              > */}
              <div className="BtnDiv">
              <Image src={Fachada} className="Roots" rounded />
                <Button className="my-1 BtnsFormated rounded-2">
                  <Link to="https://admin.frizzar.com.br/app/rootsbauru"  className="linkss">Agendar Horário</Link>
                </Button>
              </div>
              {/* </motion.div> */}


              {/* <motion.div
                initial={{ x: -1150 }}
                animate={{ x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                style={{width: '100%'}}
              > */}
              <div className="BtnDiv">
              <Image src={Whatsapp} className="Whats" rounded />
                <Button className="my-1 BtnsFormated rounded-2">
                  <Link to="https://api.whatsapp.com/send?phone=5514997472854&text=Olá!%20gostaria%20de%20agendar%20um%20horário" className="linkss">Fale no Whatsapp</Link>
                  
                </Button>
              </div>
              {/* </motion.div> */}
            </D.DivBtnsMenu>
          </Col>
        </Row>
      </Container>
    </>
  );
};
