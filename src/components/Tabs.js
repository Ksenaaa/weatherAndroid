import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import { UpcomingWeather } from "../screens/UpcomingWeather";
import { City } from "../screens/City";
import { CurrentWeather } from "../screens/CurrentWeather";

const Tab = createBottomTabNavigator();

export const Tabs = ({ weatherData }) => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "#F5D538",
                tabBarInactiveTintColor: "#E5D0C3",
                tabBarStyle: { backgroundColor: "#F06543" },
                headerStyle: {
                    backgroundColor: "#F06543",
                },
                headerTitleStyle: {
                    fontWeight: "bold",
                    color: "#E5D0C3",
                    fontSize: 25,
                },
                tabBarLabelStyle: {
                    fontSize: 14,
                    fontWeight: "bold",
                    marginBottom: 2,
                },
                tabBarIconStyle: { marginTop: 3 },
            }}
        >
            <Tab.Screen
                name={"Current"}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name={"droplet"}
                            size={25}
                            color={focused ? "#F5D538" : "#E5D0C3"}
                        />
                    ),
                }}
            >
                {() => <CurrentWeather weatherData={weatherData.list[0]} />}
            </Tab.Screen>
            <Tab.Screen
                name={"Upcoming"}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name={"clock"}
                            size={25}
                            color={focused ? "#F5D538" : "#E5D0C3"}
                        />
                    ),
                }}
            >
                {() => <UpcomingWeather weatherData={weatherData.list} />}
            </Tab.Screen>
            <Tab.Screen
                name={"City"}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name={"home"}
                            size={25}
                            color={focused ? "#F5D538" : "#E5D0C3"}
                        />
                    ),
                }}
            >
                {() => <City weatherData={weatherData.city} />}
            </Tab.Screen>
        </Tab.Navigator>
    );
};
