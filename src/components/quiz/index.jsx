import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { SelectQuizContext } from "../../context/selectQuizContext";
import { Fall } from "../../styles/quiz";

const QuizPage=()=>{
    const [quizs,setQuizs]=useState([])
    const [page,setPage]=useState(0)
    const [score,setScore]=useState(0)
    const [currentAnswer,setCurrentAnswer]=useState('')
    const {selectedQuiz}=useContext(SelectQuizContext)

    const fetchQuiz=async()=>{
        try {
            const response=await axios.get(`https://quizapi.io/api/v1/questions?apiKey=QTKG3YmBxQM2QEB4xm1T0nK0DPbOw8qStVuB3Azj&category=${selectedQuiz}&difficulty=Easy&limit=20`)
            const data=response.data
            console.log(data)
            setQuizs(data)
        } catch (error) {
            console.log("Error getting the quiz data",error)
        }
    }

    const handleSubmit=()=>{
        console.log(currentAnswer)
        const checkanswer= `${currentAnswer}_correct`
        if(quizs[page].correct_answers[checkanswer]==="true"){
            console.log("Correct")
            setScore(score+1)
            console.log(score)
        }
        setPage(page + 1)
        setCurrentAnswer('')
    }

    useEffect(()=>{
        fetchQuiz()
    },[])

    return(
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="container">
                <div>
                    <p>Tolal Question:- 20</p>
                    <p>Completed Questions {page}/20</p>
                </div>
                {quizs.length > 0 && page < quizs.length && (
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Question {page + 1}</h5>
                            <p className="card-text">{quizs[page].question}</p>
                            <form>
                            {Object.keys(quizs[page].answers).map((answer, index) => {
                                if (quizs[page].answers[answer]) {
                                return (
                                    <div key={index} className="form-check">
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        onChange={(e) => setCurrentAnswer(e.target.value)}
                                        checked={currentAnswer === answer}
                                        value={answer}
                                        name="options"
                                    />
                                    <label className="form-check-label">{quizs[page].answers[answer]}</label>
                                    </div>
                                );
                                } else {
                                return null;
                                }
                            })}
                            </form>
                            <button className="btn btn-primary mt-3" onClick={handleSubmit}>
                            {page === quizs.length - 1 ? "Finish Quiz" : "Next Question"}
                            </button>
                        </div>
                    </div>
                )}
                {page === quizs.length && (
                    <Fall className="card mt-3" >
                        <div className="card-body text-center">
                        <h5 className="card-title">Quiz Completed!</h5>
                        <p className="card-text">Your Score: {score}/{quizs.length}</p>
                        </div>
                    </Fall>
                )}
            </div>
        </div>
    )
}

export default QuizPage
