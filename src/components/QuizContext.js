import React, { createContext, useState, useContext } from 'react';

const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [answers, setAnswers] = useState({});  

  return (
    <QuizContext.Provider value={{ answers, setAnswers }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  return useContext(QuizContext);
}

//this file contains two functions...QuizProvider and useQuiz...

//quizProvider provides context for child components wrapped inisde it....
//intializes 50 empty strings in answers state
//returns quizProvider component that provides answers state and updater function, setAnswers
//any component wrapped inisde can access the state...
//this is better than lifting state up?

//useQuiz calls useContext(QuizContext)...dont need to invoke useContext inside function?
///When you have multiple exports in a module (in this case, QuizContext.js), you can import any or all of those exports in another module (like App.js).

//you do not need to import useQuiz into App.js for the QuizProvider to work.

//f you want to provide the quiz context to parts of your application, you would use QuizProvider in App.js (or any relevant component). Any nested child components that need to access the quiz data would then use the useQuiz hook, and they would need to import it.



