import logo from './logo.svg';
import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
/* Bootstrap */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const [questions] = useState(data);
  return (
    <>
      <Container className="main-container">
        <Row className="content-container">
          <Col md={4} className="brand-container">
            <h1 className="mb-4">FAQs</h1>
              <div>
                <img src={logo} className="logo-silestone" alt="Silestone" />
              </div>  
          </Col>
          <Col>
            {questions.map((question) => {
              return (
                <SingleQuestion key={question.id} {...question}></SingleQuestion>
              );
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;