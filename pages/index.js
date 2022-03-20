import data from "../src/data"
import { Box, Button, Container, Typography } from "@mui/material"
import Image from "next/image"
import { useState } from "react"

const Home = () => {
  const [buttonDisabled, setButtonDisabled] = useState(false)

  const id = data[0].id
  const choices = data[0].choices
  const answer = data[0].answer

  const judgeAnswer = (e) => {
    console.log(e.target.innerText)
    const userChoice = e.target.innerText
    if (userChoice === answer) {
      console.log('Right Answer!')
      setButtonDisabled(true)
    }
  }

  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{mt: 5}}>
          <Typography variant="h6" align="center" fontWeight="bold">
            ガチで東京の人しか解けない！ #東京の難読地名クイズ
          </Typography>
        </Box>
        <Box sx={{mt: 6}}>
          <Typography fontWeight="bold">
            { id }. この地名はなんて読む？
          </Typography>
          <Box sx={{
            mt: 3,
            display: "flex",
            justifyContent: "center"
          }}>
            <Image src="/img/kuizy01.png" width="620" height="372" />
          </Box>
          <Box sx={{width: '100%'}}>
            {choices.map(choice => {
              return (
                <Box sx={{width: '100%', mb: 2}} key={choice}>
                  <Button
                    variant="outlined"
                    fullWidth={true}
                    sx={{
                        justifyContent: 'start',
                        py: 1,
                        fontWeight: 'bold'
                    }}
                    onClick={judgeAnswer}
                    disabled={buttonDisabled}
                  >
                    {choice}
                  </Button>
                </Box>
              )
            })}
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default Home
