import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

export const ListItem = (props) => {
    const { dt_text, min, max, condition } = props;

    return (
        <View style={styles.item}>
            <Feather name={condition} size={50} color={"white"} />
            <Text style={styles.date}>{dt_text}</Text>
            <Text style={styles.temp}>{min}</Text>
            <Text style={styles.temp}>{max}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderWidth: 3,
        backgroundColor: "royalblue",
        borderRadius: 15,
    },
    temp: {
        color: "white",
        fontSize: 20,
    },
    date: {
        color: "white",
        fontSize: 15,
    },
});
