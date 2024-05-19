import { NavigationContainer } from "@react-navigation/native";

import { Tabs } from "./src/components/Tabs";
import { Loading } from "./src/components/Loading";
import { useGetWeather } from "./src/hooks/useGetWeather";
import { ErrorItem } from "./src/components/ErrorItem";

export default App = () => {
    const { loading, error, weather } = useGetWeather();

    if (weather && weather.list && !loading) {
        return (
            <NavigationContainer>
                <Tabs weatherData={weather} />
            </NavigationContainer>
        );
    }

    return error ? <ErrorItem /> : <Loading />;
};
