import React from "react";
import "../styles/faq.css";

import Questions from '../_mock/questions'

const Faq = () => {
  return (
    <section className="faq" id="faq">
      {" "}
      <h1 className="title">FAQ</h1>
      {Questions &&
        Questions.map((faq, index) => (
          <div className="box" key={faq.id} index={index}>
            <p className="question">{faq.question}</p>
            <p className="answer">{faq.answer}</p>
          </div>
        ))}
    </section>
  );
};

export default Faq;
