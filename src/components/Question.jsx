import React, { useEffect, useState } from 'react'
import { Results } from './Results'

export const Question = ({filteredQuestion, questionFiltered,indexQuestion,setIndexQuestion, setActiveQuiz}) => {

 const [answersRandom, setAnswerRandom] = useState([])
 const [score, setScore] = useState(0)
 const [selectAnswerIndex, setSelectAnswerIndex] = useState(null)
 const [answered, setAnswered] = useState(false)
 const [activeResult, setActiveResult] = useState(false)

    useEffect(()=> {
        const answers = [
            ...filteredQuestion.incorrect_answers,
            filteredQuestion.correct_answer,
        ]

        setAnswerRandom(answers.sort(()=> Math.random() - 0.5))

        console.log(answersRandom, "holi")

    }, [filteredQuestion])

    const checkAnswer = (answerText, index) => {
        if(answerText === filteredQuestion.correct_answer) {
            setScore(score + 1)
        }
        setSelectAnswerIndex(index)
        setAnswered(true)
    }

const onNextQuestion = () => {
    setIndexQuestion(indexQuestion + 1)
    setSelectAnswerIndex(null)
    setAnswered(false)
}
const onReset = ()=> {
    setScore(0)
    setActiveQuiz(false)
    setIndexQuestion(0)
}

   

  return (
    <>
    {activeResult ? (
      <Results 
      questionFiltered={questionFiltered}
        score={score}
        onReset={onReset}
        />
    ) : 
    (<div className="flex flex-col justify-between shadow-slate-300 w-[600px] h-[600px] shadow-md p-10 rounded-lg ">
    <div className='flex justify-between'>
        <span className="text-xl font-bold">
            {/* numero de preguntas actial y totales */}
            {indexQuestion + 1} / {questionFiltered.length}
        </span>
        <div>
            <span className="font-semi">
                Dificultad:
            </span>
            <span className="font-bold">
                {/* dificultad de la preg */}
                {filteredQuestion.difficulty}
            </span>
        </div>
    </div>
    <button className="border px-5 py-2 rounded-lg font-bold-transition-all hover:bg-yellow-500
    hover:text-gray-900" onClick={onReset}>
        Reiniciar
    </button>
    <div>
        <h1 className="font-bold">
            {filteredQuestion.question}
        </h1>
    </div>
    {/* respuestas */}
    <div className="grid grid-cols-2 gap-5">

        {answersRandom.map((answer, index)=> (
            <button  className={`border p-5 rounded-lg flex justify-center items-center hover:scale-105 ${
                selectAnswerIndex !== null &&
                index === selectAnswerIndex
                ? answer === filteredQuestion.correct_answer
                    ? "bg-green-500"
                    : "bg-red-500"
                 : ""   
            }`}
            key={answer}
            onClick={()=> checkAnswer(answer, index)}
            disabled={answered && selectAnswerIndex !== index}>
            <p className="font-medium text-center text-sm">
               {answer}
            </p>
        </button>
        ))}

        
    </div>
    {/* condicional para mostrar el boton a siguiente preg */}
    {
        indexQuestion + 1 === questionFiltered.length ? (

        <button className="border-2 border-yellow-600 text-yellow rounded-md px-5
     py-2 hover:bg-yellow-600 hover:text-black font-medium" onClick={()=> {
        setAnswered(false)
        setActiveResult(true)
     }}>
        Finalizar
    </button>) : (

    <button className="border-2 border-yellow-600 text-yellow rounded-md px-5
    py-2 hover:bg-yellow-600 hover:text-black font-medium" onClick={onNextQuestion}>
    Siguiente pregunta 
    </button>

        )
    }
    
</div>)}
    
    </>
  )
}
