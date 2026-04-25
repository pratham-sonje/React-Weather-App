// import React from "react";

// const WeatherCard = ({ weather }) => {
//   if (!weather) return null;
//   console.log("weather==============>>>>>>>>>>>>>", weather);
//   if (weather.cod != 200) {
//     return (
//       <div
//         style={{ border: "2px solid gray", padding: "20px", width: "300px" }}
//       >
//         <h3>No Data Found </h3>
//       </div>
//     );
//   }
//   return (
//     <div style={{ border: "2px solid gray", padding: "20px", width: "300px" }}>
//       <h3>{weather.name} </h3>
//       <p>Temperature: {weather.main.temp} °C</p>

//       <p>Weather: {weather.weather[0].main}</p>

//       <p>Humidity: {weather.main.humidity}</p>

//       <p>Wind Speed: {weather.wind.speed}</p>
//     </div>
//   );
// };

// export default WeatherCard;
// ############## After using the useMemo() ####################
import React from "react";

function WeatherCard({ weather }) {
  if (!weather) return null;

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-4 text-center">
      <h3 className="text-xl font-bold mb-2">{weather.name}</h3>

      <p className="text-4xl font-semibold text-blue-600">
        {weather.main.temp}°C
      </p>

      <p className="text-gray-600 mt-2">{weather.weather[0].main}</p>

      <div className="flex justify-around mt-4 text-sm text-gray-700">
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Wind: {weather.wind.speed} km/h</p>
      </div>
    </div>
  );
}

export default React.memo(WeatherCard);
