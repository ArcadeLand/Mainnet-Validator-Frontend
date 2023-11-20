import { React } from "react";

import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";

import {
  Row,
  Col
} from "reactstrap";

export default function Staking() {
    return(
      <>
      <Navbar />
      <div className="wrapper">
        <div className="page-header" id="staking" style={{minHeight:"80vh"}}>
        <img
            alt="..."
            className="path"
            style={{ top:"30%", left:"5%", position:"absolute", zIndex:"2" }}
            src={require("assets/images/near.png")}
          />
          <div className="content-center" style={{ maxWidth:"1100px", top:"58%" }}>
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="5" md="7">
                <h1 className="text-white" style={{ fontSize:"50px" }}>
                  NEAR
                </h1>
                <h4 className="text-white mb-3">
                NEAR Protocol is a public Proof-of-Stake (PoS) blockchain that aims to bring 
                DeFi to the masses with low transfer fees and fast transactions. 
                NEAR competes with Avalanche, Solana, Cardano, Algorand, the new version of 
                Ethereum, and other PoS networks.
                </h4>
              </Col>
              <Col lg="7" md="5" className="justify-content-center" >
                
              </Col>
            </Row>
          </div>
        </div>
        <Footer />
      </div>
      </>
    ); 

}