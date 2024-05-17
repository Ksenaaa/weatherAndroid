import { StyleSheet, Text, View } from "react-native";

export const Empty = () => (
    <View style={styles.container}>
        <Text style={styles.text}>No Data...</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "royalblue",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "white",
        fontSize: 30,
    },
});
