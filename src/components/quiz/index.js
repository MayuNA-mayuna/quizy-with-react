import { Box, Typography } from "@mui/material"
import { useState } from "react"
import Answer from "../answer"
import ChoiceList from "../choiceList"

const Quiz = ({ datum }) => {
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
  const answerIndex = datum.answerIndex

  const handleClick = (choiceIndex) => {
    if (answerIsShown) return
    setAnswerIsShown(true)
    judgeAnswer(choiceIndex)
  }

  const judgeAnswer = (choiceIndex) => {
    if (choiceIndex === answerIndex) {
      setIsRightAnswer(true)
    }
    const buttonStyle = defaultButtonStyle
    const buttonStyleUpdated = buttonStyle.map((style, index) => {
      if (index === answerIndex) return { variant: 'contained', color: 'primary' }
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
            <ChoiceList
              choices={choices}
              buttonStyle={buttonStyle}
              handleClick={handleClick}
            />
            {
              answerIsShown
              &&
              <Answer
                isRightAnswer={isRightAnswer}
                answer={choices[answerIndex]}
              />
            }
          </Box>
        </Box>
    </>
  )
}

export default Quiz
