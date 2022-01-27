export function processRawQuizzes(rawQuizzes) {
    const quizzes = rawQuizzes.map(quiz => {
      return {
        question: decodeHTMLEntities(quiz.question),
        answers: shuffleAnswers([...quiz.incorrect_answers.map(answer => {
          return {
            text: decodeHTMLEntities(answer),
            correct: false
          }
        }), {text: quiz.correct_answer, correct: true}])
      }
    })
    return quizzes
  }
  
function shuffleAnswers(answers) {
    for (let i = answers.length - 1; i >= 0; i--) {
        const randomIndex = Math.floor(Math.random() * answers.length)
        const oldValue = answers[i]
        answers[i] = answers[randomIndex]
        answers[randomIndex] = oldValue
    }
    return answers
}

function decodeHTMLEntities(string) {
  return string.replace(/&#(\d+);/g, function(match, dec) {
    return String.fromCharCode(dec)
  })
}

