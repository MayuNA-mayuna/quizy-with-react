import { Box, Typography } from "@mui/material"

const Answer = ({ isRightAnswer, answer }) => {
  return (
    <>
      <Box borderRadius={2} p={2} sx={{ backgroundColor: '#f5f5f5' }}>
        <Typography
          sx={{
            fontWeight: 'bold',
            borderBottom: `3px solid ${isRightAnswer ? '#1976d2' : '#9c27b0'}`,
            display: 'block',
            width: 'fit-content',
            mb: 2,
          }}
        >
          {!isRightAnswer && '不'}正解！
        </Typography>
        <Typography>
          正解は「{ answer }」です！
        </Typography>
      </Box>
    </>
  )
}

export default Answer
