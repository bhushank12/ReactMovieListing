import './css/App.css'
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Favourites from './pages/Favourites';
import NavBar from './components/Navbar';

function App() {
  const movieNumber = 1;

  return (
    <div>
      <NavBar></NavBar>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/favourites" element={<Favourites></Favourites>}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App;
