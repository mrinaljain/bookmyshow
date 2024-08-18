import React, { useState } from "react";
import { ADD_MOVIE } from "../utils/constants";
import { CreateMovie } from "../api/movie.api";

function AddMovie() {
  const [movie, setMovie] = useState({
    movieId: "25",
    title: "",
    description: "",
    thumbnail: "",
    bannerImage: "",
    trailerVideo: "",
    cast: [{ name: "", image: "" }],
    rating: "",
    duration: "",
    genre: "Drama",
    releaseDate: "",
    language: "English",
    theatre: { name: "", location: "", phoneNumber: "" },
  });
  async function addMovie(movieData) {
    try {
      const response = CreateMovie(movieData);
      console.log("ADD MOVIE", response);
    } catch (error) {
      console.log("ADD MOVIE", error.message);
    }
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };
  const handleCastChange = (index, e) => {
    const { name, value } = e.target;
    const newCast = [...movie.cast];
    newCast[index][name] = value;
    setMovie({ ...movie, cast: newCast });
  };

  const handleAddCast = () => {
    setMovie({ ...movie, cast: [...movie.cast, { name: "", image: "" }] });
  };

  const handleRemoveCast = (index) => {
    const newCast = movie.cast.filter((_, i) => i !== index);
    setMovie({ ...movie, cast: newCast });
  };
  const handleTheatreChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, theatre: { ...movie.theatre, [name]: value } });
  };

  const handleMovieSubmit = (movieData) => {
    console.log("Movie data:", movieData);
    // Here you can handle the form data, e.g., send it to an API
    addMovie(movieData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleMovieSubmit(movie);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded-md"
    >
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Title:</label>
        <input
          type="text"
          name="title"
          value={movie.title}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Description:
        </label>
        <textarea
          name="description"
          value={movie.description}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Thumbnail URL:
        </label>
        <input
          type="text"
          name="thumbnail"
          value={movie.thumbnail}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Banner Image URL:
        </label>
        <input
          type="text"
          name="bannerImage"
          value={movie.bannerImage}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Trailer Video URL:
        </label>
        <input
          type="text"
          name="trailerVideo"
          value={movie.trailerVideo}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Cast:</label>
        {movie.cast.map((member, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={member.name}
              onChange={(e) => handleCastChange(index, e)}
              className="w-1/2 px-3 py-2 border rounded-md mr-2"
            />
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={member.image}
              onChange={(e) => handleCastChange(index, e)}
              className="w-1/2 px-3 py-2 border rounded-md mr-2"
            />
            <button
              type="button"
              onClick={() => handleRemoveCast(index)}
              className="px-3 py-2 bg-red-500 text-white rounded-md"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddCast}
          className="px-3 py-2 bg-blue-500 text-white rounded-md"
        >
          Add Cast Member
        </button>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Rating:</label>
        <input
          type="number"
          name="rating"
          value={movie.rating}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Duration (in minutes):
        </label>
        <input
          type="number"
          name="duration"
          value={movie.duration}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Genre:</label>
        <select
          name="genre"
          value={movie.genre}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
        >
          <option value="Drama">Drama</option>
          <option value="Thriller">Thriller</option>
          <option value="Horror">Horror</option>
          <option value="Fiction">Fiction</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Release Date:
        </label>
        <input
          type="date"
          name="releaseDate"
          value={movie.releaseDate}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Language:</label>
        <select
          name="language"
          value={movie.language}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
        >
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Telugu">Telugu</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Theatre Name:
        </label>
        <input
          type="text"
          name="name"
          value={movie.theatre.name}
          onChange={handleTheatreChange}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Theatre Location:
        </label>
        <input
          type="text"
          name="location"
          value={movie.theatre.location}
          onChange={handleTheatreChange}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Theatre Phone Number:
        </label>
        <input
          type="text"
          name="phoneNumber"
          value={movie.theatre.phoneNumber}
          onChange={handleTheatreChange}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <button
        type="submit"
        className="w-full px-3 py-2 bg-green-500 text-white rounded-md"
      >
        Submit
      </button>
    </form>
  );
}

export default AddMovie;
