import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import "./contentPage.css";
//components
import DataCard from "./dataCard/dataCard";

export default function ContentPage() {
  const [ordersState, setOrdersState] = useState({
    orders: []
  });

  const [workersState, setWorkersState] = useState({
    workers: []
  });

  const [cardsState, setCardsState] = useState({
    cards: []
  });

  var workers = [];

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

  // const getWorker = (id) =>{

  //             axios.get('https://www.hatchways.io/api/assessment/workers/'+id)
  //             .then((res)=>{
  //                 const worker = res.data.worker
  //                 console.log(worker)
  //                 workers.push(worker)
  //                 setWorkersState({
  //                     workers:workers
  //                 })
  //             })
  //             .catch((err)=>console.log(err))

  // }

  useEffect(() => {
    axios
      .get("https://www.hatchways.io/api/assessment/work_orders")
      .then(res => {
        setCards(res);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <React.Fragment>
      <Container className="contentPageContainer" fluid>
        <Row>
          {cardsState.cards.map(card => {
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
