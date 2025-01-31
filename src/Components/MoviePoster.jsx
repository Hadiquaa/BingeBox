import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { FaHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie } from '../redux/FavoritesSlice';


const MoviePoster = (props) => {
    const {movie, onClick} = props;
    const [isHovered, setIsHovered] = useState(false); 
    
    const dispatch = useDispatch();
    const favList = useSelector(state => state.favorites.movies);

    const isFavorite = favList.some(f => f.imdbID === movie.imdbID);

    const addFavorite = (e) => {
        e.stopPropagation();
        if(!isFavorite){
            dispatch(addMovie(movie));
            toast.success("Added to Favorites 🚀")
        }

    }
  return (
    <div
      className="cursor-pointer w-[300px] inline-block p-2 hover:scale-105 ease-in-out duration-300 relative "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <img
          onClick={() => onClick(movie)}
          src={movie.Poster}
          alt={movie.Title}
          className="w-[300px] h-[400px] object-cover"
        />
        {isHovered && (
          <div className="absolute bottom-6 w-full h-14 flex justify-center items-center bg-gray-900/50 cursor-pointer transition-opacity duration-300">
            <div
              className={`flex gap-4 items-center text-neutral-200 font-semibold text-lg ${
                isFavorite ? "cursor-not-allowed" : "cursor-pointer"
              }`}
              onClick={addFavorite}
            >
              {isFavorite ? "Added to Favorites" : "Add to Favorites"}
              <FaHeart
                className={isFavorite ? "text-gray-400" : "text-red-500"}
              />
            </div>
          </div>
        )}
      </div>
    
    </div>
  );
}

export default MoviePoster