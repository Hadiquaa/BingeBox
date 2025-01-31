import React from "react";
import toast from "react-hot-toast";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeMovie } from "../redux/FavoritesSlice";

const FavoritePoster = (props) => {
  const { movie } = props;
  const dispatch = useDispatch();
  const favList = useSelector((state) => state.favorites.movies);
  const removeFavorite = () => {
    dispatch(removeMovie(movie.imdbID));
    toast.success("Removed from Favorites ");
    console.log("Removed from favorites", movie);
    console.log(favList);
  };
  return (
    <div className="cursor-pointer w-[300px] inline-block p-2 hover:scale-105 ease-in-out duration-300 relative group/item">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-[300px] h-[400px] object-cover"
      />
      <div className="absolute bottom-8 w-full h-8 hidden group-hover/item:block">
        <div
          className="flex gap-4 justify-center items-center bg-gray-900/50 h-14"
          onClick={removeFavorite}
        >
          <div className="font-semibold text-lg text-neutral-200">
            Remove From Favorites
          </div>
          <FaHeart className="text-red-500" />
        </div>
      </div>
    </div>
  );
};

export default FavoritePoster;
