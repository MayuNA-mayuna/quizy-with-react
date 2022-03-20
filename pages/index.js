import data from "../src/data"
import { Box, Container, Typography } from "@mui/material"
import Quiz from '/src/components/quiz'

const Home = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{mt: 5, mb: 6}}>
          <Typography variant="h6" align="center" fontWeight="bold">
            ガチで東京の人しか解けない！ #東京の難読地名クイズ
          </Typography>
        </Box>
        {data.map((datum) => {
          return <Quiz datum={datum} />
        })}
      </Container>
    </>
  )
}

export default Home
