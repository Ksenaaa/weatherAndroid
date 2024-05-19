import { useEffect, useState } from "react";
import * as Location from "expo-location";

import { fetchWeatherService } from "../service/weatherService";

export const useGetWeather = () => {
    const [loading, setLoading] = useState(true);
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);
    const [error, setError] = useState(null);
    const [weather, setWeather] = useState([]);
    const [city, setCity] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setError("Permission to access location was denied");
                return;
            }
            let newLocation = await Location.getCurrentPositionAsync({});
            setLat(newLocation.coords.latitude);
            setLon(newLocation.coords.longitude);
        })();
    }, []);

    useEffect(() => {
        if (!lat || !lon) return;

        (async () => {
            try {
                const weatherData = await fetchWeatherService(lat, lon);

                setWeather(weatherData.list);
                setCity(weatherData.city);
            } catch (error) {
                setError("Could not fetch weather");
            } finally {
                setLoading(false);
            }
        })();
    }, [lat, lon]);

    return { loading, error, weather, city };
};
