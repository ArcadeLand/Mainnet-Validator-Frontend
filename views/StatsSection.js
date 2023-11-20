import { React } from "react";

import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

export default function StatsSection() {
    return(
        <section className="section section-lg stats-section" id="stats-section" style={{ padding:"0 0 30px" }}>
          <section className="section">
            <Container>
              <Row>
                <Col md="4">
                  <hr className="line-info" />
                  <h1>
                    Validation Stats
                  </h1>
                  <div className="space-50"/>
                </Col>
              </Row>
              <Row className="row-grid justify-content-center">           
               <Col className="mt-lg-12" md="12">
                  <Row>
                    <Col className="px-2 py-2" lg="4" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-pin text-warning" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">10</CardTitle>
                                <p />
                                <p className="card-category">Nodes</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="px-2 py-2" lg="4" sm="12">
                      <Card className="card-stats upper bg-default" style={{transform: "translate(-6px, -25px)"}}>
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-pin text-white" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">99.9%</CardTitle>
                                <p />
                                <p className="card-category">Uptime</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="px-2 py-2" lg="4" sm="12">
                      <Card className="card-stats">
                        <CardBody>
                          <Row>
                            <Col md="4" xs="5">
                              <div className="icon-big text-center icon-warning">
                                <i className="tim-icons icon-pin text-info" />
                              </div>
                            </Col>
                            <Col md="8" xs="7">
                              <div className="numbers">
                                <CardTitle tag="p">24/7</CardTitle>
                                <p className="card-category">Support</p>
                              </div>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
                
              </Row>
            </Container>
          </section>
        </section>        
    ); 
}