import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question-container mb-3">
      <div>
        <h5>{title}</h5>
        <Button variant="outline-light" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </Button>
      </div>
      {showInfo && <span>{info}</span>}
    </article>
  );
};

export default Question;