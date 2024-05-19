import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export const Loading = () => (
    <View style={styles.container}>
        <ActivityIndicator color="#e47200" size="large" />
        <Text style={styles.text}>Loading...</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 14,
        color: "#e47200",
        marginLeft: 10,
    },
});
