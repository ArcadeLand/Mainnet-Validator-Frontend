import React, { useState } from "react";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
  Modal
} from "reactstrap";

export default function ChainSection() {
  const [demoModal, setDemoModal] = useState(false);

  const [modalStatus, setModalStatus] = useState(false);
  const [chain, setChain] = useState("");
  const [pools, setPools] = useState("");

  const updateModal = (status, chain, pools) => {
      setModalStatus(status);
      setChain(chain);
      setPools(pools);
  };

  const chainLogo = [

  ]

  const nearPools = [
      {"name": "Upgold", "link": "https://wallet.near.org/staking/upgold.poolv1.near", "uptime": "99.9%"},
      {"name": "Maia", "link": "https://wallet.near.org/staking/maia.poolv1.near", "uptime": "99.9%"}
  ]

    return(
        <>
        <section className="section section-lg section-coins chains-section" id="chains-section" style={{ marginTop:"0px", overflow:"hidden" }}>
        <img
            alt="..."
            className="path"
            src={require("assets/images/path3.png")}
          />
          <Container>
            <Row>
              <Col md="4">
                <hr className="line-info" />
                <h1>
                  Blockchains
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader style={{ marginBottom:"0px"}}>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      style={{height:"150px", width:"150px"}}
                      src={require("assets/images/near.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h3 className="text-uppercase" style={{ marginBottom:"0px", fontWeight:"600" }}>Near</h3>
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Mainnet</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button 
                      className="btn-default" 
                      color="info"
                      onClick={() => {
                        updateModal(true, "Near", nearPools)
                      }
                      }
                      >
                      Stake Now
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader style={{ marginBottom:"0px"}}>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      style={{height:"150px", width:"150px"}}
                      src={require("assets/images/aleo.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h3 className="text-uppercase" style={{ marginBottom:"0px", fontWeight:"600" }}>Aleo</h3>
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Testnet</ListGroupItem>
                        </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button disabled className="btn-default" color="info">
                      Stake Now
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader style={{ marginBottom:"0px"}}>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      style={{height:"150px", width:"150px"}}
                      src={require("assets/images/celestia.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h3 className="text-uppercase" style={{ marginBottom:"0px", fontWeight:"600" }}>Celestia</h3>
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Testnet</ListGroupItem>
                        </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button disabled className="btn-default" color="info">
                      Stake Now
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <div className="space-100"/>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader style={{ marginBottom:"0px"}}>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      style={{height:"130px", width:"130px"}}
                      src={require("assets/images/power.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h3 className="text-uppercase" style={{ marginBottom:"0px", fontWeight:"600" }}>Power</h3>
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Testnet</ListGroupItem>
                        </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button disabled className="btn-default" color="info">
                      Stake Now
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader style={{ marginBottom:"0px"}}>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      style={{height:"130px", width:"130px"}}
                      src={require("assets/images/q_blockchain.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h3 className="text-uppercase" style={{ marginBottom:"0px", fontWeight:"600" }}>Q</h3>
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Testnet</ListGroupItem>
                        </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button disabled className="btn-default" color="info">
                      Stake Now
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <Modal modalClassName="modal-black" isOpen={modalStatus} toggle={() => setModalStatus(false)}>
          <ModalBody 
            chain={chain}
            pools={pools}
            setModalStatus={setModalStatus}
          />
        </Modal>
        </>
    ); 
}

const ModalBody = ({ chain, pools, setModalStatus }) => {
  return(
      <>
        <div className="modal-header justify-content-center" style={{borderBottom: "1px solid white", paddingBottom: "20px"}}>
          <button className="close" onClick={() => setModalStatus(false)}>
            <i className="tim-icons icon-simple-remove text-white" />
          </button>
          <h4 className="title title-up" style={{color: "white"}}>{chain} Staking</h4>
          <br></br>
        </div>
        <div className="modal-body">
          { 
            pools.map((pool) => { return (
                <StakeInfo 
                  key={`${pool.name}-pool`}
                  pool={pool}
                /> 
            )})
          }
        </div>
      </>
  );
}

const StakeInfo = ({ pool }) => {
  return(
      <>
        <Row>
          <Col md="4" style={{display: "flex", alignItems: "center", paddingLeft: "10%"}}>
            <p style={{fontSize: "16px", fontWeight:"700"}}>{pool.name}</p>
          </Col>
          <Col md="4" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <p style={{fontSize: "16px", fontWeight:"700"}}>{pool.uptime}</p>
          </Col>
          <Col md="4" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Button color="info" type="button" href={pool.link} target="_blank">
              Stake
            </Button>
          </Col>
        </Row>
        <br></br>
      </>
  );
}



