import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { weatherType } from "../utilities/weatherType";

export const CurrentWeather = ({ weatherData }) => {
    const {
        main: { temp, feels_like, temp_max, temp_min },
        weather,
    } = weatherData;

    const weatherCondition = weather[0].main;
    const weatherConditionDesc = weather[0].description;

    return (
        <SafeAreaView
            style={[
                styles.wrapper,
                {
                    backgroundColor:
                        weatherType[weatherCondition].backgroundColor,
                },
            ]}
        >
            <View style={styles.container}>
                <Feather
                    name={weatherType[weatherCondition].icon}
                    size={100}
                    color="white"
                />
                <Text style={styles.textLarge}>{`${Math.round(temp)}°`}</Text>
                <Text
                    style={styles.textMid}
                >{`Feels like ${feels_like}°`}</Text>
                <View style={styles.highLowWrapper}>
                    <Text style={styles.textSmall}>{`High: ${temp_max}°`}</Text>
                    <Text style={styles.textSmall}>{`Low: ${temp_min}°`}</Text>
                </View>
            </View>
            <View style={styles.bodyWrapper}>
                <Text style={styles.textLarge}>{weatherConditionDesc}</Text>
                <Text style={styles.textMid}>
                    {weatherType[weatherCondition].message}
                </Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    textSmall: {
        color: "white",
        fontSize: 20,
    },
    textMid: {
        color: "white",
        fontSize: 30,
    },
    textLarge: {
        color: "white",
        fontSize: 48,
    },
    highLowWrapper: {
        flexDirection: "row",
        gap: 10,
    },
    bodyWrapper: {
        paddingLeft: 25,
        marginBottom: 40,
        justifyContent: "flex-end",
        alignItems: "flex-start",
    },
});
