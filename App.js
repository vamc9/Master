import React, { Component } from 'react';
import mhk from './mhk.png';
import './App.css';
import { Button,ButtonToolbar,Row,Col,Container,Form} from 'react-bootstrap';


class App extends Component {
  render() {
    return (
<div>
<div className="bg-color">
<img src={ mhk } alt={"mhk"} className="mhklogo"/> 
</div>
<div className="header">
  <Container className="m-t">
    <Row>
      <Col>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="m-t">Enter Your SQL:</Form.Label>
              <Form.Control type="text" placeholder="Enter Your SQL:" />
              <Form.Text className="text-muted">
            “ LANGUAGES DETECTED”
            </Form.Text>
          </Form.Group>
        </Form>
      </Col>
      <Col></Col>
      <Col>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="m-t">Enter Your ANSI SQL:</Form.Label>
            <Form.Control type="text" placeholder="Enter Your ANSI SQL:" />
          </Form.Group>
        </Form>
      </Col>
    </Row>  
    <button className="submit-spacing">SUBMIT</button>
  {/* <ButtonToolbar className="submit-spacing">
    <Button variant="primary" size="md" >
      SUBMIT
    </Button>
    </ButtonToolbar> */}
  </Container>

  
</div>

</div>  

    );
  }
}

export default App;
