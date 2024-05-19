import { useEffect, useState } from "react";
import * as Location from "expo-location";

import { fetchWeatherService } from "../service/weatherService";

export const useGetWeather = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [weather, setWeather] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                let { status } =
                    await Location.requestForegroundPermissionsAsync();

                if (status !== "granted") {
                    setError("Permission to access location was denied");
                    return;
                }

                let newLocation = await Location.getCurrentPositionAsync({});

                const weatherData = await fetchWeatherService(
                    newLocation.coords.latitude,
                    newLocation.coords.longitude
                );

                setWeather(weatherData);
            } catch (error) {
                setError("Could not fetch weather");
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return { loading, error, weather };
};
