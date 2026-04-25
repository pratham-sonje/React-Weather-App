const API_Key = "578919789258536c95dc1ec79098c79c";

export const getWeather = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`,
    );

    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
};
