import { createContext, useState } from "react";

const SelectQuizContext=createContext()

const QuizContextProvider=({children})=>{
    const [selectedQuiz,setSelectedQuiz]=useState(null)
    return (
        <SelectQuizContext.Provider value={{selectedQuiz,setSelectedQuiz}}>
            {children}
        </SelectQuizContext.Provider>
    )
}

export {SelectQuizContext,QuizContextProvider}
