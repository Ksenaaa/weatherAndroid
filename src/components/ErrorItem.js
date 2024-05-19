import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

export const ErrorItem = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Something went wrong</Text>
            <Feather name={"frown"} color={"white"} size={80} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "pink",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "white",
        fontSize: 30,
        marginHorizontal: 10,
        textAlign: "center",
    },
});
