import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { weatherType } from "../utilities/weatherType";
import { useGetWeather } from "../hooks/useGetWeather";
import { Loading } from "../components/Loading";

export const CurrentWeather = () => {
    const { loading, weather, error } = useGetWeather();

    if (loading) return <Loading />;
    if (error)
        return (
            <View>
                <Text>{error}</Text>
            </View>
        );

    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
                <Feather
                    name={weatherType["Thunderstorm"].icon}
                    size={100}
                    color={weatherType["Thunderstorm"].backgroundColor}
                />
                <Text style={styles.temp}>6</Text>
                <Text style={styles.feels}>Feels like 5</Text>
                <View style={styles.highLowWrapper}>
                    <Text style={styles.highLow}>High: 8</Text>
                    <Text style={styles.highLow}>Low: 6</Text>
                </View>
            </View>
            <View style={styles.bodyWrapper}>
                <Text style={styles.description}>Its sunny</Text>
                <Text style={styles.message}>
                    {weatherType["Thunderstorm"].message}
                </Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "#F5EE9E",
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    temp: {
        color: "black",
        fontSize: 48,
    },
    feels: {
        color: "black",
        fontSize: 30,
    },
    highLowWrapper: {
        flexDirection: "row",
    },
    highLow: {
        color: "black",
        fontSize: 20,
    },
    bodyWrapper: {
        paddingLeft: 25,
        marginBottom: 40,
        justifyContent: "flex-end",
        alignItems: "flex-start",
    },
    description: {
        fontSize: 48,
    },
    message: {
        fontSize: 30,
    },
});
