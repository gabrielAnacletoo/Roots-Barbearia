import { useState } from "react";
import { OptionsService } from "./options";
import { ListGroup, Container, Row, Col } from "react-bootstrap";
import { servicesType } from "../../@types/services.type";
import { SelectDate } from "../dates/selectDate";

export const ServiceList = () => {
  const [service, setService] = useState<servicesType>({} as servicesType);
  const [showDates, setShowDates] = useState(false);

  const handleSelectService = (service: servicesType) => {
    setService(service);
    setShowDates(true);
  };
  console.log("service selecionado", service);
  return (
    <Container>
      <Row>
        <Col>
          <br />
          {showDates ? (
            <SelectDate />
          ) : (
            <>
              <ListGroup>
                {OptionsService.map((service, index) => (
                  <ListGroup.Item
                    key={index}
                    onClick={() => handleSelectService(service)}
                  >
                    <h3>{service.name}</h3>
                    <small>
                      <b>Duração:</b> {service.duration}
                    </small>
                    &nbsp;
                    <small>
                      <b>Preço:</b> {service.price}
                    </small>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceList;
