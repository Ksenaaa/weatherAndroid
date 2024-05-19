import { StyleSheet, Text, View } from "react-native";
import moment from "moment";
import { Feather } from "@expo/vector-icons";

export const ListItem = (props) => {
    const { dt_text, min, max, condition } = props;

    return (
        <View style={styles.item}>
            <Feather name={condition} size={50} color={"white"} />
            <Text style={styles.date}>
                {moment(dt_text).format("DD/MM/YY")}
            </Text>
            <View style={styles.dateWrapper}>
                <Text style={styles.date}>
                    {moment(dt_text).format("dddd")}
                </Text>
                <Text style={styles.date}>
                    {moment(dt_text).format("hh a")}
                </Text>
            </View>
            <Text style={styles.temp}>
                {`${Math.round(min)}°/${Math.round(max)}°`}
            </Text>
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
    dateWrapper: {
        flexDirection: "column",
    },
    date: {
        color: "white",
        fontSize: 15,
    },
});
