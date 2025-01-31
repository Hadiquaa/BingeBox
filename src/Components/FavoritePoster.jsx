import React,{useState} from "react";
import toast from "react-hot-toast";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeMovie } from "../redux/FavoritesSlice";

const FavoritePoster = (props) => {
  const { movie, onClick } = props;
  const [isHovered, setIsHovered] = useState(false);

  const dispatch = useDispatch();
  const favList = useSelector((state) => state.favorites.movies);


  const removeFavorite = (e) => {
    e.stopPropagation();
    dispatch(removeMovie(movie.imdbID));
    toast.success("Removed from Favorites ");
    console.log("Removed from favorites", movie);
    console.log(favList);
  };
  return (
    <div
      className="cursor-pointer w-[300px] inline-block p-2 hover:scale-105 ease-in-out duration-300 relative group/item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        onClick={() => onClick(movie)}
        src={movie.Poster}
        alt={movie.Title}
        className="w-[300px] h-[400px] object-cover"
      />
      {isHovered && (
        <div className="absolute bottom-6 w-full h-14 flex justify-center items-center bg-gray-900/50 cursor-pointer transition-opacity duration-300">
          <div
            className="flex gap-4 justify-center items-center h-14"
            onClick={removeFavorite}
          >
            <div className="font-semibold text-lg text-neutral-200">
              Remove From Favorites
            </div>
            <FaHeart className="text-red-500" />
          </div>
        </div>
      )}
    </div>
  );
};

export default FavoritePoster;
