import { Box, Button, Typography } from "@mui/material"
import { useState } from "react"
import Answer from "../answer"

const Quiz = ({datum}) => {
  const [answerIsShown, setAnswerIsShown] = useState(false)
  const [isRightAnswer, setIsRightAnswer] = useState(false)

  const defaultButtonStyle = [
    { variant: 'outlined', color: 'primary' },
    { variant: 'outlined', color: 'primary' },
    { variant: 'outlined', color: 'primary' },
  ]
  const [buttonStyle, setButtonStyle] = useState(defaultButtonStyle)

  const id = datum.id
  const choices = datum.choices
  const answer = datum.answer

  const handleClick = (choiceIndex) => {
    if (answerIsShown) return
    setAnswerIsShown(true)
    judgeAnswer(choiceIndex)
  }

  const judgeAnswer = (choiceIndex) => {
    if (choiceIndex === answer) {
      setIsRightAnswer(true)
    }
    const buttonStyle = defaultButtonStyle
    const buttonStyleUpdated = buttonStyle.map((style, index) => {
      if (index === answer) return { variant: 'contained', color: 'primary' }
      if (index === choiceIndex) return { variant: 'contained', color: 'secondary' }
      return style
    })
    setButtonStyle(buttonStyleUpdated)
  }

  return (
    <>
      <Box sx={{mb: 10}}>
          <Typography fontWeight="bold">
            { id }. この地名はなんて読む？
          </Typography>
          <Box sx={{
            mt: 3,
            display: "flex",
            justifyContent: "center"
          }}>
            <img src={`/img/kuizy${("0" + id).slice(-2)}.png`} width="620" />
          </Box>
          <Box sx={{width: '100%'}}>
            {choices.map((choice, index) => {
              return (
                <Box sx={{width: '100%', mb: 2}}>
                  <Button
                    variant={buttonStyle[index].variant}
                    fullWidth={true}
                    color={buttonStyle[index].color}
                    sx={{
                      justifyContent: 'start',
                      py: 1,
                      fontWeight: 'bold',
                    }}
                    onClick={() => handleClick(index)}
                  >
                    {choice}
                  </Button>
                </Box>
              )
            })}
            {
              answerIsShown
              &&
              <Answer isRightAnswer={isRightAnswer} answer={choices[answer]} />
            }
          </Box>
        </Box>
    </>
  )
}

export default Quiz
