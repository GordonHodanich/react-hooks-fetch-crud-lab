import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions }) {

  const listOfQuestions = questions.map((question) => (
    <QuestionItem
      key={question.id}
      question={question}
    />
  ))
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{listOfQuestions}</ul>
    </section>
  );
}

export default QuestionList;
