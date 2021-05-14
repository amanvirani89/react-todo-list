import React, { useState } from 'react';
import {
  Accordion,
  Card,
  Button,
  ButtonGroup,
  Container,
  Row,
  Col,
} from 'react-bootstrap';

function TodoItems({ item, list, setList }) {
  const [edit, setEdit] = useState(false);
  const [inputState, setInput] = useState(item.note);
  var deleteHandler = () => {
    // alert(item.title);
    // console.log(list.filter((i) => i.id !== item.id));
    setList(list.filter((i) => i.id !== item.id));
  };

  var editHandler = () => {
    setEdit(!edit);
  };
  return (
    <div>
      {/* {list.map((i) => `${i.title}    `)} */}
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            {item.title}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Container>
                <Row>
                  <Col>
                    {edit ? (
                      <input
                        type="text"
                        value={inputState}
                        autoFocus="true"
                        onChange={(e) => setInput(e.target.value)}
                      />
                    ) : (
                      inputState
                    )}
                  </Col>
                  <Col md="auto">
                    <ButtonGroup>
                      <Button variant="success" onClick={editHandler}>
                        {edit ? 'Save' : 'Edit'}
                      </Button>
                    </ButtonGroup>
                  </Col>
                  <Col md="auto">
                    <ButtonGroup>
                      <Button variant="danger" onClick={deleteHandler}>
                        Delete
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </Container>{' '}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default TodoItems;
