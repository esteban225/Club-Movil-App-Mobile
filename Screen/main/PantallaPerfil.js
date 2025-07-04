import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BotonComponent from "../../components/BottonComponent";
import api from "../../Src/Service/Conexion";
import { logoutUser } from "../../Src/Service/AuthService";



export default function PantallaPerfil({ navigation }) {
    const [usuario, setUsuario] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const cargarPerfil = async () => {
            try {
                const token = await AsyncStorage.getItem("userToken");
                if (!token) {
                    console.log("No se encontró token, redirigiendoi al login");
                    return;
                }

                console.log("Intentando cargar perfil con token:", token);
                const response = await api.get("/me");
                console.log("Respuesta del perfil:", response.data);
                setUsuario(response.data);
            } catch (error) {
                console.error("Error al cargar perfil:", error);

                if (error.isAuthError || error.shouldRedirectToLogin) {
                    console.log("Error de autenticación manejado por el interceptor, redirigiendo automáticamente");
                    return;
                }

                if (error.response) {
                    console.log("Error response:", error.response.status, error.response.data);

                    Alert.alert(
                        "Error del servidor",
                        `Error ${error.response.status}: ${error.response.data?.message || "No se pudo cargar el perfil"}`,
                        [
                            {
                                text: "OK",
                                onPress: async () => {
                                    await AsyncStorage.removeItem("userToken");
                                    //El AppNavegacion se encargará de redirigir automáticamente
                                }

                            }
                        ]

                    );
                } else if (error.request) {
                    Alert.alert(
                        "Error de conexión",
                        "No se pudo conectar con el servidor. Verifica a internet.",
                        [
                            {
                                text: "OK",
                                onPress: async () => {
                                    await AsyncStorage.removeItem("userToken");
                                    // El AppNavegación se encargará de redirigir automáticamente
                                }
                            }
                        ]
                    );
                } else {
                    Alert.alert(
                        "Error",
                        "Ocurrió un error inesperado al cargar el perfil.",
                        [
                            {
                                text: "OK",
                                onPress: async () => {
                                    await AsyncStorage.removeItem("userToken");
                                    // El AppNavegación se encarga de redirigir automáticamente
                                }
                            }
                        ]
                    );
                }
            } finally {
                setLoading(false);
            }
        };
        cargarPerfil();
    }, []);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#007B8C" />
            </View>
        );
    }

    if (!usuario) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Perfil de Usuario</Text>
                <View style={styles.containerPerfil}>
                    <Text style={styles.errorText}>
                        No se pudo cargar la información del perfil
                    </Text>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perfil de Usuario</Text>
            <View style={styles.ContainerPerfil}>
                <Text style={styles.profileText}>Nombre: {usuario.user.name || "No disponible"}</Text>
                <Text style={styles.profileText}>Email: {usuario.user.email || "No disponible"}</Text>

                <BotonComponent title="Editar Perfil" onPress={() => { }} />
                <BotonComponent
                    title="Cerrar Sesión"
                    onPress={async () => { await logoutUser() }}
                />
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    ContainerPerfil: {
        width: "80%",
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    profileText: {
        fontSize: 18,
        marginBottom: 10,
        color: "#333",
    },
    errorText: {
        fontSize: 16,
        color: "red",
        textAlign: "center",
        marginBottom: 20,
    },
});