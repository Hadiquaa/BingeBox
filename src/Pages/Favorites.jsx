import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import FavoritePoster from "../Components/FavoritePoster";
import { MdChevronRight } from "react-icons/md";
import MovieModal from "../Components/MovieModal";

const Favorites = () => {
  const favList = useSelector((state) => state.favorites.movies);

  const sliderRef = useRef(null);
  const [isEnd, setIsEnd] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false); 
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    if (sliderRef.current) {
      const { scrollWidth, clientWidth } = sliderRef.current;
      setIsEnd(clientWidth >= scrollWidth); 
      setIsScrollable(scrollWidth > clientWidth); 
    }
  }, [favList]);

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 500;
      setTimeout(() => {
        const { scrollLeft, clientWidth, scrollWidth } = sliderRef.current;
        setIsEnd(scrollLeft + clientWidth >= scrollWidth);
      }, 300);
    }
  };

  const handleMovieClick = (movie) => {
    console.log("FavoriteMovieClicked", movie);
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    console.log("closing modal");
    setSelectedMovie(null);
  };

  return (
    <div style={{ paddingTop: "6rem" }}>
      <div className="mx-8">
        <h1 className="font-bold text-amber-300 text-3xl mb-4">
          Your Favorites
        </h1>
        <div>
          {favList && favList.length > 0 ? (
            <div className="relative flex items-center group">
              <div
                ref={sliderRef}
                className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth overflow-y-hidden"
                style={{ overflowY: "hidden" }}
              >
                {favList.map((item) => (
                  <FavoritePoster
                    key={item.imdbID}
                    movie={item}
                    onClick={() => handleMovieClick(item)}
                  />
                ))}
              </div>
              {/* Right button only appears if scrolling is needed */}
              {isScrollable && !isEnd && (
                <div
                  className="absolute right-0 h-full bg-gray-900/50 hidden group-hover:block cursor-pointer"
                  onClick={scrollRight}
                >
                  <div className="flex justify-center items-center h-full">
                    <MdChevronRight size={70} />
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="font-bold">
              <h2>No favorite movies found</h2>
              <p>
                Add some movies to your favorites by clicking on the "Add to
                Favorites" button next to each movie poster.
              </p>
            </div>
          )}
        </div>
      </div>
      {selectedMovie && (
        <MovieModal open={selectedMovie} onClose={closeModal} />
      )}
    </div>
  );
};

export default Favorites;
