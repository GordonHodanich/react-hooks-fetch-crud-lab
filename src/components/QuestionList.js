import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList(){
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(resp => resp.json())
    .then(data => {
      setQuestions(data)
    })
  }, [])

const handleDelete = (id) => (
    fetch(`http://localhost:4000/questions/${id}`,{
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then(() => {
      const newQuestions = questions.filter((question) => question.id !== id)
      setQuestions(newQuestions)
    })
)

  const listOfQuestions = questions.map((question) => {
    return (
    <QuestionItem
      key={question.id}
      question={question}
      onHandleDelete={handleDelete}
    />
  )
})
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{listOfQuestions}</ul>
    </section>
  );
}

export default QuestionList;
