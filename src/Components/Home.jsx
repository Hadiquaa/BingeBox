import React,{useState,useRef,useEffect}from 'react'
import MoviePoster from './MoviePoster';
import Spinner from './Spinner';
import { MdChevronRight} from 'react-icons/md'
import MovieModal from './MovieModal';

const Home = (props) => {
    const {movies,isLoading,series} = props;

    const movieSliderRef = useRef(null);
    const seriesSliderRef = useRef(null);

    const [isEndMovies, setIsEndMovies] = useState(false);
    const [isEndSeries, setIsEndSeries] = useState(false);

    const [selectedMovie, setSelectedMovie] = useState(null);

   const scrollRight = (sliderRef, setIsEnd) => {
     if (sliderRef.current) {
       sliderRef.current.scrollLeft += 500;

       // Check if we are at the end
       setTimeout(() => {
         const isEnd =
           sliderRef.current.scrollLeft + sliderRef.current.clientWidth >=
           sliderRef.current.scrollWidth;
         setIsEnd(isEnd);
       }, 300); // Add a slight delay to allow scrolling
     }
   };

   useEffect(() => {
     if (movieSliderRef.current) {
       setIsEndMovies(
         movieSliderRef.current.scrollLeft +
           movieSliderRef.current.clientWidth >=
           movieSliderRef.current.scrollWidth
       );
     }

     if (seriesSliderRef.current) {
       setIsEndSeries(
         seriesSliderRef.current.scrollLeft +
           seriesSliderRef.current.clientWidth >=
           seriesSliderRef.current.scrollWidth
       );
     }
   }, [movies, series]);

   const handleMovieClick = (movie) => {
    console.log("MovieClicked", movie);
     setSelectedMovie(movie);
   };

   const closeModal = () => {
    console.log("closing modal");
     setSelectedMovie(null);
   };

  return (
    <div className=" mx-auto  bg-gray-700">
      {isLoading ? (
        <Spinner />
      ) : (
        <div style={{ paddingTop: "6rem" }}>
          {/* {Movies Section} */}
          <div className="mx-8">
            <h1 className="font-bold text-amber-300 text-3xl mb-4">Movies </h1>
            {movies && movies.length > 0 ? (
              <div className="relative flex items-center group">
                <div
                  ref={movieSliderRef}
                  className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth overflow-y-hidden pr-10"
                  style={{ overflowY: "hidden" }}
                >
                  {movies.map((movie) => (
                    <MoviePoster
                      key={movie.imdbID}
                      movie={movie}
                      onClick={() => handleMovieClick(movie)}
                    />
                  ))}
                </div>
                {!isEndMovies && (
                  <div
                    className="absolute right-0  h-full bg-gray-900/50 hidden group-hover:block cursor-pointer"
                    onClick={() => scrollRight(movieSliderRef, setIsEndMovies)}
                  >
                    <div className="flex justify-center items-center h-full">
                      <MdChevronRight size={70} />
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="mb-8">
                <h1 className="font-bold">No movies found</h1>
                <p className="font-bold">Please try a different search term.</p>
              </div>
            )}
          </div>
          <div className="mx-8">
            <h1 className="font-bold text-amber-300 text-3xl mb-4">Series </h1>
            {series && series.length > 0 ? (
              <div className="relative flex items-center group">
                <div
                  ref={seriesSliderRef}
                  className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth"
                  style={{ overflowY: "hidden" }}
                >
                  {series.map((movie) => (
                    <MoviePoster
                      key={movie.imdbID}
                      movie={movie}
                      onClick={() => handleMovieClick(movie)}
                    />
                  ))}
                </div>
                {!isEndSeries && (
                  <div
                    className="absolute right-0  h-full bg-gray-900/50 hidden group-hover:block cursor-pointer"
                    onClick={() => scrollRight(seriesSliderRef, setIsEndSeries)}
                  >
                    <div className="flex justify-center items-center h-full">
                      <MdChevronRight size={70} />
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="mt-4 font-bold">
                <h1>No series found</h1>
                <p>Please try a different search term.</p>
              </div>
            )}
          </div>
          {selectedMovie && (
            <MovieModal open={selectedMovie} onClose={closeModal} />
          )}
        </div>
      )}
    </div>
  );
}

export default Home