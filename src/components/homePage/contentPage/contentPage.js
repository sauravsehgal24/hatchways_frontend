import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import "./contentPage.css";
//components
import DataCard from "./dataCard/dataCard";

export default function ContentPage(props) {
  const [cardsState, setCardsState] = useState({
    cards: []
  });

  const setCards = res => {
    var cardsLocal = [];
    const orders = res.data.orders;
    orders.map(order => {
      axios
        .get(
          "https://www.hatchways.io/api/assessment/workers/" + order.workerId
        )
        .then(res => {
          const { worker } = res.data;
          const card = {
            order,
            worker
          };
          cardsLocal.push(card);
          setCardsState({
            cards: cardsLocal
          });
        })
        .catch(err => {
          console.log(`error fetching worker`);
        });
    });
  };

  useEffect(() => {
    axios
      .get("https://www.hatchways.io/api/assessment/work_orders")
      .then(res => {
        setCards(res);
      })
      .catch(err => console.log(err));
  }, []);

  var filteredCards = cardsState.cards.sort((c1,c2)=>{
    if(!props.toggle && c1.order.deadline > c2.order.deadline) return 1
    else  return -1
  }).
    filter((card)=>{
    return card.worker.name.indexOf(props.searchData) !== -1
    })

  return (
    <React.Fragment>
      <Container className="contentPageContainer" fluid>
        <Row>
          {filteredCards.map(card => {
            return (
              <Col>
                <DataCard data={card} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </React.Fragment>
  );
}
