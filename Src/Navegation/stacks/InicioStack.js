import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // ✅ CORRECTO
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ListarParticipante from "../../../Screen/Participantes/ListarParticipante"; // ajusta si no existe
import ActividadesStack from "../stacks/ActividadStack"; // tu stack de actividades

const Stack = createNativeStackNavigator();

// Esta pantalla contiene los botones de inicio
function PantallaInicioConBotones({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenidos al Club</Text>

            <View style={styles.buttonsGrid}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("ListarParticipante")}
                >
                    <MaterialCommunityIcons name="account-group" size={40} color="black" />
                    <Text style={styles.buttonText}>Asociados</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("ActividadesStack")}
                >
                    <MaterialCommunityIcons name="run" size={40} color="black" />
                    <Text style={styles.buttonText}>Actividades</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default function InicioStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="PantallaInicio" component={PantallaInicioConBotones} />
            <Stack.Screen name="ActividadesStack" component={ActividadesStack} />
            <Stack.Screen name="ListarParticipante" component={ListarParticipante} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 40,
        marginBottom: 30,
        color: "#333", // Cambiado de "#rfm" a un color hexadecimal válido.
        fontWeight: "bold",
        textAlign: 'center',
    },
    buttonsGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        width: '100%',
        maxWidth: 600,
    },
    button: {
        margin: 0,
        marginVertical: 10,
        marginHorizontal: 10,
        paddingVertical: 15,
        paddingHorizontal: 25,
        backgroundColor: "#fff",
        borderRadius: 8,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        flexGrow: 1,
        minWidth: 140,
        maxWidth: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "#ccc",
        borderStyle: "solid",
        borderWidth: 10,
    },
    buttonText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 8,
    },
});