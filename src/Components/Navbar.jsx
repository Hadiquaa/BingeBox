import React from 'react'
import { useState } from 'react';
import { FaHeart } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
const Navbar = (props) => {
    const { setSearchTitle} = props;
    const [title,setTitle] = useState('');
    const navigate = useNavigate();

    const handleEnter = (e) => {
        if(e.key === 'Enter'){
            setSearchTitle(e.target.value);
            navigate('/');
            setTitle('');
        }  
  
    }
  return (
    <div className="bg-gray-800 h-18 fixed top-0 w-full" style={{zIndex:"10"}}>
      <div className="flex justify-between items-center mx-12 h-full">
        <Link to="/">
          <div className="text-3xl font-bold">
            Binge<span className="text-amber-300">Box</span>
          </div>
        </Link>

        <div className="flex gap-3 items-center">
          <div className="w-md ">
            <input
              type="text"
              name="title"
              placeholder="Search for a movie"
              className="bg-white text-gray-700 w-4/5 h-9 rounded-md px-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyDown={(e) => handleEnter(e)}
            />
          </div>
          <Link to="/favorites">
            <div className="flex gap-2 items-center cursor-pointer">
              <p className="text-xl font-bold">Favorites</p>
              <FaHeart className="text-white h-6 w-6" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar