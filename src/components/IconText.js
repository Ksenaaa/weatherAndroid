import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

export const IconText = ({ bodyText, iconName, iconColor, bodyTextStyles }) => {
    return (
        <View style={styles.container}>
            <Feather name={iconName} color={iconColor} size={50} />
            <Text style={[styles.text, bodyTextStyles]}>{bodyText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontWeight: "bold",
    },
});
