import cron from "node-cron";
import { createMovie } from "../controllers/movie.controller.js";
import { creatMovieOnDb } from "../utils/apiClient.js";

async function addMovie() {
  console.log("Starting to add movie.....");
  await creatMovieOnDb({
    movieId: Math.floor(Math.random() * 100 + 1),
    title: "The Great Adventure",
    description:
      "A thrilling journey of self-discovery and adventure across uncharted territories.",
    thumbnail: "https://example.com/images/thumbnail.jpg",
    bannerImage: "https://example.com/images/banner.jpg",
    trailerVideo: "https://example.com/videos/trailer.mp4",
    cast: [
      {
        name: "John Doe",
        image: "https://example.com/images/johndoe.jpg",
      },
      {
        name: "Jane Smith",
        image: "https://example.com/images/janesmith.jpg",
      },
    ],
    rating: "8.5",
    duration: 230,
    genre: "Drama",
    releaseDate: "2024-09-15",
    language: "English",
    theatre: {
      name: "Grand Cinema",
      location: "123 Main St, Springfield, USA",
      phoneNumber: 18005551234,
    },
  });
  setTimeout(() => {
    console.log("Movie Added..");
  }, 10000);
}

cron.schedule("* 23 * * *", () => {
  addMovie();
});
