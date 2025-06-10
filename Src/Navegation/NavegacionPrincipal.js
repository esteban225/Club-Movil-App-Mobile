import AsociadoStack from "./stacks/AsociadoStack";
import ActividadStack from "./stacks/ActividadStack";
import PagoStack from "./stacks/PagoStack";
import ParticipanteStack from "./stacks/ParticipanteStack";
import PrestamoStack from "./stacks/PrestamoStack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';



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
            <Tab.Screen name="Asociados" component={AsociadoStack} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" size={size} color={color} />
                ),
            }}/>

            <Tab.Screen name="Actividades" component={ActividadStack} options={{
                tabBarIcon: ({ color, size }) => (
                    <Feather name="activity" size={24} color="black" />
                )
            }}/>

            <Tab.Screen name="Pagos" component={PagoStack} options={{
                tabBarIcon: ({ color, size }) =>
                    <Entypo name="paypal" size={24} color="black" />

            }}/>

            <Tab.Screen name="Participantes" component={ParticipanteStack} options={{
                tabBarIcon: ({ color, size }) =>
                    <FontAwesome6 name="people-group" size={24} color="black" />

            }}/>

            <Tab.Screen name="Prestamos" component={PrestamoStack} options={{
                tabBarIcon: ({ color, size }) =>
                    <MaterialCommunityIcons name="account-cash-outline" size={24} color="black" />
            }}/>
        </Tab.Navigator>
    );
}