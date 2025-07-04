import InicioStack from "./stacks/InicioStack";
import PerfirStack from "./stacks/PerfirStack";
import ConfiguracionStack from "./stacks/ConfiguracionStack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet } from "react-native";
import PantallaPerfil from "../../Screen/main/PantallaPerfil";




const Tab = createBottomTabNavigator();

export default function NavegacionPrincipal() {
    return (
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "#f3340c", // color cuando está activo
            tabBarActiveTintColor: "757575", // color cuando esta inactivo
            tabBarActiveTintColor: {backgroundColor: "#fff"}, // Fondo de la barra
          }}
        >
            <Tab.Screen name="Inicio" component={InicioStack} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" size={size} color={color} />
                ),
            }}/>

            <Tab.Screen name="Perfil" component={PantallaPerfil} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person-outline" size={size} color={color} />
                )
            }}/>

            <Tab.Screen name="Configuración" component={ConfiguracionStack} options={{
                tabBarIcon: ({ color, size }) =>
                    <Ionicons name="settings-outline" size={size} color={color}  />
            }}/>

        </Tab.Navigator>
    );
}
