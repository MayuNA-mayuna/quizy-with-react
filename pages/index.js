import data from "../src/data"

const Home = () => {
  const example = data[0].id
  return (
    <>
      <h1>Quizy with React</h1>
      <p>{example}</p>
    </>
  )
}

export default Home
