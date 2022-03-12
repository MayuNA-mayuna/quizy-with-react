import data from "../src/data"
import { Box, Button, Container, Typography } from "@mui/material"
import Image from "next/image"

const Home = () => {
  const id = data[0].id
  const choices = data[0].choices
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
                <Box sx={{width: '100%', mb: 2}}>
                  <Button variant="outlined" fullWidth="true" sx={{justifyContent: 'start', py: 1, fontWeight: 'bold'}}>{choice}</Button>
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
