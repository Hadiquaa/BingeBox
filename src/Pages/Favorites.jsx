import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import FavoritePoster from '../Components/FavoritePoster';
import { MdChevronRight } from "react-icons/md";


const Favorites = () => {

    const favList = useSelector(state => state.favorites.movies);

    useEffect(()=>{}, favList);

    const scrollRight = () => {
      const slider = document.getElementById("slider");
      slider.scrollLeft = slider.scrollLeft + 500;
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
                id="slider"
                className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth overflow-y-hidden"
                style={{ overflowY: "hidden" }}
              >
                {favList.map((item) => (
                  <FavoritePoster key={item.imdbID} movie={item} />
                ))}
              </div>
              <div
                className="absolute right-0  h-full bg-gray-900/50 hidden group-hover:block cursor-pointer"
                onClick={scrollRight}
              >
                <div className="flex justify-center items-center h-full">
                  <MdChevronRight size={70} />
                </div>
              </div>
            </div>
          ) : (
            <div className='font-bold' >
              <h2>No favorite movies found</h2>
              <p>
                Add some movies to your favorites by clicking on the "Add to
                Favorites" button next to each movie poster.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Favorites