import { get } from "./fetchService";

const API_KEY = process.env.WEATHER_API_KEY;

export const fetchWeatherService = async (latitude, longitude) => {
    const response = await get(
        `data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );

    return response;
};
