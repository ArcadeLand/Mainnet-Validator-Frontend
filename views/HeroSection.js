import { React } from "react";

import {
  Row,
  Col
} from "reactstrap";

export default function HeroSection() {
    return(
        <div className="page-header hero-section" id="hero-section" style={{minHeight:"80vh"}}>
          
          <div className="content-center" style={{ maxWidth:"1100px", top:"58%" }}>
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="5" md="7">
                <h1 className="text-white" style={{ fontSize:"50px" }}>
                  We are a trusted Validator
                </h1>
                <h4 className="text-white mb-3">
                  Dedicated to securely increase your crypto holdings by operating nodes 
                  for next-generation blockchain networks with reliable infrastructure, high availability and 24/7 support.
                </h4>
              </Col>
              <Col lg="7" md="5" className="justify-content-center" >
                <img
                  alt="..."
                  className="img-fluid"
                  style={{ height:"500px" }}
                  src={require("assets/images/blockchain.png")}
                />
              </Col>
            </Row>
          </div>
        </div>
    ); 

}