import { createContext, useState } from "react";

const SelectQuizContext=createContext()

const QuizContextProvider=({children})=>{
    const [selectedQuiz,setSelectedQuiz]=useState('')
    const [difficulty,setDifficulty]=useState('')
    
    return (
        <SelectQuizContext.Provider value={{selectedQuiz,setSelectedQuiz,difficulty,setDifficulty}}>
            {children}
        </SelectQuizContext.Provider>
    )
}

export {SelectQuizContext,QuizContextProvider}
