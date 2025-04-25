import './App.css'
import MovieCard from './components/MovieCard'

function App() {

  return (
    <>
      <MovieCard movie={{title: "YJHD", release_date: "2024"}}></MovieCard>
      <MovieCard movie={{title: "JAAT", release_date: "2024"}}></MovieCard>
    </>
  )
}

export default App
