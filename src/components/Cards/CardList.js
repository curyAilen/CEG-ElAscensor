import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardItem from "./CardItem";

const CardList = ({clases}) =>{
      return (
        <Container>
            <Row>
            <Col>
              {clases.map((clase)=>{
                 <CardItem  {...clase} key={clase.id}></CardItem>
              })}                
                </Col>
            </Row>       
        </Container>
      );
    }    

export default CardList;
