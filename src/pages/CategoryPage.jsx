import React, { useEffect, useState } from 'react'
import { Question } from '../components/Question'
import { useParams } from 'react-router-dom'
import { questions, imgs } from '../data'

export const CategoryPage = () => {

  //funcion pa mezcla las preguntas y tambien reducirlas a 5
  const shuffleArray = (array) => {
    const newArray = array.sort(()=> Math.random() - 0.5);
    return newArray.slice(0, 5);
  }
  const {category} = useParams()
  
  const [imgCategory] = imgs.filter(img => img === `/src/assets/${category.toLowerCase()}.png`)

  // leer el paramero de la url
  
  //estado pa filtrar las preguntas x categoria
  const [questionFiltered, setQuestionFiltered] = useState(questions.filter(question => question.category === category))

  const [activeQuiz, setActiveQuiz] = useState(false)

  const [indexQuestion, setIndexQuestion] = useState(0)

  useEffect(()=> {
    const newQuestions = shuffleArray(questionFiltered);
    setQuestionFiltered(newQuestions)

  }, [])
  return (
    <div
     className='container flex flex-col items-center justify-center gap-10'
     style={{height: 'calc(100vh - 5rem'}}
     >
      {activeQuiz ? (<Question filteredQuestion={questionFiltered[indexQuestion]}
      setIndexQuestion={setIndexQuestion}
      indexQuestion={indexQuestion}
      questionFiltered={questionFiltered}
      setActiveQuiz={setActiveQuiz}
      />) : (
        <>
        <div className="flex flex-col gap-5">
            <h1 className="text-3xl text-teal-900 text-center font-bold">
                {category}
            </h1>

            <div className="flex justify-center items-center">
              <img src={imgCategory} alt={category}  className='w-72'/>
            </div>
        </div>

        <button onClick={()=> setActiveQuiz(true)} className="text-white bg-gray-900 py-2 rounded-lg font-bold px-5 transition-all hover:bg-yellow-500 hover:text-gray-900">
          Iniciar Quiz
        </button>
        </>
      )}
      
    </div>
  )
}
