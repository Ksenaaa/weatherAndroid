import {
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { IconText } from "../components/IconText";
import { useGetWeather } from "../hooks/useGetWeather";
import { Loading } from "../components/Loading";

export const City = () => {
    const { loading, city } = useGetWeather();

    if (loading) return <Loading />;

    return (
        <SafeAreaView style={styles.wrapper}>
            <ImageBackground
                style={styles.image}
                source={require("../../assets/city-background.jpg")}
            >
                <Text style={[styles.cityText, styles.cityName]}>
                    {city?.name}
                </Text>
                <Text style={[styles.cityText, styles.countryName]}>
                    {city?.country}
                </Text>
                <View style={styles.populationWrapper}>
                    <IconText
                        bodyText={"8000"}
                        bodyTextStyles={styles.populationText}
                        iconColor={"red"}
                        iconName={"user"}
                    />
                </View>
                <View style={styles.riseSetWrapper}>
                    <IconText
                        bodyText={"10:46:50am"}
                        bodyTextStyles={styles.riseSetText}
                        iconColor={"white"}
                        iconName={"sunrise"}
                    />

                    <IconText
                        bodyText={"17:23:43pm"}
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
