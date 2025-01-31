import { useEffect, useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import './output.css';
import Favorites from './Pages/Favorites';


function App() {

  const [movies,setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [searchTitle, setSearchTitle] = useState('boys');
  const [isLoading, setIsLoading] = useState(false);

  console.log(searchTitle);

  const MOVIE_API_URL = `https://www.omdbapi.com/?apikey=1bee52d4&s=${searchTitle}&type=movie&page=1`;
  const SERIES_API_URL = `https://www.omdbapi.com/?apikey=1bee52d4&s=${searchTitle}&type=series&page=1`;



  async function fetchMovies(){
    setIsLoading(true);
    try {
      const res = await fetch(MOVIE_API_URL);
      const data = await res.json();
      setMovies(data.Search);
      console.log(data.Search);
    }
     catch (error) {
      console.log(error);
      setMovies([]);
    }
    setIsLoading(false);
  }

  async function fetchSeries() {
    setIsLoading(true);
    try {
      const res = await fetch(SERIES_API_URL);
      const data = await res.json();
      setSeries(data.Search);
      console.log(data.Search);
    } catch (error) {
      console.log(error);
      setSeries([]);
    }
    setIsLoading(false);
  }
  useEffect(()=>{
    fetchMovies();
    fetchSeries();
  }, [searchTitle]);


  return (
    
    <div className="App bg-gray-700 text-white pb-2 min-h-screen">
      <Navbar setSearchTitle={setSearchTitle} searchTitle={searchTitle}/>
      <Routes>
        <Route path="/" element={<Home movies={movies} isLoading={isLoading} series={series}/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
