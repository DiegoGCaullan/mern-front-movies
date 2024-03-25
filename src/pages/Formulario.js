import React from "react";
import { arrayJuego } from "./arrayJuego";
import { useState } from "react";

const Counterstrike = () => {
  const [questions, setQuestions] = useState(arrayJuego);
  const [total, setTotal] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const answers = ["q1-a", "q2-c", "q3-a", "q4-b", "q5-a"];

  const handleChange = ({ target }) => {
    const nextState = questions.map((question) => {
      if (question.name !== target.name) {
        return question;
      }

      return {
        ...question,
        options: question.options.map((opt) => {
          const checked = opt.radioValue === target.value;
          return {
            ...opt,
            selected: checked,
          };
        }),
        currentAnswer: target.value,
      };
    });
    setQuestions(nextState);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let counter = 0;
    let flag = false;

    for (const [index, question] of questions.entries()) {
      if (!question.currentAnswer) {
        flag = true;
        alert("Por favor responde la pregunta n°:" + (index + 1));
        break;
      } else {
        if (question.currentAnswer === answers[index]) {
          ++counter;
        }
      }
    }

    if (!flag) {
      setTotal(counter);
      setSubmitted(true);
    }
  };

  return (
    <div className="container">
      <>
        <h1>Javier Milei</h1>
        <p>Responde y demostra cuanto sabes en esta pequeña encuesta.</p>
      </>
      <section>
        {submitted && (
          <div className="result">
            <h3>
              Obtuviste {total} de {answers.length} puntos
            </h3>
          </div>
        )}
        <form onSubmit={onSubmit}>
          {questions.map((question, index) => (
            <div key={`group-${index}`}>
              <h3>
                {index + 1}. {question.questionTitle}
              </h3>
              {question.options.map((option, index) => {
                return (
                  <div key={`option-${index}`}>
                    <input
                      type="radio"
                      name={question.name}
                      value={option.radioValue}
                      checked={option.selected}
                      onChange={handleChange}
                    />
                    {option.choice}
                  </div>
                );
              })}
            </div>
          ))}
          <button className="sendInfo" onClick={onSubmit}>
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default Counterstrike;
