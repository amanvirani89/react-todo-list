import React, { useRef, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import TodoItems from './TodoItems';

function TodoList() {
  const [list, setList] = useState([]);
  const titleRef = useRef('');
  const noteRef = useRef('');

  const addTodo = () => {
    var listing = {
      id: Math.floor(Math.random() * 1000),
      title: titleRef.current.value,
      note: noteRef.current.value,
    };
    setList((list) => [...list, listing]);

    titleRef.current.value = '';
    noteRef.current.value = '';
    // list.map((item) => (
    //   <TodoItems key={item.id} title={item.title} note={item.note} />
    // ));
  };

  // console.log('this is a todo');
  // console.log(todoList);
  // console.log(todoList[0].title);

  // console.log(list);

  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>Todo List</h1>
          <h3>using react-bootstrap and react hooks</h3>
        </Col>
      </Row>
      <Row>
        <Col lg={true} sm={8}>
          <Form>
            <Form.Group controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                ref={titleRef}
              />
            </Form.Group>

            <Form.Group controlId="formBasicNote">
              <Form.Label>Note</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                ref={noteRef}
                placeholder="Enter your note"
              />
            </Form.Group>
            <Button variant="primary" onClick={() => addTodo()}>
              Submit
            </Button>
          </Form>
        </Col>{' '}
        <Col lg={true} md="auto">
          {list.map((item) => (
            <TodoItems
              key={item.id}
              list={list}
              item={item}
              setList={setList}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default TodoList;
