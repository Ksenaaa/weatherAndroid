import {
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import moment from "moment";

import { IconText } from "../components/IconText";

export const City = ({ weatherData }) => {
    const { name, country, population, sunrise, sunset } = weatherData;

    return (
        <SafeAreaView style={styles.wrapper}>
            <ImageBackground
                style={styles.image}
                source={require("../../assets/city-background.jpg")}
            >
                <Text style={[styles.cityText, styles.cityName]}>{name}</Text>
                <Text style={[styles.cityText, styles.countryName]}>
                    {country}
                </Text>
                <View style={styles.populationWrapper}>
                    <IconText
                        bodyText={`Population: ${population}`}
                        bodyTextStyles={styles.populationText}
                        iconColor={"red"}
                        iconName={"user"}
                    />
                </View>
                <View style={styles.riseSetWrapper}>
                    <IconText
                        bodyText={moment(sunrise).format("h:mm:ss a")}
                        bodyTextStyles={styles.riseSetText}
                        iconColor={"white"}
                        iconName={"sunrise"}
                    />

                    <IconText
                        bodyText={moment(sunset).format("h:mm:ss a")}
                        bodyTextStyles={styles.riseSetText}
                        iconColor={"white"}
                        iconName={"sunset"}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    image: {
        flex: 1,
    },
    cityText: {
        color: "white",
        fontWeight: "bold",
        alignSelf: "center",
    },
    cityName: {
        fontSize: 40,
    },
    countryName: {
        fontSize: 30,
    },
    populationWrapper: {
        marginTop: 30,
    },
    populationText: {
        fontSize: 25,
        color: "red",
    },
    riseSetWrapper: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 30,
    },
    riseSetText: {
        fontSize: 20,
        color: "white",
    },
});
