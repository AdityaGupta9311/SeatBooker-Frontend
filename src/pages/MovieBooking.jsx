import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const MovieBooking = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [shows, setShows] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]); // Store as YYYY-MM-DD
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/auth/getmovie/${movieId}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.error("Error fetching movie details:", err));
    
    axios.get(`http://localhost:8080/shows/movie/${movieId}`)
      .then((res) => setShows(res.data))
      .catch((err) => console.error("Error fetching shows:", err));
  }, [movieId]);

  const handleSeatSelection = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  if (!movie) {
    return <div className="py-10 text-center">Loading movie details...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
    <div className="py-8 text-white bg-gray-900">
      <div className="flex flex-col gap-8 px-4 mx-auto max-w-7xl md:flex-row">
        <img src={movie.poster || "https://via.placeholder.com/300x400"} alt={movie.title}
             className="object-cover w-64 rounded-lg h-96" />
        <div className="flex flex-col justify-center">
          <h1 className="mb-2 text-3xl font-bold">{movie.title}</h1>
          <p className="mb-4 text-gray-400">{movie.language.join(", ").toUpperCase()} • {movie.duration}min</p>
          <div className="flex flex-wrap gap-4 text-sm">
            {movie.genre.map((g) => (
              <span key={g} className="px-3 py-1 bg-gray-800 rounded-full">{g}</span>
            ))}
          </div>
        </div>
      </div>
    </div>

      {/* Booking Section */}
      <div className="px-4 py-8 mx-auto max-w-7xl">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          {/* Date Selection */}
          <h2 className="mb-4 text-xl font-bold">Select Date</h2>
          <div className="flex space-x-4">
            {[...Array(2)].map((_, index) => {
              const date = new Date();
              date.setDate(date.getDate() + index);
              const formattedDate = date.toISOString().split("T")[0];
              return (
                <button key={index} 
                  className={`px-6 py-3 rounded-lg ${
                    selectedDate === formattedDate ? "bg-red-500 text-white" : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  onClick={() => setSelectedDate(formattedDate)}>
                  {date.toDateString()}
                </button>
              );
            })}
          </div>

          {/* Show Time Selection */}
          <h2 className="mt-8 text-xl font-bold">Select Show Time</h2>
          <div className="flex flex-wrap gap-4">
            {shows.filter(show => show.show_date === selectedDate).length > 0 ? (
              shows.filter(show => show.show_date === selectedDate).map((show) => (
                <button key={show.id}
                  className={`px-6 py-3 rounded-lg ${
                    selectedTime === show.show_time ? "bg-red-500 text-white" : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  onClick={() => setSelectedTime(show.show_time)}>
                  🎭 {show.theater.name} - Screen {show.screenNumber} | {show.show_time} | ₹{show.priceperseat}
                </button>
              ))
            ) : (
              <p className="text-gray-500">No shows available for this date</p>
            )}
          </div>

          {/* Seat Selection */}
          <h2 className="mt-8 text-xl font-bold">Select Seats</h2>
          <div className="grid grid-cols-10 gap-2 mt-4">
            {[...Array(60)].map((_, index) => (
              <button key={index} 
                className={`w-8 h-8 rounded-lg ${
                  selectedSeats.includes(index) ? "bg-red-500 text-white" : "bg-gray-100 hover:bg-gray-200"
                }`}
                onClick={() => handleSeatSelection(index)}>
                {index + 1}
              </button>
            ))}
          </div>

          {/* Proceed to Pay */}
          <div className="flex items-center justify-between pt-6 mt-6 border-t">
            <h3 className="text-lg font-bold">Total: ₹{selectedSeats.length * (shows.find(show => show.show_time === selectedTime)?.priceperseat || 300)}</h3>
            <button className="px-8 py-3 text-white bg-red-500 rounded-lg hover:bg-red-600">
              Proceed to Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieBooking;
