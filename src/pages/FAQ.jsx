import React from "react";
import "../styles/faq.scss";

const Faq = () => {
  const questions = [
    {
      id: 0,
      question: "What is the total The Name supply?",
      answer: "The Total supply is *****.",
    },
    {
      id: 1,
      question: "Where can I buy or sell my The Name?",
      answer:
        "You can mint them on our website or get them on secondary market.",
    },
    {
      id: 2,
      question: "Where can I buy TNAT$ token?",
      answer: "You can buy across multiple platforms.",
    },
    {
      id: 3,
      question: "Have More Questions?",
      answer: "Join our Discord.",
    },
  ];
  return (
    <section className="faq" id="faq">
      {" "}
      <h1 className="title">FAQ</h1>
      {questions &&
        questions.map((faq) => (
          <div className="box" id={faq.id}>
            <p className="question">{faq.question}</p>
            <p className="answer">{faq.answer}</p>
          </div>
        ))}
    </section>
  );
};

export default Faq;
