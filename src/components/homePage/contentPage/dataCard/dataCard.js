import React from "react";
import { Card, Image, Row,Col} from "react-bootstrap";
import './dataCard.css';

export default function DataCard(props) {

    const {order,worker} = props.data
  return (
    <React.Fragment>
      <Card className='card'>
        <Card.Body>
          <Card.Title>Order: {order.name} ({order.id})</Card.Title>
          <Card.Text>
            {order.description}
            <br></br>
            <br></br>
            Deadline: {order.deadline}
            <hr></hr>
            <h3>Worker</h3>
            <Row>
            <Col style={{display:'flex', alignItems:'center', justifyContent:'flex-start'}} ><Image src={worker.image} style={{width:'70px',height:'70px'}} roundedCircle /></Col>
            <Col>{worker.name} {worker.email} {worker.companyName}</Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}
