import { Box, Button, Typography } from "@mui/material"
import { useState } from "react"

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

  const judgeAnswer = (choiceIndex) => {
    if (answerIsShown) return
    setAnswerIsShown(true)
    setButtonStyleFromAnswer(choiceIndex)
    if (choiceIndex === answer) {
      console.log('Right Answer!')
      setIsRightAnswer(true)
    }
  }

  const setButtonStyleFromAnswer = (choiceIndex) => {
    const buttonStyle = defaultButtonStyle
    const buttonStyleUpdated = buttonStyle.map((style, index) => {
      if (index === answer) return { variant: 'contained', color: 'primary' }
      if (index === answer || choiceIndex === index) return { variant: 'contained', color: 'secondary' }
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
                    onClick={() => judgeAnswer(index)}
                  >
                    {choice}
                  </Button>
                </Box>
              )
            })}
            {Boolean(answerIsShown && isRightAnswer)
              &&
              <Box borderRadius={2} p={2} sx={{backgroundColor: '#f5f5f5'}}>
                <Typography sx={{ fontWeight: 'bold', borderBottom: '3px solid #1976d2', display: 'block', width: 'fit-content', mb: 2 }}>正解！</Typography>
                <Typography>正解は「{ choices[answer] }」です！</Typography>
              </Box>}
            {Boolean(answerIsShown && !isRightAnswer)
              &&
              <Box borderRadius={2} p={2} sx={{backgroundColor: '#f5f5f5'}}>
                <Typography sx={{ fontWeight: 'bold', borderBottom: '3px solid #9c27b0', display: 'block', width: 'fit-content', mb: 2 }}>不正解！</Typography>
                <Typography>正解は「{ choices[answer] }」です！</Typography>
              </Box>}
          </Box>
        </Box>
    </>
  )
}

export default Quiz
