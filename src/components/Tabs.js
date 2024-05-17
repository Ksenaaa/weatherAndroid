import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import { UpcomingWeather } from "../screens/UpcomingWeather";
import { City } from "../screens/City";
import { CurrentWeather } from "../screens/CurrentWeather";

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "black",
                tabBarInactiveTintColor: "grey",
            }}
        >
            <Tab.Screen
                name={"Current"}
                component={CurrentWeather}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name={"droplet"}
                            size={25}
                            color={focused ? "orange" : "black"}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={"Upcoming"}
                component={UpcomingWeather}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name={"clock"}
                            size={25}
                            color={focused ? "orange" : "black"}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={"City"}
                component={City}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name={"home"}
                            size={25}
                            color={focused ? "orange" : "black"}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};
