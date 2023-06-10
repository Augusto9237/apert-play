import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Home } from '../screens/Home';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: "#000000", borderTopColor: "#000000" } }}>
            <Tab.Screen
                name='home'
                component={Home}
                options={{
                    tabBarIcon: () => <Feather name='home' size={24} color="#fff" />,
                    tabBarLabel: 'Home',
                    tabBarLabelStyle: { color: "#fff" },
                }}
            />
            <Tab.Screen
                name='GuiaPlay'
                component={Home}
                options={{
                    tabBarIcon: () => <AntDesign name='play' size={32} color="#F00000" />,
                    tabBarLabel: 'GuiaPlay',
                    tabBarLabelStyle: { color: "#F00000" },
                }}
            />
            <Tab.Screen
                name='contacts'
                component={Home}
                options={{
                    tabBarIcon: () => <Feather name='phone' size={24} color="#fff" />,
                    tabBarLabel: 'Contato',
                    tabBarLabelStyle: { color: "#fff" },
                }}
            />
        </Tab.Navigator>
    )
}