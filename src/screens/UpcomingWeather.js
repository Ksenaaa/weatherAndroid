import {
    FlatList,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
} from "react-native";
import { ListItem } from "../components/ListItem";
import { Empty } from "../components/Empty";

const dataWeather = [
    {
        dt_txt: "2023-02-18 12:00:00",
        main: {
            temp_max: 9.66,
            temp_min: 4.16,
        },
        weather: [{ main: "sun" }],
    },
    {
        dt_txt: "2023-02-18 15:00:00",
        main: {
            temp_max: 10.66,
            temp_min: 6.16,
        },
        weather: [{ main: "cloud" }],
    },
    {
        dt_txt: "2023-02-18 19:00:00",
        main: {
            temp_max: 7.66,
            temp_min: 7.16,
        },
        weather: [{ main: "cloud-rain" }],
    },
];

export const UpcomingWeather = () => {
    const renderItem = ({ item }) => (
        <ListItem
            condition={item.weather[0].main}
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
                <Text style={styles.title}>Upcoming weather</Text>
                <FlatList
                    data={dataWeather}
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
