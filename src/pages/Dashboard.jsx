import React, {
  useEffect,
  useState,
  useContext,
  useMemo,
  useCallback,
} from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { getWeather } from "../services/weatherService";
import WeatherCard from "../components/WeatherCard";
import SearchBar from "../components/SearchBar";

const Dashboard = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const temperatureMessage = useMemo(() => {
    if (!weather) return "";

    return weather.main.temp > 30 ? "Hot Weather 🔥" : "Cool Weather ❄️";
  }, [weather]);

  // const handleSearch = async () => {
  //   const data = await getWeather(city);
  //   setWeather(data);
  // };
  const handleSearch = useCallback(async () => {
    if (!city) {
      setError("Please enter a city");
      return;
    }

    try {
      setLoading(true);
      setError("");
      const data = await getWeather(city);
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [city]);
  useEffect(() => {
    const fetchDefaultWeatherData = async () => {
      const data = await getWeather("Pune");
      setWeather(data);
    };
    fetchDefaultWeatherData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Weather Dashboard</h2>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        {/* Search */}
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
          >
            Search
          </button>
        </div>

        {/* States */}
        {loading && <p className="text-blue-500">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {/* Weather */}
        <WeatherCard weather={weather} />
      </div>
    </div>
  );
};

export default Dashboard;
