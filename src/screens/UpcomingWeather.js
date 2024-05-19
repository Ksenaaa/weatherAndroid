import {
    FlatList,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
} from "react-native";

import { ListItem } from "../components/ListItem";
import { Empty } from "../components/Empty";
import { weatherType } from "../utilities/weatherType";

export const UpcomingWeather = ({ weatherData }) => {
    const renderItem = ({ item }) => (
        <ListItem
            condition={weatherType[item.weather[0].main].icon}
            dt_text={item.dt_txt}
            min={item.main.temp_min}
            max={item.main.temp_max}
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                style={styles.image}
                source={require("../../assets/upcoming-background.jpg")}
            >
                <FlatList
                    data={weatherData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.dt_txt}
                    ListEmptyComponent={<Empty />}
                />
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //marginTop: StatusBar.currentHeight || 0,
        backgroundColor: "royalblue",
    },
    image: { flex: 1 },
    title: {
        color: "royalblue",
        textAlign: "center",
        fontSize: 30,
    },
});
