import React from "react";

const MovieModal = ({ open, onClose }) => {
  console.log(open);

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      style={{
        inset: "0",
        color: "black",
        backgroundColor: "rgba(0,0,0,0.5)",
        backdropFilter: true,
        transition: "opacity",
      }}
      className="fixed inset-0 flex justify-center items-center  backdrop-blur-sm transition-opacity "
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg relative w-lg"
        style={{padding:"1rem"}}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute hover:text-gray-900"
          style={{top : "6px", right: "10px", fontSize : "1.5rem"}}
          onClick={onClose}
        >
          ✖
        </button>
        <div className="text-center flex gap-4 p-10">
          <div>
            <img src={open.Poster} alt={open.Title} />
          </div>
          <div style={{width:"220px"}} >
            <h2 className="text-3xl font-bold text-black">{open.Title}</h2>
            <p>
              <strong>Year:</strong> {open.Year}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
